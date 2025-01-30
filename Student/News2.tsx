import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

// Get device width and height
const { width } = Dimensions.get('window');

const News2 = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>News Feed</Text>
      </View> */}
      <View style={styles.content}>
        <Text style={styles.title}>Majority of Indian employers plan to add staff in first six months of FY25: Survey</Text>
        <Text style={styles.time}>2:25AM - Barka Dutt</Text>
        <Text style={styles.body}>Five key skills that will help you score a job in the Blogging industry: Engaging, conversational writing skills, good computer, internet, and search engine skills, great research skills, and good marketing ability.</Text>
        <Image source={require('./photo/newsp2.jpg')} style={styles.image}/>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Supreme Court verdict on Arvind Kejriwal's plea against ED arrest tomorrow</Text>
        <Text style={styles.time}>4:55PM - India Today News Desk</Text>
        <Text style={styles.body}>Five key skills that will help you score a job in the Blogging industry: Engaging, conversational writing skills, good computer, internet, and search engine skills, great research skills, and good marketing ability.</Text>
        <Image source={require('./photo/newsp.jpg')} style={styles.image}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    backgroundColor: '#333',
    padding: 15,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 0.05 * width, // Responsive font size
    fontWeight: 'bold',
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 0.04 * width, // Responsive font size
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  time: {
    fontSize: 0.03 * width, // Responsive font size
    color: 'black',
    marginBottom: 10,
  },
  body: {
    fontSize: 0.035 * width, // Responsive font size
    color: 'black',
  },
  image: {
    width: '100%',
    height: 0.3 * width, // Responsive height
    marginTop: 15,
  },
});

export default News2;
