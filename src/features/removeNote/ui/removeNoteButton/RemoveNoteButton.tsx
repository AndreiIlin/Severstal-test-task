import { Button } from '@mantine/core';
import { Note, useNotesStore } from 'entities/notes';
import React, { FC } from 'react';

export const RemoveNoteButton: FC = () => {
  const removeNote = useNotesStore(state => state.removeNote);
  const activeNoteId = useNotesStore(state => state.activeNoteId);
  const changeActiveNote = useNotesStore(state => state.changeActiveNote);
  const notes = useNotesStore(state => state.notes);
  const activeNote = notes.find(n => n.id === activeNoteId);
  const noteIndex = notes.indexOf(activeNote as Note);
  const addNewNote = useNotesStore(state => state.addNote);
  const handleRemoveNote = () => {
    removeNote(activeNoteId);
    if (notes.length > 1) {
      changeActiveNote(noteIndex === 0 ? notes[noteIndex + 1].id : notes[noteIndex - 1].id);
    } else {
      addNewNote();
    }
  };
  return (
    <Button onClick={handleRemoveNote} variant="outline" color="red">
      Remove note
    </Button>
  );
};
