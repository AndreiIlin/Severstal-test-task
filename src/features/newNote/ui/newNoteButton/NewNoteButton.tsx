import { Button } from '@mantine/core';
import { useNotesStore } from 'entities/notes';
import React, { FC } from 'react';

export const NewNoteButton: FC = () => {
  const addNewNote = useNotesStore(state => state.addNote);

  return (
    <Button onClick={addNewNote} variant="outline" color="violet">
      Create new note
    </Button>
  );
};
