// React
import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
// Kitten UI
import { Text } from '@ui-kitten/components';

const EventosScreen = () => {

    return (
        <View style={styles.pageContainer}>
            <Text category='h1'> EventosScreen </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#222B45',
    },
});


export default EventosScreen;