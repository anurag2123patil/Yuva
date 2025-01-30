import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const data = [
  { id: '01', statement: 'ENHANCING ONLINE EDUCATION PLATFORM\nDevelop an advanced online education platform that includes interactive video lectures,real-time student-teacher interaction,and AI-based personalized learning paths.', count: 120, share: '' },
  { id: '02', statement: 'SMART WASTE MANAGEMENT SYSTEM\nCreate an IoT-enabled waste management system that can monitor waste levels in bins,optimize collection routes,and provide data analytics for waste management authorities.', count: 156, share: '' },
  { id: '03', statement: 'EFFICIENT WATER DISTRIBUTION SYSTEM\nDesign a smart using IoT and AI to monitor water levels,detect leaks,and ensure equitable distribution of water in urban areas.', count: 120, share: '' },
  { id: '04', statement: 'REAL-TIME AIR QUALITY MONITORING\nDevelop a real-time air quality monitoring system that uses sensors to measure pollution levels and provides data to a central server for analysis and public dissemination', count: 190, share: '' },
  { id: '05', statement: 'BLOCKCHAIN-BASED LAND RECORD MANAGEMENT\nCreate a secure,tamper-proof blockchain-based system for maintaining and updating land records,ensuring transparency and reducing disputes.', count: 110, share: '' },
  { id: '06', statement: 'AI-POWERED CROP DISEASE PREDICTION\nDevelop an AI-based application that can predict crop disease using images captured by farmers,smartphones,and provide preventive measures and treatment suggestions', count: 110, share: '' },
  { id: '07', statement: 'IoT-ENABLED TRAFFIC MANAGEMENT SYSTEM\nDesign an IoT-based traffic management system to monitor and control traffic lights,manage congestion,and provide real-time traffic updates to commuter', count: 220, share: '' },
  { id: '08', statement: 'ATTENDENCE SYSTEM USING FACE RECOGNITION\nBulid an automated attendance system that uses facial recognition technology to mark attendance real-time,ensuring accuracy.', count: 129, share: '' },
];

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const ChallengesIndustry = () => {
  const [industryType, setIndustryType] = useState('All');
  const [category, setCategory] = useState('All');
  const [organization, setOrganization] = useState('All');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>TOTAL STATEMENTS</Text>
      </View>
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={industryType}
          style={styles.picker}
          onValueChange={(itemValue) => setIndustryType(itemValue)}
        >
          <Picker.Item label="Industry" value="All" />
          <Picker.Item label="Type 1" value="type1" />
          <Picker.Item label="Type 2" value="type2" />
        </Picker>
        <Picker
          selectedValue={category}
          style={styles.picker}
          onValueChange={(itemValue) => setCategory(itemValue)}
        >
          <Picker.Item label="Category" value="All" />
          <Picker.Item label="Category 1" value="category1" />
          <Picker.Item label="Category 2" value="category2" />
        </Picker>
        <Picker
          selectedValue={organization}
          style={styles.picker}
          onValueChange={(itemValue) => setOrganization(itemValue)}
        >
          <Picker.Item label="Organization" value="All" />
          <Picker.Item label="Organization 1" value="organization1" />
          <Picker.Item label="Organization 2" value="organization2" />
        </Picker>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={[styles.cell, styles.smallCell]}>
              <Text style={styles.text}>{item.id}</Text>
            </View>
            <View style={[styles.cell, styles.largeCell]}>
              <Text style={styles.text}>{item.statement}</Text>
            </View>
            <View style={[styles.cell, styles.smallCell]}>
              <Text style={styles.text}>{item.count}</Text>
            </View>
            <View style={[styles.cell, styles.smallCell]}>
              <Text style={styles.text}>{item.share}</Text>
            </View>
          </View>
        )}
        ListHeaderComponent={
          <View style={styles.row}>
            <View style={[styles.cell, styles.smallCell]}>
              <Text style={[styles.text, styles.headerTextSmall]}>Sr. No.</Text>
            </View>
            <View style={[styles.cell, styles.largeCell]}>
              <Text style={[styles.text, styles.headerTextLarge]}>Problem Statement</Text>
            </View>
            <View style={[styles.cell, styles.smallCell]}>
              <Text style={[styles.text, styles.headerTextSmall]}>Count</Text>
            </View>
            <View style={[styles.cell, styles.smallCell]}>
              <Text style={[styles.text, styles.headerTextSmall]}>Share</Text>
            </View>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: screenWidth * 0.025,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#0D0C44',
    padding: screenWidth * 0.025,
  },
  headerText: {
    color: 'white',
    fontSize: screenWidth * 0.045,
    textAlign: 'left',
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: screenHeight * 0.02,
  },
  picker: {
    flex: 1,
    height: screenHeight * 0.05,
    fontSize: screenWidth * 0.035,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: screenWidth * 0.01,
  },
  row: {
    flexDirection: 'row',
    marginBottom: screenHeight * 0.015,
  },
  cell: {
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    padding: screenWidth * 0.02,
  },
  smallCell: {
    flex: 1,
  },
  largeCell: {
    flex: 3,
  },
  text: {
    textAlign: 'center',
    fontSize: screenWidth * 0.035,
  },
  headerTextSmall: {
    fontSize: screenWidth * 0.04,
    fontWeight: 'bold',
  },
  headerTextLarge: {
    fontSize: screenWidth * 0.045,
    fontWeight: 'bold',
  },
});

export default ChallengesIndustry;
