import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Button, Dimensions, SafeAreaView } from 'react-native';

const { width, height } = Dimensions.get('window');

const RadioButton = ({ selected, onPress, label }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.radioButtonContainer}>
      <View style={styles.radioButton}>
        {selected ? <View style={styles.radioButtonSelected} /> : null}
      </View>
      <Text style={styles.radioButtonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const RadioButtonGroup = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedValue1, setSelectedValue1] = useState(null);
  const [selectedValue2, setSelectedValue2] = useState(null);

  const options = ['Python 1', 'Javascript 2', 'Go 3'];
  const options1 = ['Python 1', 'Javascript 2', 'Go 3'];
  const options2 = ['Python 1', 'Javascript 2', 'Go 3'];

  return (
    <View style={styles.pollContainer}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>1. What programming language do you use during the coding interview?</Text>
        {options.map((option, index) => (
          <RadioButton
            key={index}
            label={option}
            selected={selectedValue === option}
            onPress={() => setSelectedValue(option)}
          />
        ))}
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>2. What programming language do you use during the coding interview?</Text>
        {options1.map((option, index) => (
          <RadioButton
            key={index}
            label={option}
            selected={selectedValue1 === option}
            onPress={() => setSelectedValue1(option)}
          />
        ))}
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>3. What programming language do you use during the coding interview?</Text>
        {options2.map((option, index) => (
          <RadioButton
            key={index}
            label={option}
            selected={selectedValue2 === option}
            onPress={() => setSelectedValue2(option)}
          />
        ))}
      </View>
      <Button title="Vote" />
    </View>
  );
};

const PolesMerchant = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.pole}>Poles & Survey</Text>
        <View style={styles.container}>
          <RadioButtonGroup />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '90%', // Makes it responsive for different widths
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  pollContainer: {
    borderColor: 'black',
    borderWidth: 1,
    width: '100%', // Makes it responsive
    marginBottom: 20,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.7,
    elevation: 7,
    backgroundColor: 'white',
    padding: 20, // Adjust padding for better spacing
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: width * 0.04, // Font size adapts to screen width
    color: 'black',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  radioButton: {
    height: width * 0.05, // Responsive size for radio buttons
    width: width * 0.05,
    borderRadius: (width * 0.05) / 2,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioButtonSelected: {
    height: width * 0.025, // Inner circle size based on screen width
    width: width * 0.025,
    borderRadius: (width * 0.025) / 2,
    backgroundColor: 'blue',
  },
  radioButtonLabel: {
    fontSize: width * 0.045, // Responsive text size
    color: 'black',
    fontWeight: 'bold',
  },
  pole: {
    fontSize: width * 0.07, // Responsive pole title
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
  },
});

export default PolesMerchant;