const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/noteDB");

const noteSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Note = mongoose.model("Note", noteSchema);

// Create note
app.post("/notes", async (req, res) => {
  const newNote = new Note({
    title: req.body.title,
    content: req.body.content
  });
  await newNote.save();
  res.status(201).send(newNote);
});

// Read notes
app.get("/notes", async (req, res) => {
  const notes = await Note.find();
  const reversedNotes = notes.reverse();
  res.status(200).send(reversedNotes);
});

// Delete note
app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  await Note.findByIdAndDelete(id);
  res.status(204).send();
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
