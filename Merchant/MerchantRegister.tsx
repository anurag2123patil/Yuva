import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, Button } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
const MerchantRegister = () => {
    const handleFilePick = async () => {

    };
    const btnfun = () => {
        console.warn('Sending OTP');
    };
    const saveData = () => {
        // save data
    };
    return (
        <ScrollView>
            <View style={styles.create}>
                <Text style={styles.Text}>CREATE YOUR ACCOUNT</Text>
            </View>

            <TextInput style={styles.input}
                placeholder='Merchant Name *'
            />

            <TextInput style={styles.input}
                placeholder='Business Contact Number *'
            />

            <TextInput style={styles.input}
                placeholder='Business Email *'
            />
            <View style={styles.otp}>
                <Button title='Send OTP' onPress={btnfun} color='blue' />

            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity style={styles.fileChooseBtn} onPress={handleFilePick}>
                    <Text style={{ fontSize: 12, color: "grey" , justifyContent:'center',alignItems:'center'}}>Upload College/School ID</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={saveData}>
                <LinearGradient colors={['#8B41A2', '#983F7F', '#AF3B52', '#BD3633']}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.gradient} >
                    <Text style={styles.buttonText} >Submit</Text>
                </LinearGradient>
            </TouchableOpacity>

            <View style={styles.textre}>
                <Text>I already have an account?</Text>
                <TouchableOpacity>
                    <Text style={{ color: 'blue' }}>Login</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    create: {
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    Text: {
        fontSize: 28,
        color: 'black',
        fontWeight: 'bold',
        shadowColor: 'black',
        elevation: 8,
        shadowOpacity: 0.8,
        marginBottom: 25,
        textAlign: 'center',
    },
    input: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 30,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
    },
    fileChooseBtn:
    {

        height: 90,
        width: 140,
        borderRadius: 20,
        marginTop: 10,
        borderColor: "black",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        // paddingLeft:300
        paddingRight: 50,
        textAlign: 'center',
        marginBottom:80
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 5,
        color: '#fff',
        backgroundColor: 'transparent'
    },
    textre: {
        color: 'grey',
        fontSize: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 40,
        marginTop:10
    },
    gradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 100,
        marginLeft: 150,
        marginRight: 50,
    },
    otp: {
        marginVertical: 20,
        alignItems: 'center',
        height: 50,
        width: 90,
        marginLeft: 20,
        marginTop:30
    }
})

export default MerchantRegister;
