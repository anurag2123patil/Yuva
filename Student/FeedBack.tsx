import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

const { width, height } = Dimensions.get('window');

const FeedBack = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [feedbackError, setFeedbackError] = useState(false);

    const saveData = () => {
        setNameError(!name);
        setEmailError(!email);
        setFeedbackError(!feedback);

        if (!name || !email || !feedback) {
            return false;
        } else {
            console.warn("Submitted");
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.Feed}>
                    <Text style={styles.Text}>FEEDBACK</Text>
                </View>
                <View style={styles.BoxWrapper}>
                    <View style={styles.box}>
                        <Text style={styles.headerText}>Share Feedback</Text>
                        <TextInput
                            style={styles.input}
                            value={name}
                            onChangeText={setName}
                            placeholder="Fullname"
                        />
                        {nameError && <Text style={styles.error}>Required field*</Text>}
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Email Id"
                        />
                        {emailError && <Text style={styles.error}>Required field*</Text>}
                        <TextInput
                            style={styles.input}
                            value={feedback}
                            onChangeText={setFeedback}
                            placeholder="Feedback"
                            multiline
                            numberOfLines={4}
                        />
                        {feedbackError && <Text style={styles.error}>Required field*</Text>}
                        <TouchableOpacity onPress={saveData} style={styles.buttonWrapper}>
                            <LinearGradient
                                colors={['#8B41A2', '#983F7F', '#AF3B52', '#BD3633']}
                                start={{ x: 1, y: 0 }}
                                end={{ x: 0, y: 1 }}
                                style={styles.gradient}
                            >
                                <Text style={styles.buttonText}>Submit</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        padding: width * 0.05,
    },
    Feed: {
        alignItems: 'center',
        marginTop: height * 0.05,
        marginBottom: height * 0.03,
    },
    Text: {
        fontSize: width * 0.07, // Responsive font size
        color: 'black',
        fontWeight: 'bold',
        shadowColor: 'black',
        elevation: 8,
        shadowOpacity: 0.8,
    },
    BoxWrapper: {
        flex: 1,
        alignItems: 'center',
        width: '100%', // Ensure the box fits within the screen
    },
    box: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        width: '90%', // Responsive width
        padding: width * 0.05, // Responsive padding
        backgroundColor: '#fff',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
    },
    headerText: {
        fontSize: width * 0.05, // Responsive font size
        color: 'black',
        marginBottom: height * 0.02,
    },
    input: {
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 5,
        paddingLeft: width * 0.03,
        marginBottom: height * 0.02,
        fontSize: width * 0.04, // Responsive font size
        width: '100%',
        minHeight: height * 0.1, // Minimum height for multiline input
    },
    gradient: {
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: height * 0.015, // Responsive padding
        paddingHorizontal: width * 0.1, // Responsive padding
    },
    buttonText: {
        fontSize: width * 0.045, // Responsive font size
        color: '#fff',
    },
    error: {
        color: 'red',
        marginTop: height * 0.01,
        fontSize: width * 0.04, // Responsive font size
    },
    buttonWrapper: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.03,
        marginBottom: height * 0.03,
    },
});

export default FeedBack;
