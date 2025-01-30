import React from "react";
import { Text, Image, TouchableOpacity, View, StyleSheet, ScrollView, Linking, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const Podcast2Merchant = () => {
  const openLink = () => {
    Linking.openURL('https://www.google.com');
  };

  return (
    <ScrollView style={styles.body}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imagestyle}
          source={require("./photo/jay.jpg")}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Design Inspiration</Text>
        <Text style={styles.subtitle}>by Evan Richards</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          We talked to a few professional designers to find out exactly where they go to get inspired
        </Text>
      </View>
      <TouchableOpacity onPress={openLink} style={styles.linkContainer}>
        <Text style={styles.linkText}>View Link</Text>
      </TouchableOpacity>
      <View style={styles.relatedContainer}>
        <Text style={styles.relatedTitle}>Related Podcasts</Text>
        <Text style={styles.seeAllText}>See all</Text>
      </View>
      <View style={styles.bg}>
        <TouchableOpacity style={styles.touch}>
          <View style={styles.row}>
            <Image
              source={require('./photo/photo44.jpeg')}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>The Power of Habit</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.cardSubtitle}>by Charles Duhigg</Text>
      </View>
      <View style={styles.bg}>
        <TouchableOpacity style={styles.touch}>
          <View style={styles.row}>
            <Image
              source={require('./photo/photo55.jpg')}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>How to Stay Creative</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.cardSubtitle}>by Evan Richards</Text>
      </View>
      <View style={styles.bg}>
        <TouchableOpacity style={styles.touch}>
          <View style={styles.row}>
            <Image
              source={require('./photo/photo1.jpg')}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Improve Your Skills</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.cardSubtitle}>by .......</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flexGrow: 1,
    backgroundColor: 'lightgray',
    padding: 15,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  imagestyle: {
    width: 0.4 * width,
    height: 0.4 * width,
    borderRadius: 0.2 * width,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 0.07 * width,
    color: 'black',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 0.05 * width,
    color: 'lightblack',
  },
  descriptionContainer: {
    marginHorizontal: 15,
    marginBottom: 15,
  },
  description: {
    fontSize: 0.04 * width,
    color: 'lightblack',
    textAlign: 'center',
  },
  linkContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  linkText: {
    color: 'blue',
    fontSize: 0.04 * width,
  },
  relatedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  relatedTitle: {
    fontSize: 0.05 * width,
    color: 'black',
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: 0.04 * width,
    color: 'black',
  },
  bg: {
    backgroundColor: 'white',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderRadius: 15,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.3,
  },
  touch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 0.15 * width,
    height: 0.1 * width,
    borderRadius: 5,
  },
  cardTitle: {
    fontSize: 0.05 * width,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 15,
  },
  cardSubtitle: {
    fontSize: 0.04 * width,
    color: 'gray',
    textAlign: 'right',
    marginTop: 5,
  },
});

export default Podcast2Merchant;
