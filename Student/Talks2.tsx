import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, Dimensions, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');

const Talks2 = () => {
  const [play, setPlaying] = useState(false);

  const handlePlayPause = () => { setPlaying(!play); };
  const link = () => {
    Linking.openURL('https://www.youtube.com');
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.backButton}>
        <Text style={styles.backText}>DETAILS</Text>
      </View>
      <View style={styles.neha}>
        <View style={styles.content}>
          <Image source={require('./photo/neera.jpg')} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.header}>Think Before Do</Text>
            <Text style={styles.author}>By Tony Robbins</Text>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.playButton} onPress={handlePlayPause}>
                <Text style={styles.playButtonText}>{play ? 'Pause' : 'Listen'}</Text>
              </TouchableOpacity>
              <Text style={styles.time}>25 min</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.boxwrapper}>
        <View style={styles.box}>
          <Text style={styles.description}>
            Life is what distinguishes humans from inorganic matter. Some individuals certainly enjoy free will in Life. Others like slaves and prisoners don't have that privilege. However,
            Life isn't just about living independently in society. It is certainly much more than that.
            Life is a precious gift. It must be handled with care.
            We must be thankful to God for sending us on Earth and giving us such beautiful surroundings to live in. We must also be thankful to God for making us physically and mentally fit to live a wholesome life.
            Life is a culmination of moments, a blend of laughter and tears, victory and challenges. From the moment we take our first breath to the day, we draw our last. It is a journey filled with countless experiences, lessons, and emotions.
            We must be thankful to God for sending us on Earth and giving us such beautiful surroundings to live in. We must also be thankful to God for making us physically and mentally fit to live a wholesome life.
            Life is a culmination of moments, a blend of laughter and tears, victory and challenges. From the moment we take our first breath to the day, we draw our last. It is a journey filled with countless experiences, lessons, and emotions.
          </Text>
        </View>
      </View>
      <View style={styles.dabbawrapper}>
        <View style={styles.dabba}>
          <Text style={styles.refer}>Reference Links:</Text>
          <TouchableOpacity onPress={link}>
            <Text style={styles.link}>https://www.youtube.com</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f2f2f2',
  },
  backButton: {
    padding: width * 0.03,
    marginLeft: width * 0.03,
    marginTop: height * 0.02,
  },
  backText: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    color: 'black'
  },
  content: {
    flexDirection: 'row',
    marginTop: height * 0.02,
    padding: width * 0.03,
  },
  image: {
    width: width * 0.4,
    height: height * 0.2,
    marginRight: width * 0.03,
    borderRadius: width * 0.02,
  },
  info: {
    flex: 1,
  },
  header: {
    color:'black',
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginBottom: height * 0.01,
  },
  author: {
    color:'black',
    fontSize: width * 0.04,
    marginBottom: height * 0.02,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  playButton: {
    backgroundColor: '#e79fc4',
    padding: width * 0.03,
    borderRadius: width * 0.02,
  },
  playButtonText: {
    color: '#fff',
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  time: {
    fontSize: width * 0.04,
    color: 'black',
  },
  description: {
    fontSize: width * 0.04,
    margin: width * 0.03,
    marginTop: height * 0.02,
    lineHeight: width * 0.05,
    textAlign: 'justify',
    color: 'white',
  },
  refer: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    marginBottom: height * 0.01,
    marginHorizontal: width * 0.03,
  },
  link: {
    fontSize: width * 0.04,
    color: 'blue',
    marginHorizontal: width * 0.03,
  },
  boxwrapper: {
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  box: {
    width: width * 0.9,
    backgroundColor: '#630330',
    borderRadius: width * 0.02,
    padding: width * 0.03,
  },
  dabbawrapper: {
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  dabba: {
    borderColor: 'black',
    height: height * 0.1,
    width: width * 0.9,
    borderRadius: width * 0.02,
    marginTop: height * 0.02,
    backgroundColor: "lightgrey",
    elevation: 8,
    shadowOpacity: 0.8,
    shadowColor: 'black',
    padding: width * 0.03,
  },
  neha: {
    backgroundColor: 'lightgrey',
    height: height * 0.3,
    width: width * 0.9,
    marginTop: height * 0.02,
    margin: width * 0.03,
  }
});

export default Talks2;
