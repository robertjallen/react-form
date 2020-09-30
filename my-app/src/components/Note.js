import React from "react";

function Note(props) {
  return (
    <>
      {props.notes.map((note, index) => (
        <div className="note" key={index}>
          <h2>{note.title}</h2>
          <p>{note.body}</p>
        </div>
      ))}
    </>
  );
}

export default Note;