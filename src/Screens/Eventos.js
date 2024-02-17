// React
import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
// Kitten UI
import { Text, Divider, Input, Button  } from '@ui-kitten/components';

const EventosScreen = ({navigation}) => {

    const [value, setValue] = React.useState('');

    return (
        <View style={styles.pageContainer}>
            <Text category='h1'> EventosScreen </Text>
            <Button onPress={() => navigation.navigate('EventoStack')}>
                evetno
            </Button>
            <View style={styles.Divider}/>
            <Input
                placeholder='Place your Text'
                value={value}
                onChangeText={nextValue => setValue(nextValue)}
            />
            <Button>
                Enviar
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#222B45',
        padding: '5%',
        gap: 25
    },
    Divider: {
        height: 1,
        width: '80%',
        backgroundColor: '#B3B3B3',
        color: '#C71451'
    }
});


export default EventosScreen;