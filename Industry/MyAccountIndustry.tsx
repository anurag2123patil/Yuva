import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const MyAccountIndustry = () => {
    
    const handleFilePick = async () => {

    };

    const navigation = useNavigation();
    const [organisationName, setOrganisationName] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [organisationType, setOrganisationType] = useState('');
    const [owner, setOwner] = useState('');
    const [businessMobileNumber, setBusinessMobileNumber] = useState('');
    const [businessEmail, setBusinessEmail] = useState('');
    const [businessDetails, setBusinessDetails] = useState('');
    const [address, setAddress] = useState('');
    const [landmark, setLandmark] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [organisationGeoLocation, setOrganisationGeoLocation] = useState('');
    const [websiteUrl, setWebsiteUrl] = useState('');

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.profile}>
                    <Image source={require('./photo/user.png')} style={styles.profileIcon} />
                    <Text style={styles.profileName}>Mohini Chuadhari</Text>
                    <Text style={styles.profileNumber}>+918668903030</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('EditMyAccountIndustry')}>
                        <Text style={styles.editProfile}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.form}>
                    <Text style={styles.formLabel}>Organisation Name:</Text>
                    <TextInput
                        style={styles.formInput}
                        value={organisationName}
                        onChangeText={setOrganisationName}
                    />
                    <Text style={styles.formLabel}>Business Name:</Text>
                    <TextInput
                        style={styles.formInput}
                        value={businessName}
                        onChangeText={setBusinessName}
                    />
                    <Text style={styles.formLabel}>Contact Number:</Text>
                    <TextInput
                        style={styles.formInput}
                        value={contactNumber}
                        onChangeText={setContactNumber}
                    />
                    <Text style={styles.formLabel}>Organisation Type:</Text>
                    <TextInput
                        style={styles.formInput}
                        value={organisationType}
                        onChangeText={setOrganisationType}
                    />
                    <Text style={styles.formLabelone}>Business Details</Text>
                    <Text style={styles.formLabel}>Business Name:</Text>
                    <TextInput
                        style={styles.formInput}
                        value={businessName}
                        onChangeText={setBusinessName}
                    />
                    <Text style={styles.formLabel}>Owner:</Text>
                    <TextInput
                        style={styles.formInput}
                        value={owner}
                        onChangeText={setOwner}
                    />
                    <Text style={styles.formLabel}>Business Mobile Number:</Text>
                    <TextInput
                        style={styles.formInput}
                        value={businessMobileNumber}
                        onChangeText={setBusinessMobileNumber}
                    />
                    <Text style={styles.formLabel}>Business Email:</Text>
                    <TextInput
                        style={styles.formInput}
                        value={businessEmail}
                        onChangeText={setBusinessEmail}
                    />
                    <Text style={styles.formLabel}>Business Details:</Text>
                    <TextInput
                        style={styles.formInput}
                        value={businessDetails}
                        onChangeText={setBusinessDetails}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", }}>
                        <TouchableOpacity style={styles.fileChooseBtn} onPress={handleFilePick}>
                            <Text style={{ fontSize: 16, color: "black" }}>Choose File </Text>
                        </TouchableOpacity>
                    </View>
                    {/* <Text style={styles.uploadButtonText}>No File Chosen</Text> */}
                    <Text style={styles.formLabelone}>Address Details</Text>
                    <Text style={styles.formLabel}>Address:</Text>
                    <TextInput
                        style={styles.formInput}
                        value={address}
                        onChangeText={setAddress}
                    />
                    <Text style={styles.formLabel}>Landmark:</Text>
                    <TextInput
                        style={styles.formInput}
                        value={landmark}
                        onChangeText={setLandmark}
                    />
                    <Text style={styles.formLabel}>City:</Text>
                    <TextInput
                        style={styles.formInput}
                        value={city}
                        onChangeText={setCity}
                    />
                    <Text style={styles.formLabel}>Pincode:</Text>
                    <TextInput
                        style={styles.formInput}
                        value={pincode}
                        onChangeText={setPincode}
                    />
                    <Text style={styles.formLabel}>Organization/Institute Geo Location:</Text>
                    <TextInput
                        style={styles.formInput}
                        value={organisationGeoLocation}
                        onChangeText={setOrganisationGeoLocation}
                    />
                    <Text style={styles.formLabel}>Website Url:</Text>
                    <TextInput
                        style={styles.formInput}
                        value={websiteUrl}
                        onChangeText={setWebsiteUrl}
                    />
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity style={{ height: 60, width: 300 }}>
                            <LinearGradient colors={['#8B41A2', '#983F7F', '#AF3B52', '#BD3633']}
                                start={{ x: 1, y: 0 }}
                                end={{ x: 0, y: 1 }}
                                style={styles.gradient} >
                                <Text style={styles.buttonText}>Save</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    backArrow: {
        marginRight: 16,
    },
    arrowIcon: {
        width: 20,
        height: 20,
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color:'black',
    },
    profile: {
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    profileIcon: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 16,
    },
    profileNumber: {
        marginTop: 8,
    },
    form: {
        padding: 16,
    },
    formLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    formInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 12,
        marginBottom: 16,
        borderRadius: 4,
    },
    uploadButton: {
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 4,
        marginBottom: 8,
    },
    uploadButtonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
    },
    saveButton: {
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 4,
        marginTop: 16,
    },
    saveButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    },
    gradient: {
        padding: 10,
        borderRadius: 20,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#fff',
        backgroundColor: 'transparent'
    },
    editProfile: {
        color: 'blue',
        fontSize: width * 0.04, // Responsive font size
        marginTop: width * 0.03, // Responsive margin
        // backgroundColor:'blue'
    },
    fileChooseBtn: {
        height: 80,
        width: 160,
        borderRadius: 20,
        marginTop: 5,
        borderColor: "black",
        borderWidth: 1,
        justifyContent: "space-around",
        alignItems: "center",
        color:'lightGray',
        marginBottom:20

    },
    formLabelone: {
        fontSize: 24,
        fontWeight: 'bold',
        color:'black',
        marginBottom: 16,
        // marginTop: 20
    }

});

export default MyAccountIndustry;