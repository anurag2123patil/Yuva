import React, { useState } from "react";
import { Text, TouchableOpacity, TextInput, View, StyleSheet, ScrollView, Alert } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from '@react-navigation/native';

const EventRegistration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [applicant, setApplicant] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [taluka, setTaluka] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [state, setState] = useState('');
  const [ticket, setTicket] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [applicantError, setApplicantError] = useState(false);
  const [contactError, setContactError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [talukaError, setTalukaError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [districtError, setDistrictError] = useState(false);
  const [stateError, setStateError] = useState(false);
  const [ticketError, setTicketError] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const navigation = useNavigation(); 

  const saveData = () => {
    setNameError(!name);
    setEmailError(!email);
    setAgeError(!age);
    setGenderError(!gender);
    setApplicantError(!applicant);
    setCityError(!city);
    setDistrictError(!district);
    setContactError(!contact);
    setAddressError(!address);
    setTalukaError(!taluka);
    setStateError(!state);
    setTicketError(!ticket);

    if (!name || !email || !age || !gender || !applicant || !city || !district || !contact || !address || !taluka || !state || !ticket || !isChecked) {
        if (!isChecked) {
            Alert.alert('Please agree to the terms and conditions.');
        }
        return;
    } else {
        console.warn("Submitted");
    }
};

  return (
    <ScrollView>
      <Text style={styles.title}>Event Registration Form</Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Full Name *"
        />
        {nameError ? <Text style={styles.error}>Required field*</Text> : null}

        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email Id *"
        />
        {emailError ? <Text style={styles.error}>Required field*</Text> : null}

        <View style={styles.row}>
          <View>
            <TextInput
              style={styles.inputMini}
              value={gender}
              onChangeText={(text) => setGender(text)}
              placeholder="Gender *"
            />
            {genderError ? <Text style={styles.error}>Required field*</Text> : null}
          </View>
          <View>
            <TextInput
              style={styles.inputMini}
              value={age}
              onChangeText={(text) => setAge(text)}
              placeholder="Age *"
            />
            {ageError ? <Text style={styles.error}>Required field*</Text> : null}
          </View>
        </View>

        <TextInput
          style={styles.input}
          value={applicant}
          onChangeText={(text) => setApplicant(text)}
          placeholder="Applicant Type *"
        />
        {applicantError ? <Text style={styles.error}>Required field*</Text> : null}

        <TextInput
          style={styles.input}
          value={contact}
          onChangeText={(text) => setContact(text)}
          placeholder="Contact Number *"
        />
        {contactError ? <Text style={styles.error}>Required field*</Text> : null}

        <TextInput
          style={styles.input}
          value={address}
          onChangeText={(text) => setAddress(text)}
          placeholder="Address *"
        />
        {addressError ? <Text style={styles.error}>Required field*</Text> : null}

        <View style={styles.row}>
          <View>
            <TextInput
              style={styles.inputMini}
              value={taluka}
              onChangeText={(text) => setTaluka(text)}
              placeholder="Taluka Name *"
            />
            {talukaError ? <Text style={styles.error}>Required field*</Text> : null}
          </View>
          <View>
            <TextInput
              style={styles.inputMini}
              value={city}
              onChangeText={(text) => setCity(text)}
              placeholder="City Name *"
            />
            {cityError ? <Text style={styles.error}>Required field*</Text> : null}
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <TextInput
              style={styles.inputMini}
              value={district}
              onChangeText={(text) => setDistrict(text)}
              placeholder="District Name *"
            />
            {districtError ? <Text style={styles.error}>Required field*</Text> : null}
          </View>
          <View>
            <TextInput
              style={styles.inputMini}
              value={state}
              onChangeText={(text) => setState(text)}
              placeholder="State Name*"
            />
            {stateError ? <Text style={styles.error}>Required field*</Text> : null}
          </View>
        </View>

        <TextInput
          style={styles.input}
          value={ticket}
          onChangeText={(text) => setTicket(text)}
          placeholder="Enter Number Of Ticket *"
        />
        {ticketError ? <Text style={styles.error}>Required field*</Text> : null}

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={saveData}>
            <LinearGradient
              colors={['#8B41A2', '#983F7F', '#AF3B52', '#BD3633']}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.gradient}
            >
              <Text style={styles.buttonText}>Register</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('EventRegisterNext')}>
            <LinearGradient
              colors={['#8B41A2', '#983F7F', '#AF3B52', '#BD3633']}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.gradient}
            >
              <Text style={styles.buttonText}>Next</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginTop: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  formContainer: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    marginTop: 25,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  input: {
    marginHorizontal: 25,
    marginTop: 20,
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: 'white',
    color: 'black', // Ensures text is black
    shadowColor: 'black',
    elevation: 2,
  },
  error: {
    color: 'red',
    marginLeft: 30,
  },
  inputMini: {
    marginHorizontal: 25,
    marginTop: 20,
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingLeft: 10,
    width: 130,
    backgroundColor: 'white',
    color: 'black', // Ensures text is black
    shadowColor: 'black',
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  gradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
    marginBottom: 30,
  },
});

export default EventRegistration;
