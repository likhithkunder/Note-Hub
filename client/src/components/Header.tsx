import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';
//npm install @mui/material @mui/system
//npm install @emotion/react @emotion/styled

const Header: React.FC = () => {
  return (
    <header>
      <h1><HighlightIcon/>noteHub</h1>
    </header>
  );
}

export default Header;
