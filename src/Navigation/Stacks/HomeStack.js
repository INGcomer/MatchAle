import { createStackNavigator } from '@react-navigation/stack';

// Componentes
import EventosScreen from '../../Screens/Eventos';
import EventoScreen from '../../Screens/Evento';
import PerfilScreen from '../../Screens/Perfil';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName='EventosScreen'>
      <Stack.Screen name="EventosScreen" component={EventosScreen} />
      <Stack.Screen name="EventoScreen" component={EventoScreen} />
      <Stack.Screen name="PerfilScreen" component={PerfilScreen} />
    </Stack.Navigator>
  );
}

