import { Container, Grid } from '@mantine/core';
import { EditorComponent } from 'entities/editor';
import { useNotesStore } from 'entities/notes';
import { NewNoteButton } from 'features/newNote';
import { RemoveNoteButton } from 'features/removeNote';
import { SaveNoteButton } from 'features/saveNote';
import { useMainPageStyles } from 'pages/styles';
import React from 'react';
import { HeaderComponent, NavbarComponent } from 'shared/ui';
import { NavbarItem } from 'widgets/navbarItem';

export const MainPage = () => {
  const notes = useNotesStore(state => state.notes);
  const { classes } = useMainPageStyles();
  return (
    <>
      <HeaderComponent>
        <NewNoteButton />
        <SaveNoteButton />
        <RemoveNoteButton />
      </HeaderComponent>
      <Container fluid>
        <Grid>
          <Grid.Col xs={3}>
            <NavbarComponent>
              {notes.map(n => (
                <NavbarItem note={n} key={n.id} />
              ))}
            </NavbarComponent>
          </Grid.Col>
          <Grid.Col xs={9} className={classes.editorSide}>
            <EditorComponent />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};
