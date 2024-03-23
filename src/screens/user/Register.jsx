import React from "react";
import {Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const styles= StyleSheet.create({
    container: {
        flexDirection: 'column',
        flexGrow: 10,
        justifyContent: 'center',
        backgroundColor: '#eefdfa',
    },
    header: {
        flex: 6,
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
    textbox: {
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
        marginBottom: '10%',
        marginTop: '5%',
        backgroundColor: '#ffffff',
    },
    button: {
        backgroundColor: '#e72179',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        marginHorizontal: '10%',
        marginBottom: '5%'
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight: 'bold',
    },
    footer: {
        flex: 2,
        backgroundColor: '#eefdfa',
    }
})

const Register = ({ navigation }) => {
    return (<View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Image alt={"Logo"} style={styles.logo} source={require('../../../assets/icon.png')}/>
            </View>
            {/* Body */}
            <View style={styles.body}>
                {/* Email */}
                <Text style={styles.strong}>Email:</Text>
                <TextInput style={styles.textbox}></TextInput>
                {/* Password */}
                <Text style={styles.strong}>Password:</Text>
                <TextInput style={styles.textbox}></TextInput>

                {/* Button Sign In */}
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Register

