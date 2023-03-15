import { MantineProvider } from '@mantine/core';
import React from 'react';

export const withMantine = (component: () => React.ReactNode) => () => <MantineProvider
  withNormalizeCSS withGlobalStyles
>{component()}</MantineProvider>;
