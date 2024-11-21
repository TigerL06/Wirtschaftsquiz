const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// MongoDB Atlas Verbindung
const MONGO_URI = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/quizDB?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Verbunden mit MongoDB Atlas"))
  .catch((err) => console.error("Fehler bei der Verbindung zu MongoDB Atlas:", err));

// Schemas
const questionSchema = new mongoose.Schema({
  FrageID: String,
  FragesammlungID: String,
  QuizID: String,
  Frage: String,
  Antwort: String,
  Modus: String,
  Auswahl: [String],
});

const collectionSchema = new mongoose.Schema({
  ID: String,
  Type: String, // "Fragesammlung" oder "Quiz"
});

// Modelle
const Question = mongoose.model("Question", questionSchema);
const Collection = mongoose.model("Collection", collectionSchema);

// **GET-Requests**
app.get("/collections", async (req, res) => {
  try {
    const collections = await Collection.find();
    res.json(collections);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/collections/:id", async (req, res) => {
  try {
    const collection = await Collection.findOne({ ID: req.params.id });
    if (!collection) return res.status(404).json({ error: "Not found" });
    res.json(collection);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/questions/byFragesammlung/:id", async (req, res) => {
  try {
    const questions = await Question.find({ FragesammlungID: req.params.id });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/questions/byQuiz/:id", async (req, res) => {
  try {
    const questions = await Question.find({ QuizID: req.params.id });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/questions/:id", async (req, res) => {
  try {
    const question = await Question.findOne({ FrageID: req.params.id });
    if (!question) return res.status(404).json({ error: "Not found" });
    res.json(question);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// **PUT-Requests**
app.put("/questions/:id", async (req, res) => {
  try {
    const updatedQuestion = await Question.findOneAndUpdate(
      { FrageID: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedQuestion) return res.status(404).json({ error: "Not found" });
    res.json(updatedQuestion);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/collections/:id", async (req, res) => {
  try {
    const updatedCollection = await Collection.findOneAndUpdate(
      { ID: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedCollection) return res.status(404).json({ error: "Not found" });
    res.json(updatedCollection);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// **POST-Requests**
app.post("/collections", async (req, res) => {
  try {
    const newCollection = new Collection(req.body);
    await newCollection.save();
    res.status(201).json(newCollection);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/questions", async (req, res) => {
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
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
