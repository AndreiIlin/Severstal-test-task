import { JSONContent } from '@tiptap/react';
import { initialNotes, newNoteInner, Note } from 'entities/notes';
import { nanoid } from 'nanoid';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface NotesStore {
  notes: Note[];
  addNote: () => void;
  removeNote: (id: string) => void;
  activeNoteId: string;
  changeActiveNote: (id: string) => void;
  saveNoteChanges: (id: string, note: JSONContent) => void;
  getActiveNote: () => Note | undefined;
}

export const useNotesStore = create<NotesStore,
  [
    ['zustand/devtools', never],
    ['zustand/persist', NotesStore]
  ]>(devtools(persist((set, get) => ({
  notes: initialNotes,
  activeNoteId: '0',
  addNote: () => {
    const { notes } = get();
    const newNote: Note = {
      id: nanoid(),
      text: newNoteInner,
    };
    set({ notes: [newNote, ...notes], activeNoteId: newNote.id });
  },
  removeNote: (id) => {
    const { notes } = get();
    set({ notes: notes.filter(n => n.id !== id) });
  },
  changeActiveNote: (id) => {
    set({ activeNoteId: id });
  },
  saveNoteChanges: (id, note) => {
    const { notes } = get();
    set({
      notes: notes.map(n => {
        if (n.id !== id) {
          return n;
        }
        return { ...n, text: note };
      }),
    });
  },
  getActiveNote: () => {
    const { notes, activeNoteId } = get();
    return notes.find(n => n.id === activeNoteId);
  },
}), {
  name: 'notes-storage',
})));
