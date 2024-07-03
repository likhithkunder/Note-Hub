import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, changeNotes] = useState([]);

  async function addNote(note) {
    const response = await fetch("http://localhost:5000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    const newNote = await response.json();
    changeNotes((prevValue) => [newNote, ...prevValue]);
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch("http://localhost:5000/notes");
    const notesArray = await response.json();
    changeNotes(notesArray);
  }

  async function deleteNote(id) {
    await fetch(`http://localhost:5000/notes/${id}`, {
      method: "DELETE",
    });
    changeNotes((prevValue) => prevValue.filter((note) => note._id !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea whenClicked={addNote} />
      {notes.map((noteItem) => (
        <Note
          key={noteItem._id}
          id={noteItem._id}
          title={noteItem.title}
          content={noteItem.content}
          justClicked={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;


