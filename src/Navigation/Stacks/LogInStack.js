import { createStackNavigator } from '@react-navigation/stack';

// Componentes
import LogInScreen from '../../Screens/LogIn';
import SingInScreen from '../../Screens/SingIn';

const Stack = createStackNavigator();

export default function LogInStack() {
  return (
    <Stack.Navigator initialRouteName='LogIn'>
      <Stack.Screen name="LogIn" component={LogInScreen} />
      <Stack.Screen name="SingIn" component={SingInScreen} />
    </Stack.Navigator>
  );
}

