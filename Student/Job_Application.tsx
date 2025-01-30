import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Get device dimensions
const { width } = Dimensions.get('window');

const Job_Application = () => {

    return (
        <ScrollView contentContainerStyle={styles.BoxWrapper}>
            <Text style={styles.headerText}>Job Application</Text>
            {[1, 2].map((item, index) => (
                <View key={index} style={styles.box}>
                    <Text style={styles.companyText}>Tech Mahindra</Text>
                    <Text style={styles.nameText}>MOHINI PAWAR</Text>
                    <Text style={styles.positionText}>UI/UX Developer</Text>
                    <Text style={styles.detailsText}>Mention in detail what relevant skill or past experience you have for this internship.</Text>
                    <Text style={styles.detailsText}>Yes, I am available to join immediately</Text>
                    <View style={styles.contactInfo}>
                        <Ionicons name={"call"} size={20} color="black" />
                        <Text style={styles.contactText}>7887539380</Text>
                    </View>
                    <View style={styles.contactInfo}>
                        <Ionicons name={"mail"} size={20} color="black" />
                        <Text style={styles.contactText}>xyz@gmail.com</Text>
                    </View>
                    <View style={styles.footer}>
                        <MaterialCommunityIcons name={"delete-outline"} size={60} color="red" />
                        <TouchableOpacity>
                            <LinearGradient colors={['#8B41A2', '#983F7F', '#AF3B52', '#BD3633']}
                                start={{ x: 1, y: 0 }}
                                end={{ x: 0, y: 1 }}
                                style={styles.gradient} >
                                <Text style={styles.buttonText}>Submit</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    BoxWrapper: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5'
    },
    headerText: {
        fontSize: 36,
        marginVertical: 20,
        color: 'black',
        textAlign: 'center'
    },
    box: {
        width: '100%',
        maxWidth: 350,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        padding: 20,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    companyText: {
        fontSize: 24,
        color: 'black',
    },
    nameText: {
        fontSize: 20,
        color: 'red',
        marginVertical: 10,
    },
    positionText: {
        fontSize: 18,
        color: 'black',
    },
    detailsText: {
        fontSize: 16,
        color: 'black',
        marginVertical: 10,
        marginLeft: 10,
    },
    contactInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    contactText: {
        fontSize: 18,
        marginLeft: 10,
        color: 'black',
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    gradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#fff',
        backgroundColor: 'transparent',
        padding: 10,
    },
});

export default Job_Application;
