import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const News2Merchant = () => {
  return (
    <ScrollView>
      {/* <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>News Feed</Text>
        </View> */}
        <View style={styles.content}>
          <Text style={styles.title}>Majority of Indian employers plans to add staff in first six months of FY25: Survey.</Text>
          <Text style={styles.time}> 2:25AM - Barka Dutt </Text>
          <Text style={styles.body}>Five key skills that will help you score a job in the Blogging industry: Engaging, conversational writing skills Good computer, internet and search engine skills Great research skills Good marketing ability.</Text>
          <Image source={require('./photo/trending.jpg')} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Supreme Court verdict on Arvind Kejriwal's plea against ED arrest tomorrow</Text>
          <Text style={styles.time}>4:55PM - India Today News Desk</Text>
          <Text style={styles.body}>Five key skills that will help you score a job in the Blogging industry: Engaging, conversational writing skills Good computer, internet and search engine skills Great research skills Good marketing ability.</Text>
          <Image source={require('./photo/trending.jpg')} style={styles.image} />
        </View>
      {/* </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    backgroundColor: '#333',
    padding: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  time: {
    fontSize: 14,
    marginBottom: 10,
  },
  body: {
    fontSize: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 15,
  },
});

export default News2Merchant;