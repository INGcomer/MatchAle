// React
import React, { useContext } from 'react';
// Kitten UI
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
// Contexts
import { AuthProvider } from './src/Context/AuthContext';
// Navigation
import AppNavigation from './src/Navigation/app.navigation';
// componentes
import HomeScreen from './src/Screens/Home';
import LogInScreen from './src/Screens/LogIn';
import SingInScreen from './src/Screens/SingIn';

export default () => (
  <AuthProvider>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.dark}>

      <AppNavigation/>

      {/* <HomeScreen /> */}
      {/* <LogInScreen /> */}
      {/* <SingInScreen /> */}
    </ApplicationProvider>

  </AuthProvider >
);