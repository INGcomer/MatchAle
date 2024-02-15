// React
import React from 'react';
// Kitten UI
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
// componentes
import HomeScreen from './src/Screens/Home';
import LogInScreen from './src/Screens/LogIn';
import SingInScreen from './src/Screens/SingIn';
import { AuthProvider } from './src/Context/AuthContext';

export default () => (
  <AuthProvider>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.dark}>

      {/* <HomeScreen /> */}
      {/* <LogInScreen /> */}
      <SingInScreen />
    </ApplicationProvider>

  </AuthProvider >
);