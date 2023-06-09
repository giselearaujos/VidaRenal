import {  Button, TextField } from '@mui/material';
import { useState } from 'react';
import './styles.scss';

export const Form = ({ addNote }) => {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0);

  const noteCreate = (text) => {
    const noteObj = { text: text, id: id };
    setId(id + 1);
    addNote(noteObj);
    document.getElementById("outlined-basic").value = null;
  };
  return (
    <div className='form-container'>
      <div className='form-title'>
        <h3 className='form-title'>Relatórios</h3>
      </div>
      <div className='container-input'>
        <TextField
          id="outlined-basic"
          label="Relatório"
          variant="outlined"
          fullWidth
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          variant="contained"
          className="button"
          onClick={() => noteCreate(text)}
        >
          Adicionar
        </Button>
      </div>
    </div>
  )
}