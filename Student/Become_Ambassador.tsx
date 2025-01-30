import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert, ScrollView, Linking, Dimensions } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import DocumentPicker from 'react-native-document-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';









import { LinearGradient } from 'expo-linear-gradient';
import DocumentPicker from 'expo-document-picker';
const { width, height } = Dimensions.get('window');

const Become_Ambassador = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contactnumber, setContactnumber] = useState('');
    const [collageName, setCollageName] = useState('');
    const [collageAddress, setCollageAddress] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [states, setStates] = useState('');
    const [pinCode, setPincode] = useState('');
    const [reason, setReason] = useState('');

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [contactnumbererror, setContactnumbererror] = useState(false);
    const [collageNameError, setCollageNameError] = useState(false);
    const [collageAddressError, setCollageAddressError] = useState(false);
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
        setCollageNameError(!collageName);
        setCollageAddressError(!collageAddress);
        setCityError(!city);
        setDistrictError(!district);
        setStatesError(!states);
        setPincodeError(!pinCode);
        setReasonError(!reason);

        if (!name || !email || !contactnumber || !collageName || !collageAddress || !city || !district || !states || !pinCode || !reason || !isChecked) {
            if (!isChecked) {
                Alert.alert('Please agree to the terms and conditions.');
            }
            return;
        } else {
            console.warn("Submitted");
        }
    };

    const [file, setFile] = useState(null);

    const handleFilePick = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            setFile(res);
            console.log(res);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                Alert.alert('Cancelled');
            } else {
                Alert.alert('Unknown Error: ' + JSON.stringify(err));
                throw err;
            }
        }
    };

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    const handlePress = () => {
        Linking.openURL('https://www.google.com');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.content}>
                <Image
                    source={require('./photo/ambassador.png')}
                    style={styles.ambassador_img}
                />
                <View style={styles.box}>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={(text) => setName(text)}
                        placeholder="Student’s Full Name"
                    />
                    {nameError && <Text style={styles.error}>Required field*</Text>}

                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="Email Id"
                    />
                    {emailError && <Text style={styles.error}>Required field*</Text>}

                    <TextInput
                        style={styles.input}
                        value={contactnumber}
                        onChangeText={(text) => setContactnumber(text)}
                        placeholder="Contact Number"
                    />
                    {contactnumbererror && <Text style={styles.error}>Required field*</Text>}

                    <TextInput
                        style={styles.input}
                        value={collageName}
                        onChangeText={(text) => setCollageName(text)}
                        placeholder="College Name"
                    />
                    {collageNameError && <Text style={styles.error}>Required field*</Text>}

                    <TextInput
                        style={styles.input}
                        value={collageAddress}
                        onChangeText={(text) => setCollageAddress(text)}
                        placeholder="College Address"
                    />
                    {collageAddressError && <Text style={styles.error}>Required field*</Text>}

                    <View style={styles.row}>
                        <TextInput
                            style={styles.inputmini}
                            value={city}
                            onChangeText={(text) => setCity(text)}
                            placeholder="City"
                        />
                        {cityError && <Text style={styles.error}>Required field*</Text>}

                        <TextInput
                            style={styles.inputmini}
                            value={district}
                            onChangeText={(text) => setDistrict(text)}
                            placeholder="District"
                        />
                        {districtError && <Text style={styles.error}>Required field*</Text>}
                    </View>

                    <View style={styles.row}>
                        <TextInput
                            style={styles.inputmini}
                            value={states}
                            onChangeText={(text) => setStates(text)}
                            placeholder="State"
                        />
                        {statesError && <Text style={styles.error}>Required field*</Text>}

                        <TextInput
                            style={styles.inputmini}
                            value={pinCode}
                            onChangeText={(text) => setPincode(text)}
                            placeholder="Pincode"
                        />
                        {pinCodeError && <Text style={styles.error}>Required field*</Text>}
                    </View>

                    <TextInput
                        style={styles.input}
                        value={reason}
                        onChangeText={(text) => setReason(text)}
                        placeholder="Why Do You Want To Become an Ambassador *"
                    />
                    {reasonError && <Text style={styles.error}>Required field*</Text>}

                    <View style={styles.fileContainer}>
                        <TouchableOpacity style={styles.fileChooseBtn} onPress={handleFilePick}>
                            <MaterialCommunityIcons name="file-upload-outline" size={43} color="grey" />
                            <Text style={styles.fileChooseText}>Upload College/School ID</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.checkboxContainer}>
                        <TouchableOpacity onPress={toggleCheckbox} style={styles.checkbox}>
                            {isChecked && (
                                <MaterialCommunityIcons name="check" size={20} color="black" />
                            )}
                        </TouchableOpacity>
                        <Text style={styles.checkboxLabel}>
                            I agree to the{' '}
                            <Text style={styles.linkText} onPress={handlePress}>
                                terms and conditions
                            </Text>
                        </Text>
                    </View>

                    <TouchableOpacity onPress={saveData} style={styles.submitButton}>
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
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f2f2f2',
    },
    content: {
        alignItems: 'center',
        padding: width * 0.05,
    },
    ambassador_img: {
        height: width * 0.3, // Responsive height
        width: width * 0.8,  // Responsive width
        borderRadius: 10,
        marginTop: height * 0.03,
    },
    box: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        width: width * 0.9, // Responsive width
        padding: width * 0.05, // Responsive padding
        backgroundColor: '#fff',
        marginTop: height * 0.03,
        marginBottom: height * 0.03,
    },
    input: {
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 5,
        paddingHorizontal: width * 0.03,
        marginBottom: height * 0.02,
        fontSize: width * 0.04, // Responsive font size
        color: 'black',
    },
    inputmini: {
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 5,
        paddingHorizontal: width * 0.03,
        fontSize: width * 0.04, // Responsive font size
        color: 'black',
        width: width * 0.4, // Responsive width
        marginBottom: height * 0.02,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: height * 0.02,
    },
    gradient: {
        paddingVertical: width * 0.02,
        paddingHorizontal: width * 0.05,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: width * 0.05, // Responsive font size
        color: '#fff',
        textAlign: 'center',
    },
    error: {
        color: 'black',
        fontSize: width * 0.04, // Responsive font size
        marginTop: height * 0.01,
    },
    fileContainer: {
        alignItems: 'center',
        marginVertical: height * 0.03,
    },
    fileChooseBtn: {
        height: height * 0.1, // Responsive height
        width: width * 0.7,  // Responsive width
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fileChooseText: {
        fontSize: width * 0.04, // Responsive font size
        color: 'grey',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: height * 0.02,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    checkboxLabel: {
        fontSize: width * 0.04, // Responsive font size
        color: 'black',
    },
    linkText: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    submitButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: height * 0.05, // Responsive height
        width: width * 0.8,   // Responsive width
        marginTop: height * 0.03,
    },
});

export default Become_Ambassador;
