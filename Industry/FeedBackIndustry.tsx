import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { ScrollView } from 'react-native-gesture-handler';


const FeedBackIndustry = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [feedbackError, setFeedbackError] = useState(false);

    const saveData = () => {
        // console.warn(name);
        // console.warn(email);
        // console.warn(feedback);

        { !name ? setNameError(true) : setNameError(false) }
        { !email ? setEmailError(true) : setEmailError(false) }
        { !feedback ? setFeedbackError(true) : setFeedbackError(false) }

        if (!name || !email || !feedback) {
            return false
        }
        else {
            console.warn("Submited");
            
        }

    }

    return (
        <ScrollView>
            <View style={styles.Feed}><Text style={styles.Text}>FEEDBACK</Text></View>
            <View style={styles.BoxWrapper}>
                <View style={styles.box}>
                    <Text style={{ fontSize: 20, marginTop: 20, marginLeft: 20, color: 'black' }}>Share Feedback</Text>
                    <TextInput style={styles.input}
                        value={name}
                        onChangeText={(text) => setName(text)}
                        placeholder="Fullname"
                    />

                    {nameError ? <Text style={styles.error}>Required field*</Text> : null}
                    <TextInput style={styles.input}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="Email Id"
                    />
                    {emailError ? <Text style={styles.error}>Required field*</Text> : null}

                    <TextInput style={styles.input}
                        value={feedback}
                        onChangeText={(text) => setFeedback(text)}
                        placeholder="Feedback"
                    />
                    {feedbackError ? <Text style={styles.error}>Required field* </Text> : null}
                    <View style={{justifyContent:"center" , alignItems:"center", marginTop:30 , marginBottom:30}}>
                        <View style={{ justifyContent: "center", alignItems: "center", height: 40, width: 370 }}>
                            <TouchableOpacity onPress={saveData}> 
                                <LinearGradient colors={['#8B41A2', '#983F7F', '#AF3B52', '#BD3633']}
                                    start={{ x: 1, y: 0 }}
                                    end={{ x: 0, y: 1 }}
                                    style={styles.gradient} >
                                    <Text style={styles.buttonText} >Submit</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    Text: {

        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        shadowColor: 'black',
        elevation: 8,
        shadowOpacity: 0.8
    },
    Feed: {

        alignItems: 'center',
        marginTop: 60
    },
    box: {

        borderColor: 'black',
        height: 400,
        width: 350,
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 60,


    },
    BoxWrapper: {
        flex: 1,
        alignItems: 'center',

    },
    input: {

        marginLeft: 30,
        marginRight: 30,
        marginTop: 30,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 5,
        paddingLeft: 10,

    },
    gradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 5,
        color: '#fff',
        backgroundColor: 'transparent'
    },
    error: {
        color: 'red',
        marginLeft: 30
    }


});

export default FeedBackIndustry;




