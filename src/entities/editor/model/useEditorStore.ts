import { Editor } from '@tiptap/react';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface EditorStore {
  editor: Editor | null;
  setEditor: (editor: Editor | null) => void;
}

export const useEditorStore = create<EditorStore, [['zustand/devtools', never]]>(devtools((set) => ({
  editor: null,
  setEditor: (editor) => {
    set({ editor: editor });
  },
})));
