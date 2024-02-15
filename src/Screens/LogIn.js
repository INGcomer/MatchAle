import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, View, Image, Linking } from 'react-native';
import { Icon, Input, Text, Button } from '@ui-kitten/components';

import { useForm, Controller } from "react-hook-form"
// IMGs
import LOGO from '../../assets/images/logo 1.png';

const LogInScreen = () => {
    const [Emailvalue, SetEmailValue] = React.useState('');
    const [Contravalue, SetContraValue] = React.useState('');

    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon
                {...props}
                name={secureTextEntry ? 'eye-off' : 'eye'}
            />
        </TouchableWithoutFeedback>
    );

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            Pass: "",
            Email: '',
        },
    })

    const onSubmit = (data) => {
        console.log(data)

        console.log(errors)
    }


    return (
        <View style={styles.pageContainer}>
            <Image
                style={styles.tinyLogo}
                source={LOGO}
            />

            <Text category='h1'> Ingresar </Text>

            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder='Email'
                        // value={value}
                        // onChangeText={nextValue => SetEmailValue(nextValue)}


                        status={errors.Nombre ? "danger" : 'basic'}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.Input}
                    />
                )}
                name="Email"
            />
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder='Contraseña'
                        accessoryRight={renderIcon}
                        secureTextEntry={secureTextEntry}
                        // onChangeText={nextValue => SetContraValue(nextValue)}

                        status={errors.Nombre ? "danger" : 'basic'}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.Input}
                    />
                )}
                name="Pass"
            />

            <Button onPress={handleSubmit(onSubmit)}>
                iniciar sesion
            </Button>

            <View style={styles.buttonContainer}>
                <Button appearance='ghost'>
                    Crear una cuenta
                </Button>
                <Button appearance='ghost' onPress={() => Linking.openURL('https://www.withsisa.com/forgotPassword')}>
                    Olvide mi contraseña
                </Button>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#222B45',
        padding: "10%",
        gap: 25,
    },
    tinyLogo: {
        height: 200,
        width: 200,
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default LogInScreen;