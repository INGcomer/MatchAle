import {StyleSheet, View} from 'react-native'
import { Header, createStackNavigator } from '@react-navigation/stack';
// Stacks
import EventoStack from './EventoStack';
// Componentes
import EventosScreen from '../../Screens/Eventos';
import EventoScreen from '../../Screens/Evento';
import PerfilScreen from '../../Screens/Perfil';

import { Icon, IconElement, TopNavigation, TopNavigationAction, Text } from '@ui-kitten/components';

const BackIcon = (props) => (
  <Icon
    {...props}
    name='arrow-back'
  />
);

// const BackAction = () => (
//   <TopNavigationAction icon={BackIcon} style={styles.container}/>
// );

// const Title = () => {
//   return (
//     <Text> kk </Text>
//   )
// }

// const TopNavigationSimpleUsageShowcase = ({navigation}) => (
//   <TopNavigation
//     accessoryLeft={BackAction}
//     // title={Title}
//     ViewProps={styles.container}
//     onPress={navigation.goBack}
//   />
// );

const MyHeader = ({title, leftButton}) => {
  return(
    <View style={styles.container}> 
      <Text> {title} </Text>
      {leftButton}
    </View>
  )
}

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator 
      initialRouteName='Eventos' 
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        // headerStyle: { backgroundColor: '#202B47' },
        headerStyle: { backgroundColor: '#101426' },
      }}
    >
      <Stack.Screen name="Eventos" component={EventosScreen} />
      <Stack.Screen name="EventoStack" options={{title: '',}} component={EventoStack} />
      <Stack.Screen name="PerfilScreen" component={PerfilScreen} />
    </Stack.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    // marginTop: '12%'
    height: 80
  },
});
