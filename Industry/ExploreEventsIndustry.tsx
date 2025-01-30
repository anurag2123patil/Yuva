import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Linking, Dimensions} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const data1 = [
  { label: 'Industry', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
];

const data2 = [
  { label: 'This Month', value: '1' },
  { label: 'Last 2 days', value: '2' },
  { label: 'Last Month', value: '3' },
];

const ExploreEventsIndustry = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [value2, setValue2] = useState(null);
  const [isFocus2, setIsFocus2] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) return null;
  };

  const renderLabel2 = () => {
    if (value2 || isFocus2) return null;
  };

  const map = () => {
    Linking.openURL('https://www.google.com');
  };

  return (
    <ScrollView>
      <View style={styles.box}>
        <Text style={styles.text}>DISCOVER EVENTS</Text>
      </View>
      <View>
        <TextInput placeholder="Search" style={styles.search} />
      </View>
      <View style={styles.dropdownContainer}>
        <View style={styles.dropdownWrapper}>
          {renderLabel()}
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={data1}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Industry' : '...'}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>
        <View style={styles.dropdownWrapper}>
          {renderLabel2()}
          <Dropdown
            style={[styles.dropdown, isFocus2 && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={data2}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus2 ? 'Last 2 days' : '...'}
            value={value2}
            onFocus={() => setIsFocus2(true)}
            onBlur={() => setIsFocus2(false)}
            onChange={item => {
              setValue2(item.value);
              setIsFocus2(false);
            }}
          />
        </View>
      </View>

      <View style={styles.exploreEventMainView}>
        <View style={styles.exploreEventMainTouch}>
          <Image
            source={require('./photo/cricket.jpg')}
            style={styles.image}
          />
          <View style={styles.center}>
            <Text style={styles.eventTitle}>Cricket</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Event Description:</Text>
            <Text style={styles.value}>Under 21</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Category:</Text>
            <Text style={styles.value}>Urban</Text>
          </View>
          <View style={styles.row}>
            <Image source={require('./photo/calendar.jpg')} style={styles.icon} />
            <Text style={styles.iconLabel}>Date:</Text>
            <Text>2024-07-29 T 18:30:00</Text>
          </View>
          <View style={styles.row}>
            <Image source={require('./photo/location.png')} style={styles.icon} />
            <Text style={styles.iconLabel}>Venue:</Text>
            <Text>Chin tapak dam dam</Text>
          </View>
          <View style={styles.row}>
            <Image source={require('./photo/clock.png')} style={styles.icon} />
            <Text style={styles.iconLabel}>Time:</Text>
            <Text>7 AM</Text>
          </View>
          <View style={styles.row}>
            <Image source={require('./photo/fees.png')} style={styles.icon} />
            <Text style={styles.iconLabel}>Fees :</Text>
            <Text>300/-</Text>
          </View>
          <View style={styles.row}>
            <Text>Google Map Location:</Text>
            <TouchableOpacity onPress={map}>
              <Text style={styles.link}>View Location</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.center}>
            <TouchableOpacity style={styles.registerButton}>
              <LinearGradient
                colors={['#8B41A2', '#983F7F', '#AF3B52', '#BD3633']}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.gradient}
              >
                <Text style={styles.buttonText}>Register</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Add Events</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.05,
  },
  text: {
    color: 'black',
    fontSize: width * 0.08,
  },
  search: {
    borderWidth: 1,
    borderColor: 'grey',
    fontSize: width * 0.05,
    margin: 10,
    height: 40,
    paddingLeft: 10,
    borderRadius: 10,
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  dropdownWrapper: {
    width: width * 0.45,
  },
  dropdown: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: width * 0.04,
  },
  selectedTextStyle: {
    fontSize: width * 0.04,
  },
  exploreEventMainView: {
    alignItems: 'center',
  },
  exploreEventMainTouch: {
    width: width * 0.95,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 4,
    padding: 10,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: height * 0.25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  center: {
    alignItems: 'center',
  },
  eventTitle: {
    fontSize: width * 0.06,
    color: 'black',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
  },
  label: {
    fontSize: width * 0.05,
    fontWeight: '600',
    color: 'black',
  },
  value: {
    fontSize: width * 0.05,
    color: 'black',
  },
  icon: {
    width: 20,
    height: 20,
  },
  iconLabel: {
    marginLeft: 10,
    fontSize: width * 0.04,
    color: 'black',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
  registerButton: {
    width: width * 0.8,
    height: 50,
  },
  gradient: {
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: width * 0.05,
    color: '#fff',
  },
  addButton: {
    backgroundColor: '#6398FF',
    borderRadius: 5,
    width: width * 0.4,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 30,
    alignSelf: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: width * 0.05,
  },
});

export default ExploreEventsIndustry;