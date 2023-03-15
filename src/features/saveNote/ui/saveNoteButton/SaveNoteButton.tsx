import { Button } from '@mantine/core';
import { useEditorStore } from 'entities/editor';
import { useNotesStore } from 'entities/notes';
import { saveNote } from 'features/saveNote';
import React, { FC } from 'react';

export const SaveNoteButton: FC = () => {
  const editor = useEditorStore(state => state.editor);
  const activeNoteId = useNotesStore(state => state.activeNoteId);
  const saveNoteChanges = useNotesStore(state => state.saveNoteChanges);
  const handleSaveNote = () => {
    if (editor) {
      saveNote(editor, activeNoteId, saveNoteChanges);
    }
  };
  return (
    <Button onClick={handleSaveNote} variant="outline" color="green">
      Save note
    </Button>
  );
};
