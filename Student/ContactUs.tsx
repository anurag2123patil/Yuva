import React from 'react-native';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';





const ContactUs = () => {
    return (
        <View style={styles.box}>
            <View style={styles.boxwrap}>
                <Text style={styles.text}>Contact Us</Text>
            </View>
            <View style={styles.first}>
                <Text style={{ color: 'black', fontWeight: 'medium', fontSize: 24 }}>The Innovative Solution,</Text>
                <Text style={{ color: 'black', fontWeight: 'medium', fontSize: 24 }}>Nashik,422001</Text>
            </View>
            <View style={styles.second}>
                <Text style={{ color: 'black', fontWeight: 'medium', fontSize: 24 }}>theinnovativesolution</Text>
                <Text style={{ color: 'black', fontWeight: 'medium', fontSize: 24 }}>@gmail.com</Text>
            </View>
            <View style={styles.third}>
                <Text style={{ color: 'black', fontWeight: 'medium', fontSize: 24 }}>theinnovativesolutions</Text>
            </View>
            <View style={styles.fourth}>
                <Text style={{ color: 'black', fontWeight: 'medium', fontSize: 24 }}>+919876543210</Text>
            </View>

            

        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'lightgrey',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        marginLeft: 40,
        marginTop: 180,
        justifyContent: 'center',
        alignItems: 'center',
        height: 550,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 5,
    },
    boxwrap: {
        marginBottom: 2,
        marginTop: 2
    },
    first: {
        marginBottom: 20,
        marginTop: 20,
        fontSize: 24,
        color: 'black'
    },
    second: {
        marginBottom: 20,
        marginTop: 10,
        fontSize: 24,
        color: 'black'
    },
    third: {
        marginBottom: 20,
        marginTop: 10,
        fontSize: 24,
        color: 'black'
    },
    fourth: {
        marginBottom: 60,
        marginTop: 10,
        fontSize: 24,
        color: 'black',

    },
    


})

export default ContactUs;