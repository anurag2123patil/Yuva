import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const FAQ = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaodio, ex beatae magnam.', value: 'answer1' },
    { label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaodio, ex beatae magnam.', value: 'answer2' },
    { label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaodio, ex beatae magnam.', value: 'answer3' },
    { label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaodio, ex beatae magnam.', value: 'answer4' },
  ]);

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    { label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaodio, ex beatae magnam.', value: 'answer1' },
    { label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaodio, ex beatae magnam.', value: 'answer2' },
    { label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaodio, ex beatae magnam.', value: 'answer3' },
    { label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaodio, ex beatae magnam.', value: 'answer4' },
  ]);

  const [open3, setOpen3] = useState(false);
  const [value3, setValue3] = useState(null);
  const [items3, setItems3] = useState([
    { label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaodio, ex beatae magnam.', value: 'answer1' },
    { label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaodio, ex beatae magnam.', value: 'answer2' },
    { label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaodio, ex beatae magnam.', value: 'answer3' },
    { label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaodio, ex beatae magnam.', value: 'answer4' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Frequently Asked Questions</Text>

      <View style={{ zIndex: open ? 1000 : 500 }}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="For Whom Yuvasarathi Works?"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownMenu}
        />
      </View>

      <View style={{ zIndex: open2 ? 1000 : 400 }}>
        <DropDownPicker
          open={open2}
          value={value2}
          items={items2}
          setOpen={setOpen2}
          setValue={setValue2}
          setItems={setItems2}
          placeholder="What about Yuvasarathi"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownMenu}
        />
      </View>

      <View style={{ zIndex: open3 ? 1000 : 300 }}>
        <DropDownPicker
          open={open3}
          value={value3}
          items={items3}
          setOpen={setOpen3}
          setValue={setValue3}
          setItems={setItems3}
          placeholder="Main Moto of Yuvasarathi"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownMenu}
        />
      </View>

      <ScrollView style={styles.answerContainer}>
        {value && (
          <Text style={styles.answer}>{value}</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  dropdown: {
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
  },
  dropdownMenu: {
    backgroundColor: '#ffffff',
  },
  answerContainer: {
    flex: 1,
  },
  answer: {
    fontSize: 16,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 4,
  },
});

export default FAQ;