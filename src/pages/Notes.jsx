import React, { useState } from "react";
import { Form } from "../components/Form";
import { ItemList } from "../components/ItemList";
import { Container, List } from "@mui/material";
import '../styles/settings/_base.scss'

export const Notes = () => {
    const [notes, setNotes] = useState([]);
    const addNote = (note) => {
        setNotes([...notes, note]);
    };

    const deletenote = (id) => {
        var filtered = notes.filter((note) => note.id !== id);
        setNotes(filtered);
    };

    const editnote = (id, editedText) => {
    var notesArray = notes;

    for (var i in notesArray) {
        if (notesArray[i].id === id) {
            notesArray[i].text = editedText;
        }
    }
    setNotes(notesArray);
    };

    return (
        <Container maxWidth="lg">
            <Form addNote={addNote}/>
            <List sx={{bgcolor: '#F2F2F2'}}>
                {notes.map((note) => (
                    <div key={note.id} style={{ marginTop: "1em" }}>
                        <ItemList editNote={editnote} note={note} deleteNote={deletenote} />
                    </div>
                ))}
            </List>
        </Container>
    );
};
