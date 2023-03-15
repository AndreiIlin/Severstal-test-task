import { withMantine } from 'app/providers';
import { MainPage } from 'pages/MainPage';
import React from 'react';

const App = () => <MainPage />;

export const AppWithProvider = withMantine(App);
