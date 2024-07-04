import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'

import { Header } from '@react-navigation/stack'
import axios, { Axios } from 'axios'



type RegsitsreParam = NativeStackScreenProps<RootStackParamList, 'Register'>

const Register = ({ navigation }: RegsitsreParam) => {


    const [valueName, setValueName] = useState('')
    const [valueEmail, setValueEmail] = useState('')
    const [valuePassword, setValuePassword] = useState('')
    const [loading, setLoading] = useState(false)


    const HandleSubmit = async () => {
        try {
            setLoading(true)
            if (!valueName || !valueEmail || !valuePassword) {
                setLoading(false)
                return Alert.alert('Please Filled All Values  !')
            }

            {/* 
            try {
                const { data } = await axios.post('http://192.168.159.69:8080/api/v1/auth/register/',
                    {
                        "name": valueName,
                        "email": valueEmail,
                        "password": valuePassword
                    }
                )
                Alert.alert(data && data.message)
            } catch (error: any) {
                console.log("Error in Post Request")
                console.log(error)
            }
                */}


            try {
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'text' },
                    body: JSON.stringify({
                        name: valueName,
                        email: valueEmail,
                        password: valuePassword
                    })
                };
                console.log("start")
                await fetch(
                    'http://10.0.2.2:8080/api/v1/auth/register', requestOptions)
                    .then(response => {
                        response.text()
                            .then(data => {
                                Alert.alert(data);
                                console.log(data)
                            });
                    })
                console.log("End")
            } catch (error: any) {
                console.log("Catch UP")
                console.log(error)
            }


            console.log('Register Data ==>', { valueName, valueEmail, valuePassword })
            setLoading(false)


        } catch (error: any) {
            Alert.alert(error)
            console.log("Catch Bottom")
            setLoading(false)
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Register</Text>
            <View style={styles.formContainer}>
                <View style={styles.FormFieldContainer}>
                    <Text style={styles.FormLabel}>Name</Text>
                    <TextInput

                        style={styles.FormControl}
                        placeholder="Enter Name"
                        placeholderTextColor={'#FEFEFE'}
                        autoComplete={'name'}
                        keyboardType='ascii-capable'
                        value={valueName}
                        onChangeText={(text) => { setValueName(text) }}

                    ></TextInput>
                </View >
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
                            {loading ? 'Please Wait ...' : 'Register'}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.loginText}>Already Register Please
                        <Text
                            style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 10 }}
                            onPress={() => navigation.navigate('LoginPage')}
                        > LOGIN</Text>
                    </Text>
                </View>

            </View>

        </View >
    )
}

export default Register

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