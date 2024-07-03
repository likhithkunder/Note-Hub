import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
//npm install @mui/icons-material
//npm install @mui/material
function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.justClicked(props.id);
        }}
      >
        <DeleteIcon/>
      </button>
    </div>
  );
}

export default Note;
