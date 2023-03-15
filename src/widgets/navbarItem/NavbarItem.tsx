import { useEditorStore } from 'entities/editor';
import { Note, useNotesStore } from 'entities/notes';
import { FC } from 'react';
import { useNavbarItemStyles } from 'widgets/navbarItem/styles';

interface NavbarItemProps {
  note: Note;
}

export const NavbarItem: FC<NavbarItemProps> = ({ note }) => {
  const { classes, cx } = useNavbarItemStyles();
  const activeNoteId = useNotesStore(state => state.activeNoteId);
  const changeActiveNote = useNotesStore(state => state.changeActiveNote);
  const removeNote = useNotesStore(state => state.removeNote);
  const saveNoteChanges = useNotesStore(state => state.saveNoteChanges);
  const editor = useEditorStore(state => state.editor);

  // @ts-ignore
  const content = note.text.content[0].content[0].text;

  const handleSwitchNode = () => {
    if (editor?.isEmpty) {
      removeNote(activeNoteId);
    } else {
      if (editor) {
        const editorContent = editor.getJSON();
        saveNoteChanges(activeNoteId, editorContent);
      }
    }
    changeActiveNote(note.id);
  };

  return (
    <div
      className={cx(classes.link, { [classes.linkActive]: note.id === activeNoteId })}
      onClick={handleSwitchNode}
    >
      {content}
    </div>
  );
};
