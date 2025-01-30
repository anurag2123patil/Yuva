import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from '@react-navigation/native';


const internships = [
  {
    id: 1,
    company: 'Innovative',
    status: 'Active',
    location: 'Nashik',
    openings: 'tbw',
    mode: 'offline',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMTBKTuOb0kJg1gpP03v59mljugWd0AOhmKg&s',
  },
  {
    id: 2,
    company: 'BOAT',
    status: 'Active',
    location: 'Nashik',
    openings: 'tbw',
    mode: 'offline',
    image: 'data:image/jpeg;base64,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',
  },
];

const InternshipCard = ({ internship }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.companyName}>Internship company</Text>
        <TouchableOpacity>
          <Image style={styles.bookmarkIcon} source={{ uri: 'bookmark.png' }} />
        </TouchableOpacity>
      </View>
      <Image style={styles.companyImage} source={{ uri: internship.image }} />
      <Text style={styles.status}>Status: <Text style={styles.activeStatus}>{internship.status}</Text></Text>
      <Text style={styles.openings}>Internship Openings: {internship.openings}</Text>
      <View style={styles.locationContainer}>
        {/* <Image style={styles.locationIcon} source={{ uri: 'location.png' }} /> */}
        <Text style={styles.locationText}>{internship.location}</Text>
      </View>
      <View style={styles.modeContainer}>
        <Text style={styles.modeText}>{internship.mode} Mode</Text>
        <TextInput style={styles.shareCountInput} keyboardType="numeric" placeholder="4" />
      </View>
      <View  style={{justifyContent:"center",alignItems:"center"}}>
        <TouchableOpacity onPress={() => navigation.navigate('InternMoreMerchant')}>
          <LinearGradient colors={['#8B41A2', '#983F7F', '#AF3B52', '#BD3633']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.gradient}>
            <Text style={styles.moreDetailsText}>More Details</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const InternshipMerchant = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>INTERNSHIPS</Text>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search" />
          <TouchableOpacity>
            <Image style={styles.filterIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        {internships.map(internship => (
          <InternshipCard key={internship.id} internship={internship} />
        ))}
      </ScrollView>
      {/* <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddInternIndustry')}>
        <Text style={styles.addButtonText}>+ Add</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 10,
  },
  header: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
    shadowColor: 'black',
    elevation: 2,
    shadowOpacity: 0.7,


  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 40,
    marginBottom: 10,
    borderWidth: 1,
    width: 300,
    marginLeft: 20,
    marginTop: 10
  },
  searchInput: {
    flex: 1,
    paddingVertical: 5,

  },
  filterIcon: {
    width: 20,
    height: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  bookmarkIcon: {
    width: 20,
    height: 20,
  },
  companyImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginVertical: 10,
  },
  status: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  activeStatus: {
    color: 'black',
    backgroundColor: '#FDC107',
  },
  openings: {
    fontSize: 14,
    marginBottom: 10,
    color: 'black'
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  locationText: {
    fontSize: 14,
    color: 'black'
  },
  modeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  modeText: {
    fontSize: 14,
    color: 'black',
    borderColor: 'skyblue',
    borderRadius: 4,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 150,
    textAlign: 'center',
  },
  shareCountInput: {
    fontSize: 14,
    color: 'black',
    borderWidth: 1,
    borderColor: 'skyblue',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 150,
    height: 30,
    textAlign: 'center',
  },

  moreDetailsText: {
    color: '#fff',
    fontSize: 18,
  },
  addButton: {
    backgroundColor: '#2196f3',
    borderRadius: 5,
    paddingVertical: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  gradient: {
    height: 40,
    width: 180,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default InternshipMerchant;