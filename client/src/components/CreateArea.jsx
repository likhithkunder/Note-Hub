import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';//+ for add
import Fab from '@mui/material/Fab';//Hover effect

import Zoom from '@mui/material/Zoom';//Zooms the button in animated way

//npm install @mui/icons-material
//npm install @mui/material
//npm install @mui/material @emotion/react @emotion/styled

//For background: https://www.transparenttextures.com/

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    // console.log(event.target)
    const { name, value } = event.target;
    // console.log(name)
    // console.log(value)

    setNote((prevValue) => {
      // console.log(prevValue)
      return { ...prevValue, [name]: value };
    });
    // console.log(note)
  }

  function submitNote(event) {
    props.whenClicked(note);

    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />}
        <textarea
          onChange={handleChange}
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={note.content}
        />
        
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}><AddIcon/></Fab>
        </Zoom>

      </form>
    </div>
  );
}

export default CreateArea;
