import React, { useState } from "react";

const Form = props => {
  const initialNote = { title: "", body: "" };
  const [newNote, setNewNote] = useState(initialNote);

  const handleChange = event => {
    setNewNote({
      ...newNote,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!newNote.title || !newNote.body) {
      alert("Please fill out both fields!");
    } else {
      props.setNotes([newNote, ...props.notes]);
      resetForm();
    }
  };

  const resetForm = () => {
    setNewNote(initialNote);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        value={newNote.title}
      />
      <textarea name="body" onChange={handleChange} value={newNote.body} />

      <button type="submit">Submit</button>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
    </form>
  );
};

export default Form;