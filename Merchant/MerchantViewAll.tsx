import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const MerchantCard = ({ merchant }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri:  'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/7JIDW2CFLJLPZI5CZCK4S3VZBE.jpg'}} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{merchant.name}</Text>
        <Text style={styles.location}>
          <Image style={styles.locationIcon} source={{uri:'location.png'}} /> {merchant.location}
        </Text>
        <Text style={styles.reviews}>
          {Array(5).fill('').map((_, index) => (
            <Image style={styles.starIcon} source={{uri:'star.png'}} key={index} />
          ))} {merchant.reviews} reviews
        </Text>
        <View style={styles.verification}>
          <Image style={styles.checkmarkIcon} source={{uri:'checkmark.png'}} />
          <Text style={styles.verifiedText}>Verified</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.button, styles.callButton]}>
            <Text style={styles.buttonText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.directionButton]}>
            <Text style={styles.buttonText}>Direction</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.detailsButton]}>
            <Text style={styles.buttonText}>Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const MerchantViewAll = () => {
  const merchants = [
    {
      name: 'Adaani Industry',
      location: 'Nashik',
      reviews: 120,
      image: 'https://your-image-url.com/adani.png', 
    },
    {
      name: 'Palpaani Industry',
      location: 'Nashik',
      reviews: 95,
      image: 'https://your-image-url.com/palpaani.png', 
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://your-logo-url.com/logo.png' }} style={styles.headerLogo} />
        <Text style={styles.headerText}>Search Anything</Text>
        <Image source={{ uri: 'https://your-profile-url.com/profile.png' }} style={styles.profileIcon} />
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity>
          <Image style={styles.filterIcon} source={{ uri: 'filter.png' }} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {merchants.map((merchant, index) => (
          <MerchantCard key={index} merchant={merchant} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  headerLogo: {
    width: width * 0.1, // Responsive width
    height: width * 0.1, // Responsive height
  },
  headerText: {
    fontSize: width * 0.05, // Responsive font size
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
    marginRight: width * 0.1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderWidth: 1,
    width: width * 0.9, // Responsive width
    marginLeft: 10,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 5,
  },
  filterIcon: {
    width: width * 0.05,
    height: width * 0.05,
    marginRight: 5,
  },
  card: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  image: {
    width: width * 0.95, // Responsive image width
    height: width * 0.55, // Responsive image height
  },
  cardContent: {
    padding: 15,
  },
  title: {
    fontSize: width * 0.045, // Responsive font size
    fontWeight: 'bold',
    marginBottom: 5,
  },
  location: {
    fontSize: width * 0.035,
    color: '#555',
  },
  locationIcon: {
    width: width * 0.05,
    height: width * 0.05,
    marginRight: 5,
  },
  starIcon: {
    width: width * 0.05,
    height: width * 0.05,
    marginRight: 5,
  },
  checkmarkIcon: {
    width: width * 0.05,
    height: width * 0.05,
    marginRight: 5,
  },
  reviews: {
    fontSize: width * 0.035,
    color: '#555',
    marginVertical: 5,
  },
  verification: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  verifiedText: {
    marginLeft: 5,
    color: 'blue',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  callButton: {
    backgroundColor: 'red',
  },
  directionButton: {
    backgroundColor: '#ff69b4',
  },
  detailsButton: {
    backgroundColor: '#800080',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MerchantViewAll;
