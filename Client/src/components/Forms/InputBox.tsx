import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Dispatch, SetStateAction } from 'react'


type InputBoxPropType = {
    inputTitle: string,
    boardType: string,
    autoComplete: string,
    secureText: boolean,
    placeholder: string,
    value: string
    setValue: Dispatch<SetStateAction<String>>
}


const InputBox = (propInput: InputBoxPropType) => {

    return (
        <View style={styles.FormFieldContainer}>
            <Text style={styles.FormLabel}>{propInput.inputTitle}</Text>
            {/*
            <TextInput

                style={styles.FormControl}
                placeholder={propInput.placeholder}
                placeholderTextColor={'#FEFEFE'}
                autoCorrect={false}
                keyboardType={propInput.boardType}
                autoComplete={propInput.autoComplete}
                secureTextEntry={propInput.secureText}
                value={propInput.value}
                onChangeText={(text) => propInput.setValue(text)}

            ></TextInput>
            */}
        </View >
    )
}

export default InputBox

const styles = StyleSheet.create({
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
    }
})