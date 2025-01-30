//student job more detail 


import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';

import { useNavigation } from '@react-navigation/native';

const Jobmore = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Backend Developer(Node Js)</Text>
        <Text style={styles.company}>The Innovative Solutions</Text>
        <Text style={styles.description}>
          Convert your PDF to WORD documents with incredible accuracy.Convert your PDF to WORD documents with incredible accuracy.Convert your PDF to WORD documents with incredible accuracy.Convert your PDF to WORD documents with incredible accuracy.
        </Text>

        <View style={styles.detailRow}>
          <Text style={styles.detailTitle}>Last Date To Apply:</Text>
          <Text style={styles.detailText}>2024-03-01</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailTitle}>Mode:</Text>
          <Text style={styles.detailText}>Offline</Text>
        </View>


        <View style={styles.detailRow}>
          <Text style={styles.detailTitle}>No Of Positions:</Text>
          <Text style={styles.detailText}>10</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailTitle}>Experience:</Text>
          <Text style={styles.detailText}>6 yrs</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailTitle}>Location:</Text>
          <TouchableOpacity>
            <Text style={styles.link}>View Location</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.aboutSection}>
          <Text style={styles.subtitle}>About The Innovative Solutions</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Visit Website</Text>
          </TouchableOpacity>
          <Text style={styles.skillsTitle}>Skills</Text>
          <Text style={styles.skillsText}>
            React Js, Bootstrap, HTML, CSS
          </Text>
        </View>

        <TouchableOpacity
                   onPress={() => navigation.navigate('JobApply')}> 
                   <View style={{ height: 50, marginTop: 20, marginLeft: 75 }}>
                        <LinearGradient colors={['#8B41A2', '#983F7F', '#AF3B52', '#BD3633']}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.gradient} >
                            <Text style={styles.buttonText} >Apply Now</Text>
                        </LinearGradient>
                    </View>
                   </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    elevation: 3,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  company: {
    fontSize: 18,
    color: '#888',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  detailTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  detailText: {
    fontSize: 16,
  },
  link: {
    color: '#1E90FF',
    fontSize: 16,
  },
  aboutSection: {
    marginTop: 24,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  skillsTitle: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: 'bold',
  },
  skillsText: {
    fontSize: 16,
    marginTop: 4,
  },
  applyButton: {
    marginTop: 16,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#8B41A0',
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',

},
gradient: {
    // flex: 1,
    // paddingLeft: 15,
    // paddingRight: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    // marginTop: 5,
    // marginBottom: 50
},
});

export default Jobmore;