import { Header, rem } from '@mantine/core';
import React, { FC, PropsWithChildren } from 'react';
import { useHeaderStyles } from 'shared/ui';

const HEADER_HEIGHT = rem(60);

export const HeaderComponent: FC<PropsWithChildren> = ({ children }) => {
  const { classes } = useHeaderStyles();
  return (
    <Header height={HEADER_HEIGHT} className={classes.header}>
      {children}
    </Header>
  );
};
