import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Dimensions, ScrollView, Button, TouchableOpacity } from 'react-native';

const initialData = [
  { id: '01', event: 'Tech Talk',date:'25/08/24', address: 'ABC',location: 'https://www.google.com/maps', category: 'cybersecurity',pay:'3000'},
  { id: '02', event: 'Book Fest',date:'15/07/24', address: 'ABC',location: 'https://www.google.com/maps', category: 'cybersecurity',pay:'3000'},
  { id: '03', event: 'AI Summit',date:'08/10/24', address: 'ABC',location: 'https://www.google.com/maps', category: 'cybersecurity',pay:'3000'},
  { id: '04', event: 'Code Fest',date:'31/11/24', address: 'ABC',location: 'https://www.google.com/maps', category: 'cybersecurity',pay:'3000'},
  { id: '05', event: 'Cloud Camp',date:'05/07/24', address: 'ABC',location: 'https://www.google.com/maps', category: 'cybersecurity',pay:'3000'},
  { id: '06', event: ' VR World',date:'11/09/24', address: 'ABC',location: 'https://www.google.com/maps', category: 'cybersecurity',pay:'3000'},
  { id: '07', event: 'FinTech Meet',date:'14/09/24', address: 'ABC',location: 'Nhttps://www.google.com/maps', category: 'cybersecurity',pay:'3000'},

];

const screenWidth = Dimensions.get('window').width;

const EventEnquiries = () => {
  const [data, setData] = useState(initialData);

  const deleteItem = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>REGISTERED EVENTS</Text>
      </View>
      <ScrollView style={styles.container} horizontal={true}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <View style={[styles.cell, styles.smallCell]}>
                <Text style={styles.text}>{item.id}</Text>
              </View>
              <View style={[styles.cell, styles.largeCell]}>
                <Text style={styles.text}>{item.event}</Text>
              </View>
              <View style={[styles.cell, styles.largeCell]}>
                <Text style={styles.text}>{item.date}</Text>
              </View>
              <View style={[styles.cell, styles.largeCell]}>
                <Text style={styles.text}>{item.address}</Text>
              </View>
              <View style={[styles.cell, styles.largeCell]}>
                <TouchableOpacity>
                <Text style={styles.text}>{item.location}</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.cell, styles.largeCell]}>
                <Text style={styles.text}>{item.category}</Text>
              </View>
              <View style={[styles.cell, styles.largeCell]}>
                <Text style={styles.text}>{item.pay}</Text>
              </View>
              <View style={[styles.cell, styles.largeCell]}>
                <Button title="Delete" onPress={() => deleteItem(item.id)} />
              </View>
            </View>
          )}
          ListHeaderComponent={
            <View style={styles.row}>
              <View style={[styles.cell, styles.smallCell]}>
                <Text style={[styles.text, styles.headerTextt]}>Sr. No</Text>
              </View>
              <View style={[styles.cell, styles.largeCell]}>
                <Text style={[styles.text, styles.headerTextt]}>Event Title</Text>
              </View>
              <View style={[styles.cell, styles.largeCell]}>
                <Text style={[styles.text, styles.headerTextt]}>Event Date</Text>
              </View>
              <View style={[styles.cell, styles.largeCell]}>
                <Text style={[styles.text, styles.headerTextt]}>Address</Text>
              </View>
              <View style={[styles.cell, styles.largeCell]}>
                <TouchableOpacity>
                <Text style={[styles.text, styles.headerTextt]}>Location Link</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.cell, styles.largeCell]}>
                <Text style={[styles.text, styles.headerTextt]}>Category</Text>
              </View>
              <View style={[styles.cell, styles.largeCell]}>
                <Text style={[styles.text, styles.headerTextt]}>Pay Fees</Text>
              </View>
              <View style={[styles.cell, styles.largeCell]}>
                <Text style={[styles.text, styles.headerTextt]}>Delete</Text>
              </View>
            </View>
          }
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff'
  },
  header: {
    padding: 10,
  },
  headerText: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'semibold'
  },
  headerTextt: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 14,
    fontWeight: 'semibold',
    textAlign: 'center',
    marginTop:20,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    width: 110,

  },
  smallCell: {
    flex: 1,
  },
  largeCell: {
    flex: 3,
  },
  text: {
    textAlign: 'center',
  },
});

export default EventEnquiries;