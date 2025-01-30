import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';  

const ShareAdvertiseMerchant=()=> {
  return (
   
      <View style={styles.formContainer}>
        <Text style={styles.title}>Add Advertisement</Text>

        <TextInput
          style={styles.input}
          placeholder="Title *"
        />
        
        <View style={styles.dateContainer}>
          <TextInput
            style={styles.dateInput}
            placeholder="dd-mm-yyyy"
          />
          {/* <Ionicons name="calendar-outline" size={24} color="black" /> */}
        </View>

        <TextInput
          style={styles.input}
          placeholder="Description *"
        
        />

        <TextInput
          style={styles.input}
          placeholder="Location *"
        />

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>

  );
};

const styles = StyleSheet.create({

  formContainer: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  dateInput: {
    flex: 1,
    height: 50,
  },
  submitButton: {
    backgroundColor: '#800080',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
 
});
export default ShareAdvertiseMerchant;