import { JSONContent } from '@tiptap/react';
import { Note } from 'entities/notes';

export const initialNotes: Note[] = [
  {
    id: '0',
    text: {
      'type': 'doc',
      'content': [
        {
          'type': 'heading',
          'attrs': {
            'textAlign': 'center',
            'level': 2,
          },
          'content': [
            {
              'type': 'text',
              'text': 'Welcome to NoteList app',
            },
          ],
        },
      ],
    },
  },
];

export const newNoteInner: JSONContent = {
  'type': 'doc',
  'content': [
    {
      'type': 'heading',
      'attrs': {
        'textAlign': 'center',
        'level': 2,
      },
      'content': [
        {
          'type': 'text',
          'text': 'New note',
        },
      ],
    },
  ],
};
