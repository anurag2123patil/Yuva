import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const JobApply = () => {
    const [selectedRadio, setSelectedRadio] = useState(1);
    const handleFilePick = async () => {};

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}>Applying for Backend Developer (Node Js)</Text>
                <Text style={styles.up}>The Innovative Solutions</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.textone}>Upload Your Resume</Text>
                <TouchableOpacity style={styles.fileChooseBtn} onPress={handleFilePick}>
                    <Text style={styles.fileChooseText}>Choose file</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.texttwo}>Cover Letter</Text>
                <TextInput 
                    style={styles.coverLetterInput}
                    multiline={true}
                    numberOfLines={6}
                    placeholder="Mention in detail what relevant skill or past experience you have for this internship. Why would you be a good fit?"
                />
            </View>

            <Text style={styles.textthree}>Your Availability</Text>
            <Text style={styles.textfour}>Confirm your availability</Text>

            {['Yes,I am available to join immediately', 'No,I am currently on notice period', 'No,I will have to serve notice period', 'Other (Please specify your availability)'].map((option, index) => (
                <TouchableOpacity key={index} onPress={() => setSelectedRadio(index + 1)}>
                    <View style={styles.radioWrapper}>
                        <View style={styles.radio}>
                            {selectedRadio === index + 1 && <View style={styles.radioBg} />}
                        </View>
                        <Text style={styles.radioText}>{option}</Text>
                    </View>
                </TouchableOpacity>
            ))}

            <TouchableOpacity style={styles.submitButton}>
                <LinearGradient 
                    colors={['#8B41A2', '#983F7F', '#AF3B52', '#BD3633']}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.gradient}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </LinearGradient>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    box: {
        backgroundColor: 'lightgrey',
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
    },
    text: {
        color: 'black',
        fontSize: 22,
        fontWeight: '600',
    },
    up: {
        color: 'black',
        fontSize: 18,
        marginTop: 5,
    },
    section: {
        marginBottom: 20,
    },
    textone: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 10,
    },
    fileChooseBtn: {
        height: 50,
        width: '100%',
        borderRadius: 5,
        borderColor: "black",
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    fileChooseText: {
        color: 'black',
        fontSize: 16,
    },
    texttwo: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 10,
    },
    coverLetterInput: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 5,
        padding: 10,
        textAlignVertical: 'top',
        color: "black",
    },
    textthree: {
        color: 'black',
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 10,
    },
    textfour: {
        color: 'black',
        fontSize: 18,
        marginBottom: 16,
    },
    radioWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    radio: {
        height: 24,
        width: 24,
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    radioBg: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: 'black',
    },
    radioText: {
        fontSize: 18,
        color: 'black',
    },
    submitButton: {
        alignItems: 'center',
        marginTop: 20,
    },
    gradient: {
        height: 50,
        width: width * 0.9,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default JobApply;