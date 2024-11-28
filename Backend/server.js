const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

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

const Sammlungen = mongoose.model('Sammlungen', collectionSchema);
const Fragen = mongoose.model('Fragen', questionSchema);

// MongoDB Verbindung
mongoose.connect('mongodb+srv://admin:admin@dbwirtschaftsquiz.vjbjm.mongodb.net/DBWirtschaftsquiz?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');

    // **REST-API Endpoints**

    /* --- GET REQUESTS --- */

    // Alle Sammlungen abrufen
    app.get('/collections', async (req, res) => {
        try {
            const collections = await mongoose.connection.db.collection('sammlungens').find().toArray();
            res.status(200).json(collections);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Alle Fragen abrufen
    app.get('/questions', async (req, res) => {
        try {
            const questions = await mongoose.connection.db.collection('fragens').find().toArray();
            res.status(200).json(questions);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Frage nach ID abrufen
    app.get('/questions/:id', async (req, res) => {
        try {
            const question = await mongoose.connection.db.collection('fragens').findOne({ _id: mongoose.Types.ObjectId(req.params.id) });
            if (!question) {
                return res.status(404).json({ error: 'Frage nicht gefunden' });
            }
            res.status(200).json(question);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Fragen nach Fragesammlungsnamen holen
    app.get('/questions/by-fragesammlung/:name', async (req, res) => {
        try {
            const questions = await mongoose.connection.db.collection('fragens').find({ fragesammlung: req.params.name }).toArray();
            res.status(200).json(questions);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Fragen nach Fragenamen holen
    app.get('/questions/by-fragename/:name', async (req, res) => {
        try {
            const questions = await mongoose.connection.db.collection('fragens').find({ frage: req.params.name }).toArray();
            res.status(200).json(questions);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    /* --- PUT REQUESTS --- */

    // Frage ändern basierend auf Fragesammlung oder Quiz
    app.put('/questions/update-by-collection-or-quiz', async (req, res) => {
        try {
            const { fragesammlung, quiz, updates } = req.body;
            const updated = await mongoose.connection.db.collection('fragens').updateMany(
                { $or: [{ fragesammlung }, { quiz }] },
                { $set: updates }
            );
            res.status(200).json(updated);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Frage ändern basierend auf FrageID
    app.put('/questions/update/:id', async (req, res) => {
        try {
            const updated = await mongoose.connection.db.collection('fragens').findOneAndUpdate(
                { frageID: req.params.id },
                { $set: req.body },
                { returnOriginal: false }
            );
            res.status(200).json(updated.value);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Fragesammlung oder Quiz ändern basierend auf ID
    app.put('/collections/update/:id', async (req, res) => {
        try {
            const updated = await mongoose.connection.db.collection('sammlungens').findOneAndUpdate(
                { _id: mongoose.Types.ObjectId(req.params.id) },
                { $set: req.body },
                { returnOriginal: false }
            );
            res.status(200).json(updated.value);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    /* --- POST REQUESTS --- */

    // Neue Fragesammlung oder Quiz erstellen
    app.post('/collections', async (req, res) => {
        try {
            const result = await mongoose.connection.db.collection('sammlungens').insertOne(req.body);
            res.status(201).json(result.ops[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Neue Frage erstellen
    app.post('/questions', async (req, res) => {
        try {
            const result = await mongoose.connection.db.collection('fragens').insertOne(req.body);
            res.status(201).json(result.ops[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    /* --- DELETE REQUESTS --- */

    // Frage löschen
    app.delete('/questions/:id', async (req, res) => {
        try {
            const deleted = await mongoose.connection.db.collection('fragens').deleteOne({ _id: mongoose.Types.ObjectId(req.params.id) });
            if (deleted.deletedCount === 0) {
                return res.status(404).json({ error: 'Frage nicht gefunden' });
            }
            res.status(200).json({ message: 'Frage erfolgreich gelöscht' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Fragesammlung löschen
    app.delete('/collections/:id', async (req, res) => {
        try {
            const deleted = await mongoose.connection.db.collection('sammlungens').deleteOne({ _id: mongoose.Types.ObjectId(req.params.id) });
            if (deleted.deletedCount === 0) {
                return res.status(404).json({ error: 'Sammlung nicht gefunden' });
            }
            res.status(200).json({ message: 'Sammlung erfolgreich gelöscht' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Server starten
    const PORT = 3000;
    app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));

}).catch(err => console.error('MongoDB connection error:', err));
