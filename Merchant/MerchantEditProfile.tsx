import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

const { width, height } = Dimensions.get('window');

const MerchantEditProfile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contactnumber, setContactnumber] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyAddress, setCompanyAddress] = useState('');
    const [companyEmail, setCompanyEmail] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [states, setStates] = useState('');
    const [pinCode, setPincode] = useState('');
    const [reason, setReason] = useState('');

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [contactnumbererror, setContactnumbererror] = useState(false);
    const [companyNameError, setCompanyNameError] = useState(false);
    const [companyAddressError, setCompanyAddressError] = useState(false);
    const [cityError, setCityError] = useState(false);
    const [districtError, setDistrictError] = useState(false);
    const [statesError, setStatesError] = useState(false);
    const [pinCodeError, setPincodeError] = useState(false);
    const [reasonError, setReasonError] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const saveData = () => {
        setNameError(!name);
        setEmailError(!email);
        setContactnumbererror(!contactnumber);
        setCompanyNameError(!companyName);
        setCompanyAddressError(!companyAddress);
        setCityError(!city);
        setDistrictError(!district);
        setStatesError(!states);
        setPincodeError(!pinCode);
        setReasonError(!reason);

        if (!name || !email || !contactnumber || !companyName || !companyAddress || !city || !district || !states || !pinCode || !reason || !isChecked) {
            if (!isChecked) {
                Alert.alert('Please agree to the terms and conditions.');
            }
            return;
        } else {
            console.warn("Submitted");
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.box}>
                <View style={styles.Feed}><Text style={styles.Text}>Personal Details </Text></View>

                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={(text) => setName(text)}
                    placeholder="Merchant's Full Name"
                />
                {nameError ? <Text style={styles.error}>Required field*</Text> : null}

                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder="Email Id"
                />
                {emailError ? <Text style={styles.error}>Required field*</Text> : null}

                <TextInput
                    style={styles.input}
                    value={contactnumber}
                    onChangeText={(text) => setContactnumber(text)}
                    placeholder="Contact Number"
                />
                {contactnumbererror ? <Text style={styles.error}>Required field*</Text> : null}

                <TextInput
                    style={styles.input}
                    value={companyName}
                    onChangeText={(text) => setCompanyName(text)}
                    placeholder="Company Name"
                />
                {companyNameError ? <Text style={styles.error}>Required field*</Text> : null}

                <TextInput
                    style={styles.input}
                    value={companyAddress}
                    onChangeText={(text) => setCompanyAddress(text)}
                    placeholder="Company Address"
                />
                {companyAddressError ? <Text style={styles.error}>Required field*</Text> : null}
                
                <TextInput
                    style={styles.input}
                    value={companyEmail}
                    onChangeText={(text) => setCompanyEmail(text)}
                    placeholder="Company Email"
                />

                <View style={styles.row}>
                    <TextInput
                        style={styles.inputmini}
                        value={city}
                        onChangeText={(text) => setCity(text)}
                        placeholder="City"
                    />
                    {cityError ? <Text style={styles.error}>Required field*</Text> : null}

                    <TextInput
                        style={styles.inputmini}
                        value={district}
                        onChangeText={(text) => setDistrict(text)}
                        placeholder="District"
                    />
                    {districtError ? <Text style={styles.error}>Required field*</Text> : null}
                </View>

                <View style={styles.row}>
                    <TextInput
                        style={styles.inputmini}
                        value={states}
                        onChangeText={(text) => setStates(text)}
                        placeholder="State"
                    />
                    {statesError ? <Text style={styles.error}>Required field*</Text> : null}

                    <TextInput
                        style={styles.inputmini}
                        value={pinCode}
                        onChangeText={(text) => setPincode(text)}
                        placeholder="Pincode"
                    />
                    {pinCodeError ? <Text style={styles.error}>Required field*</Text> : null}
                </View>

                <View style={styles.submitContainer}>
                    <TouchableOpacity onPress={saveData}>
                        <LinearGradient colors={['#8B41A2', '#983F7F', '#AF3B52', '#BD3633']}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.gradient}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingBottom: 20,
    },
    box: {
        borderColor: 'black',
        width: width * 0.9,
        borderWidth: 1,
        borderRadius: 20,
        paddingVertical: 30,
        paddingHorizontal: 20,
        marginTop: 30,
    },
    Text: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        elevation: 8,
        shadowOpacity: 0.8,
    },
    Feed: {
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 10,
        width: '100%',
        height: height * 0.06,
    },
    inputmini: {
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 5,
        paddingLeft: 10,
        width: width * 0.4,
        height: height * 0.06,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    gradient: {
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
    },
    submitContainer: {
        marginTop: 30,
    },
    error: {
        color: 'red',
        marginLeft: 10,
        marginBottom: 10,
    },
});

export default MerchantEditProfile;
