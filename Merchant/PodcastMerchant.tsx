import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const image1 = require('./photo/photo1.jpg');
const image2 = require('./photo/photo2.jpg');
const image3 = require('./photo/photo3.jpg');
const image4 = require('./photo/photo4.jpg');
const image5 = require('./photo/photo5.jpg');



const PodcastMerchant = () => {
  const navigation = useNavigation();



  const imageData = [
    { id: '1', source: image1 },
    { id: '2', source: image2 },
    { id: '3', source: image3 },
    { id: '4', source: image4 },
    { id: '5', source: image5 },
  ];

  const [name, setName] = useState('');
  return (
    <ScrollView style={styles.body}>
      <View style={styles.Get}>
        <Text style={styles.Text}>PODCAST</Text>
        <TextInput style={styles.search}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="       Search"
        />

        <Text style={styles.tx}>Recent</Text>
        <Text style={{ fontSize: 15, marginLeft: 340 }}>See all</Text>
        <View style={{ justifyContent: 'center', alignItems: 'center', height: 280 }}>
          <FlatList
            data={imageData}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.interSliderView}>
                <TouchableOpacity style={styles.touchable}>
                  <Image
                    source={item.source}
                    style={styles.image}
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <Text style={styles.Tend}>Trending</Text>
        <Text style={{ fontSize: 15, marginLeft: 340, }}>See all</Text>

        <View style={styles.bg}>
          <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Podcast2Merchant')}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require('./photo/photo4.jpg')}
                style={{ height: 60, width: 60, marginTop: 10, marginLeft: 10, borderRadius: 3 }}
              />
              <Text style={{ fontSize: 20, marginLeft: 40, marginTop: 16, color: 'black', fontWeight: 'bold', }}>Career Curves</Text>
            </View>
          </TouchableOpacity>
          <Text style={{ fontSize: 15, marginLeft: 120, marginBottom: 16, color: 'gray' }}>by Evan Richards</Text>
        </View>

        <View style={styles.bg}>
          <TouchableOpacity style={styles.touch}  onPress={() => navigation.navigate('Podcast2Merchant')}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require('./photo/photo6.jpg')}
                style={{ height: 60, width: 60, marginTop: 10, marginLeft: 10, borderRadius: 3 }}
              />
              <Text style={{ fontSize: 20, marginLeft: 40, marginTop: 16, color: 'black', fontWeight: 'bold', }}>Life After Startup</Text>
            </View>
          </TouchableOpacity>
          <Text style={{ fontSize: 15, marginLeft: 120, marginBottom: 16, color: 'gray' }}>by steila flores</Text>
        </View>

        <View style={styles.bg}>
          <TouchableOpacity style={styles.touch}  onPress={() => navigation.navigate('Podcast2Merchant')}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require('./photo/photo5.jpg')}
                style={{ height: 60, width: 60, marginTop: 10, marginLeft: 10, borderRadius: 3 }}
              />
              <Text style={{ fontSize: 20, marginLeft: 40, marginTop: 16, color: 'black', fontWeight: 'bold', }}>Design Inspiration</Text>
            </View>
          </TouchableOpacity>
          <Text style={{ fontSize: 15, marginLeft: 120, marginBottom: 16, color: 'gray' }}>by Evan Richards</Text>
        </View>
        {/* <TouchableOpacity style={styles.addButton}
          onPress={() => navigation.navigate('AddPodcast')}>
          <Text style={styles.addButtonText}>+ Add</Text>
        </TouchableOpacity> */}
      </View>
    </ScrollView>





  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,

  },
  Text: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    shadowColor: 'black',
    shadowOpacity: 0.8,

  },
  Get: {
    alignItems: 'center',
    marginTop: 25,
  },
  search: {
    borderWidth: 2,
    borderColor: 'gray',
    padding: 10,
    height: 40,
    width: 330,
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 15,

  },
  tx: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginRight: 270,
    marginTop: 20,

  },
  interSliderView: {
    flex: 1,
    width: 190,
    height: 200,
    marginTop: 15,
    alignItems: "center",

  },
  touchable: {
    height: 200,
    flex: 1,
    width: 180,
    borderRadius: 5,
    overflow: 'hidden',

  },
  image: {
    flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  Tend: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginRight: 270,
    marginTop: 2,
  },
  bg: {
    backgroundColor: 'lightgray',
    width: 380,
    height: 80,
    shadowColor: 'black',
    elevation: 8,
    shadowOpacity: 0.8,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 15,

  },
  touch: {
    height: 250,
    flex: 1,
    width: 300,
    borderRadius: 10,
    borderColor: 'gray',

  },
  addButton: {
    backgroundColor: '#2196f3',
    borderRadius: 5,
    paddingVertical: 5,
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 170,
    marginBottom: 10,
    width: 150
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  },



})
export default PodcastMerchant;