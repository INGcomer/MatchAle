// React
import React from 'react';
// Kitten UI
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
// componentes
import Card from './src/Components/Card';

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    {/* <Text category='h1'>HOME</Text> */}
    <Card 
      user={{ 
        Usuario: {
          name: "Augusto Antonelli", 
          image: "https://www.ing-come.com/static/media/Augusto.838f19334906b1b91d12.jpg", 
        },
        Empresa: {
          nombre: 'INGcome',
          puesto: 'Co-fundador',
          logo: 'https://www.ing-come.com/static/media/logo%20blanco.5af8e07ec444516f4627.png',
          tipo: 'Consultora'
        }
      }} 
    />
  </Layout>
);

export default () => (
  <ApplicationProvider {...eva} theme={eva.dark}>
    <HomeScreen />
  </ApplicationProvider>
);