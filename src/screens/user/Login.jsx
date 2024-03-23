import React from "react";
import {Text, TextInput, TouchableOpacity, View, StyleSheet, Image, Button} from 'react-native';
import {render} from "react-native-web";


const styles= StyleSheet.create({
    container: {
        flexDirection: 'column',
        flexGrow: 10,
        justifyContent: 'center',
        backgroundColor: '#eefdfa',
    },
    header: {
        paddingTop: '10%',
        flex: 3,
        backgroundColor: '#eefdfa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        flex: 5,
        backgroundColor: '#eefdfa'
    },
    logo: {
        width: '70%',
        height: '70%',
        display: 'flex',
        resizeMode: 'contain',
    },
    strong: {
        color: 'black',
        paddingLeft: '10%',
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    textBox: {
        color: 'grey',
        paddingLeft: 5,
        fontSize: 20,
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#e72179',
        textAlign: 'left',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '5%',
        marginTop: '5%',
        backgroundColor: '#ffffff',
    },
    textButton: {
        backgroundColor: 'rgba(0,122,255,0)',
        color: '#e72179',
        borderRadius: 8,
        width: '80%',
        alignSelf: 'center',
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#e72179',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        marginHorizontal: '10%',
        marginBottom: '5%',
        marginTop: '15%',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
})

const Login = ( { navigation }) => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Image alt={"Logo"} style={styles.logo} source={require('../../../assets/icon.png')}/>
            </View>
            {/* Body */}
            <View style={styles.body}>
                {/* Email */}
                <Text style={styles.strong}>Email:</Text>
                <TextInput style={styles.textBox}></TextInput>
                {/* Password */}
                <Text style={styles.strong}>Password:</Text>
                <TextInput style={styles.textBox}></TextInput>
                {/* Forgot Password */}
                <Text style={styles.textButton} onPress={() => {navigation.navigate('Register')}}>Forgot Password</Text>
                {/* Button Sign In */}
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                {/* Register */}
                <Text style={styles.textButton} onPress={() => { navigation.navigate('Register')}}>I don't have account</Text>
            </View>
        </View>
    )
}
export default Login

