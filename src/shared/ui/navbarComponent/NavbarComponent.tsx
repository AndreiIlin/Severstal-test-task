import { Navbar } from '@mantine/core';
import React, { FC, PropsWithChildren } from 'react';

export const NavbarComponent: FC<PropsWithChildren> = ({ children }) => {

  return (
    <Navbar p={'md'}>
      <Navbar.Section>
        {children}
      </Navbar.Section>
    </Navbar>
  );
};
