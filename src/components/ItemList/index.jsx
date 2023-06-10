import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'
import EditNoteDialog from '../EditNoteDialog';
import { Paper } from '@mui/material';

export const ItemList = ({ note, deleteNote, editNote }) => {
  const [openDialog, setOpenDialog] = React.useState(false);

  const dialogHandler = () => {
    setOpenDialog(!openDialog);
  };

  return (
  <>
    <EditNoteDialog editNote={editNote} open={openDialog} dialogHandler={dialogHandler} note={note} />
    <Paper style={{ padding: "0.5em 0em" }}>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={() => deleteNote(note.id)}>
            <DeleteIcon />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton role={undefined} dense>
          <ListItemIcon>
          {new Date().toLocaleTimeString('pt-BR')}
          </ListItemIcon>
          <ListItemText style={{ marginLeft: "1em", textTransform: 'none' }} primary={note.text} onClick={() => setOpenDialog(true)}/>
        </ListItemButton>
      </ListItem>
    </Paper>
  </>
  );
}

