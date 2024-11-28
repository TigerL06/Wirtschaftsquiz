const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// MongoDB Verbindung
mongoose.connect('mongodb+srv://lucajw05:5nk8i2AdBHfThzy0@dbwirtschaftsquiz.vjbjm.mongodb.net/?retryWrites=true&w=majority&appName=DBWirtschaftsquiz', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// **Schemas und Models**

const questionSchema = new mongoose.Schema({
    frageID: { type: String, required: true },
    fragesammlung: { type: String },
    quiz: { type: String },
    frage: { type: String, required: true },
    antwort: { type: String, required: true },
    modus: { type: String, enum: ['normal', 'multiple-choice', 'true-false'], required: true },
    auswahl: { type: [String] }
});

const collectionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, enum: ['Fragesammlung', 'Quiz'], required: true }
});

// Zugriff auf die Verbindung
const db = mongoose.connection;

// Zugriff auf spezifische Collections
const sammlungenCollection = db.collection('Sammlungen');
const fragenCollection = db.collection('Fragen');

// **REST-API Endpoints**

/* --- GET REQUESTS --- */


// Alle Sammlungen abrufen
app.get('/collections', async (req, res) => {
  try {
      const collections = await sammlungenCollection.find().toArray(); // Greift auf die Collection "Sammlungen" zu
      res.json(collections);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

// Alle Fragen abrufen
app.get('/questions', async (req, res) => {
  try {
      const questions = await fragenCollection.find().toArray(); // Greift auf die Collection "Fragen" zu
      res.json(questions);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

// Frage nach ID abrufen
app.get('/questions/:id', async (req, res) => {
  try {
      const question = await fragenCollection.findOne({ _id: new mongoose.Types.ObjectId(req.params.id) });
      if (!question) {
          return res.status(404).json({ error: 'Frage nicht gefunden' });
      }
      res.json(question);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

// Fragen nach Fragesammlungsnamen und Quiznamen holen
app.get('/questions/by-fragesammlung/:name', async (req, res) => {
    try {
        const questions = await Question.find({ fragesammlung: req.params.name });
        res.json(questions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// Fragen nach Fragenamen holen
app.get('/questions/by-fragename/:name', async (req, res) => {
    try {
        const questions = await Question.find({ frage: req.params.name });
        res.json(questions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/* --- PUT REQUESTS --- */

// Frage ändern basierend auf Fragesammlung oder Quiz
app.put('/questions/update-by-collection-or-quiz', async (req, res) => {
    try {
        const { fragesammlung, quiz, updates } = req.body;
        const updated = await Question.updateMany(
            { $or: [{ fragesammlung }, { quiz }] },
            { $set: updates }
        );
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Frage ändern basierend auf FrageID
app.put('/questions/update/:id', async (req, res) => {
    try {
        const updated = await Question.findOneAndUpdate(
            { frageID: req.params.id },
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Fragesammlung oder Quiz ändern basierend auf ID
app.put('/collections/update/:id', async (req, res) => {
    try {
        const updated = await Collection.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/* --- POST REQUESTS --- */

// Neue Fragesammlung oder Quiz erstellen
app.post('/collections', async (req, res) => {
    try {
        const newCollection = new Collection(req.body);
        await newCollection.save();
        res.status(201).json(newCollection);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Neue Frage erstellen
app.post('/questions', async (req, res) => {
    try {
        const newQuestion = new Question(req.body);
        await newQuestion.save();
        res.status(201).json(newQuestion);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Server starten
const PORT = 3000;
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
