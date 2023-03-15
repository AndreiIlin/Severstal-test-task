import { Editor, JSONContent } from '@tiptap/react';

export const saveNote = (editor: Editor, id: string, saveNoteChanges: (id: string, note: JSONContent) => void): void => {
  const editorContent = editor.getJSON();
  console.log(editorContent);
  if (editor.isEmpty) {
    return;
  }
  saveNoteChanges(id, editorContent);
};
