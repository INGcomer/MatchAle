// React
import React from 'react';
// Kitten UI
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
// componentes
import HomeScreen from './src/Screens/Home';

export default () => (
  <ApplicationProvider {...eva} theme={eva.dark}>
      <HomeScreen />
  </ApplicationProvider>
);