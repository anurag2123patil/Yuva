import React from 'react';
import { StyleSheet, View, Text, TextInput, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import LinearGradient from "react-native-linear-gradient";


const { width, height } = Dimensions.get('window');

const EventRegistrationNext = () => {
  const saveData = () => {
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Event Registration Form</Text>
        <Text style={styles.closeButton}>✖</Text>
      </View>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={require('./photo/reactNative.jpg')}
        />
        <Text style={styles.eventTitle}>Cricket</Text>
        <View style={styles.eventDetails}>
          <Text style={styles.detailText}>Date: 2024-07-29T18:30:00.000Z</Text>
          <Text style={styles.detailText}>Venue: Wankhede Stadium</Text>
          <Text style={styles.detailText}>Time: 7.00 AM</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Ticket Details</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name:</Text>
          <TextInput placeholder="Enter Name" style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email Id:</Text>
          <TextInput placeholder="Enter Email Id" style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Contact Number:</Text>
          <TextInput placeholder="Enter Contact No." style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>No Of Ticket Count:</Text>
          <TextInput placeholder="Enter No. of Ticket Count" style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Registration Fees: ₹</Text>
          <TextInput placeholder="Enter Registration Fees" style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Total Fees: ₹</Text>
          <TextInput placeholder="Enter Total Fees" style={styles.input} />
        </View>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 0.07 * width, // Responsive font size
    fontWeight: 'bold',
    color: 'black',
  },
  closeButton: {
    fontSize: 0.05 * width, // Responsive font size
    color: 'black',
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  image: {
    width: '100%',
    height: 0.3 * height, // Responsive height
    borderRadius: 10,
    marginBottom: 10,
  },
  eventTitle: {
    fontSize: 0.05 * width, // Responsive font size
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  eventDetails: {
    marginBottom: 10,
  },
  detailText: {
    fontSize: 0.04 * width, // Responsive font size
    marginBottom: 5,
    color: 'black',
  },
  sectionTitle: {
    fontSize: 0.05 * width, // Responsive font size
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 0.04 * width, // Responsive font size
    marginBottom: 5,
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    fontSize: 0.04 * width, // Responsive font size
    backgroundColor: '#fff',
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

export default EventRegistrationNext;
