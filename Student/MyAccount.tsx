import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Get device dimensions for responsive design
const { width, height } = Dimensions.get('window');

const MyAccount = () => {
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [location, setLocation] = useState('');
    const [contact, setContact] = useState('');
    const [gender, setGender] = useState('');
    const [clg, setClg] = useState('');
    const [stream, setStream] = useState('');
    const [year, setYear] = useState('');
    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.pro}>
                <Image source={require("./photo/user.png")} style={styles.img} />
                <Text style={styles.proname}>MOHINI CHAUDHARI</Text>
                <Text style={styles.pronum}>+91 8668903030</Text>
                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                    <Text style={styles.editProfile}>Edit Profile</Text>
                </TouchableOpacity>
            </View>

            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email Address"
                placeholderTextColor="grey"
            />

            <TextInput
                style={styles.input}
                value={dob}
                onChangeText={setDob}
                placeholder="Date Of Birth"
                placeholderTextColor="grey"
            />

            <TextInput
                style={styles.input}
                value={location}
                onChangeText={setLocation}
                placeholder="Address"
                placeholderTextColor="grey"
            />

            <TextInput
                style={styles.input}
                value={contact}
                onChangeText={setContact}
                placeholder="Contact"
                placeholderTextColor="grey"
            />

            <TextInput
                style={styles.input}
                value={gender}
                onChangeText={setGender}
                placeholder="Gender"
                placeholderTextColor="grey"
            />

            <TextInput
                style={styles.input}
                value={clg}
                onChangeText={setClg}
                placeholder="College Name"
                placeholderTextColor="grey"
            />

            <TextInput
                style={styles.input}
                value={stream}
                onChangeText={setStream}
                placeholder="Stream"
                placeholderTextColor="grey"
            />

            <TextInput
                style={styles.input}
                value={year}
                onChangeText={setYear}
                placeholder="Year"
                placeholderTextColor="grey"
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: width * 0.04, // Responsive padding
        backgroundColor: '#f2f2f2',
    },
    pro: {
        padding: width * 0.05, // Responsive padding
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        marginBottom: width * 0.04, // Responsive margin
    },
    img: {
        width: width * 0.25, // Responsive width
        height: width * 0.25, // Responsive height
        borderRadius: width * 0.125, // Responsive border radius
    },
    proname: {
        fontSize: width * 0.06, // Responsive font size
        fontWeight: 'bold',
        color: 'black',
        marginTop: width * 0.04, // Responsive margin
    },
    pronum: {
        fontSize: width * 0.05, // Responsive font size
        color: 'black',
        marginTop: width * 0.02, // Responsive margin
    },
    editProfile: {
        color: 'black',
        fontSize: width * 0.04, // Responsive font size
        marginTop: width * 0.03, // Responsive margin
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: width * 0.03, // Responsive padding
        marginBottom: width * 0.04, // Responsive margin
        borderRadius: 6,
        height: height * 0.06, // Responsive height
        width: '100%',
        fontSize: width * 0.04, // Responsive font size
    },
});

export default MyAccount;
