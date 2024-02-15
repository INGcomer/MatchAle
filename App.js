// React
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// Kitten UI
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
// Contexts
import { AuthProvider } from './src/Context/AuthContext';
// Navigation
import AppNavigation from './src/Navigation/app.navigation';

export default () => (
  <AuthProvider>
    <NavigationContainer>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>

        <AppNavigation />

      </ApplicationProvider>
    </NavigationContainer>
  </AuthProvider >
);