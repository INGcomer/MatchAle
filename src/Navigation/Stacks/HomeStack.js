import {StyleSheet} from 'react-native'
import { Header, createStackNavigator } from '@react-navigation/stack';
// Stacks
import EventoStack from './EventoStack';
// Componentes
import EventosScreen from '../../Screens/Eventos';
import EventoScreen from '../../Screens/Evento';
import PerfilScreen from '../../Screens/Perfil';

import { Icon, IconElement, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

const BackIcon = (props) => (
  <Icon
    {...props}
    name='arrow-back'
  />
);

const BackAction = () => (
  <TopNavigationAction icon={BackIcon}/>
);

const TopNavigationSimpleUsageShowcase = () => (
  <TopNavigation
    accessoryLeft={BackAction}
    title='Eva Application'
  />
);

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator 
      initialRouteName='EventoStack' 
    //   screenOptions={{
    //     header: TopNavigationSimpleUsageShowcase
    // }}
    >
      <Stack.Screen name="EventosScreen" component={EventosScreen} />
      <Stack.Screen name="EventoStack" component={EventoStack} />
      <Stack.Screen name="PerfilScreen" component={PerfilScreen} />
    </Stack.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    heith: 128,
    backgroundColor: '#222B45',
  },
});
