import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'

type LoginParam = NativeStackScreenProps<RootStackParamList, 'LoginPage'>

const LoginPage = ({ navigation }: LoginParam) => {



    const [valueEmail, setValueEmail] = useState('')
    const [valuePassword, setValuePassword] = useState('')
    const [loading, setLoading] = useState(false)


    const HandleSubmit = () => {
        try {
            setLoading(true)
            if (!valueEmail || !valuePassword) {
                setLoading(false)
                return Alert.alert('Please Filled All Values  !')
            }
            console.log('Login Data ==>', { valueEmail, valuePassword })
            setLoading(false)


        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Login</Text>
            <View style={styles.formContainer}>
                <View style={styles.FormFieldContainer}>
                    <Text style={styles.FormLabel}>Email</Text>
                    <TextInput

                        style={styles.FormControl}
                        placeholder="Enter Email"
                        keyboardType='email-address'
                        placeholderTextColor={'#FEFEFE'}
                        autoComplete={'email'}
                        value={valueEmail}
                        onChangeText={(text) => setValueEmail(text)}

                    ></TextInput>
                </View >
                <View style={styles.FormFieldContainer}>
                    <Text style={styles.FormLabel}>Password</Text>
                    <TextInput

                        style={styles.FormControl}
                        placeholder="Enter Password"
                        placeholderTextColor={'#FEFEFE'}
                        autoComplete={'password'}
                        value={valuePassword}
                        secureTextEntry={true}
                        onChangeText={(text) => setValuePassword(text)}

                    ></TextInput>
                </View >
                <View style={styles.ButtonContainer}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => HandleSubmit()}
                    >
                        <Text style={styles.buttonText}>
                            {loading ? 'Please Wait ...' : 'Login'}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.loginText}>Dont't Have Account please
                        <Text
                            style={{ fontWeight: 'bold', fontSize: 18 }}
                            onPress={() => { navigation.navigate('Register') }}
                        > REGISTER</Text>
                    </Text>
                </View>

            </View>

        </View>
    )
}

export default LoginPage

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '100%',
        backgroundColor: '#256Ef1'
    },
    pageTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        fontFamily: 'Montserrat',
        color: '#FEFEFE'
    },
    formInput: {
        borderRadius: 10,
        color: '#256Ef1',
        backgroundColor: '#FEFEFE',
        width: '80%',
        margin: 5,
        padding: 10,
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center',
        borderWidth: 1.5,
        borderColor: '#256Ef1'
    },
    formContainer: {
        width: '85%',
        display: 'flex',
        flexDirection: 'column',

    },


    FormFieldContainer: {
        width: '95%',
        alignSelf: 'center',
        marginTop: 20
    },
    FormControl: {
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: '#FEFEFE',
        marginTop: 10,
        padding: 10,
        color: '#FEFEFE',
        fontSize: 15
    },
    FormLabel: {
        color: '#FEFEFE',
        fontWeight: 'bold',
        fontSize: 15
    },
    ButtonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    },
    button: {
        width: '45%',
        borderColor: '#FEFEFE',
        borderWidth: 1.5,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FEFEFE'
    },
    loginText: {
        marginTop: 10,
        color: '#FEFEFE'
    }
})