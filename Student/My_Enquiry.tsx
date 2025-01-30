
import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Dimensions, ScrollView, Button, TouchableOpacity } from 'react-native';
// import My_Enquiry from '../Industry/My_EnquiryIndustry';
import { useNavigation } from '@react-navigation/native';


const initialData = [
  { id: '01', shop: 'hdbchjwcbf', category: 'dbefbjgrthg', address: 'ABC' },
  { id: '02', shop: 'fvbjgbvk', category: 'ffygfgtdxhjugg', address: 'xyz' }
];

const screenWidth = Dimensions.get('window').width;

const My_Enquiry = () => {
    const navigation = useNavigation();
  const [data, setData] = useState(initialData);

  const deleteItem = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>MY ENQUIRIES</Text>
      </View>
      
      
      <View style={styles.tabsContainer}>
        <TouchableOpacity style={styles.tab}
        onPress={() => navigation.navigate('EventEnquiries')}>
          <Text style={styles.tabText}>Event Enquiries</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}
        onPress={() => navigation.navigate('MerchantEnquiry')}>
          <Text style={styles.tabText}>Merchant Enquiries</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}
        onPress={() => navigation.navigate('AmbassadorEnquiry')}>
          <Text style={styles.tabText}>Ambassador Enquiries</Text>
        </TouchableOpacity>
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
                <Text style={styles.text}>{item.shop}</Text>
              </View>
              <View style={[styles.cell, styles.largeCell]}>
                <Text style={styles.text}>{item.category}</Text>
              </View>
              <View style={[styles.cell, styles.largeCell]}>
                <Text style={styles.text}>{item.address}</Text>
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
                <Text style={[styles.text, styles.headerTextt]}>Shop Name</Text>
              </View>
              <View style={[styles.cell, styles.largeCell]}>
                <Text style={[styles.text, styles.headerTextt]}>Category</Text>
              </View>
              <View style={[styles.cell, styles.largeCell]}>
                <Text style={[styles.text, styles.headerTextt]}>Address</Text>
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
    backgroundColor: '#fff',
  },
  header: {
    padding: 10,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'semibold'
  },
  headerTextt: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 14,
    fontWeight: 'semibold',
    textAlign: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#000', 
  },
  tabText: {
    fontSize: 16,
    color: 'blue', 
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 120
  },
  smallCell: {
    flex: 1,
  },
  largeCell: {
    flex: 3,
  },
  text: {
    textAlign: 'center',
    color:'black'
  },
});

export default My_Enquiry;