import React, { useState } from 'react';
import { View, Text,Image,  StyleSheet,ScrollView,TextInput,Button } from 'react-native';

const GetInTouchIndustry = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [sub, setSub] = useState('');
    const [msg, setMsg] = useState('');
    const display = () => {
      console.warn("Send message Successfully")
    }
  
    return (
      <ScrollView>
        <View style={styles.Get}><Text style={styles.Text}>GET IN TOUCH</Text></View>
        <TextInput style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Name"
        />
        <TextInput style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email Id"
        />
        <TextInput style={styles.input}
          value={sub}
          onChangeText={(text) => setSub(text)}
          placeholder="Subject "
        />
  
        <TextInput style={styles.msgbox}
          value={msg}
          onChangeText={(text) => setMsg(text)}
          placeholder="Your Message"
        >
        </TextInput>
  
        <View style={styles.main}>
          <Button title='Send Message' onPress={display}></Button>
        </View>
  
  
        <View style={{ flexDirection: 'row', height: 50 }}>
          <View style={styles.circle}>
            <Image
              style={styles.imageStyle}
              source={require("./photo/callp.png")}
            />
          </View>
          <Text style={{ fontSize: 25, marginTop: 5 }}>Call us on</Text>
        </View>
  
        <View style={styles.deco}>
          <Text style={{ paddingTop: 1 }}>+91 8668903030</Text>
        </View>
  
  
        <View style={{ flexDirection: 'row', height: 50 }}>
          <View style={styles.circle}>
            <Image
              style={styles.imageStyle}
              source={require("./photo/callp.png")}
            />
          </View>
          <Text style={{ fontSize: 25, marginTop: 5 }}>Email</Text>
        </View>
        <View style={styles.deco}>
          <Text style={{ paddingTop: 1 }}>info@gmail.com</Text>
        </View>
  
  
        <View style={{ flexDirection: 'row', height: 50 }}>
          <View style={styles.circle}>
            <Image
              style={styles.imageStyle}
              source={require("./photo/callp.png")}
            />
          </View>
          <Text style={{ fontSize: 25, marginTop: 5 }}>Our Address</Text>
        </View>
        <View style={styles.deco}>
          <Text style={{ paddingTop: 1 }}>3481 metrose Place,Beverly hills</Text>
        </View>
  
  
        <View style={{ flexDirection: 'row', height: 50 }}>
          <View style={styles.circle}>
            <Image
              style={styles.imageStyle}
              source={require("./photo/callp.png")}
            />
          </View>
          <Text style={{ fontSize: 25, marginTop: 5 }}>Work Time</Text>
        </View>
        <View style={styles.deco}>
          <Text style={{ paddingTop: 1 }}>Mon-fri : 8:00-6:00</Text>
          <Text style={{ paddingTop: 1 }}>Sat-10:00-14:00</Text>
        </View>
  
  
      </ScrollView >
    );
  };

const styles = StyleSheet.create({
    Text: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        shadowColor: 'black',
        elevation: 8,
        shadowOpacity: 0.8
      },
      Get: {
        alignItems: 'center',
        marginTop: 60
      },
    
      input: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 30,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
      },
      msgbox: {
        marginLeft: 30,
        marginRight: 30,
        marginTop: 30,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        height: 100,
        marginBottom: 30
      },
      main: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
      },
      circle:
      {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: 'purple',
        marginLeft: 30,
        marginRight: 15,
        paddingLeft: 10,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      imageStyle: {
        width: 40,
        height: 40,
        marginLeft: 0.1,
        marginRight: 0.1,
        paddingLeft: 0.1,
        paddingRight: 0.1,
        marginBottom: 0.1
      },
      deco: {
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 40,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        padding: 10,
        elevation: 8,
        shadowOpacity: 0.8,
        shadowColor: 'black',
        lineHeight: 10
      }

});

export default GetInTouchIndustry;
