import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';

const MerchantEnquireNow = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Adaani Industry</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/7JIDW2CFLJLPZI5CZCK4S3VZBE.jpg' }} 
          style={styles.companyImage}
        />
        <Text style={styles.imageCaption}>My Company is Huge</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.callButton]}>
          <Text style={styles.buttonText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.directionButton]}>
          <Text style={styles.buttonText}>Get Direction</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.enquiryButton]}>
          <Text style={styles.buttonText}>Send Enquiry</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>QUICK INFORMATION</Text>
        <Text style={styles.infoText}>CONTACT: 1234567890</Text>
        <Text style={styles.infoText}>
          EMAIL ID: 
          <Text 
            style={styles.linkText} 
            onPress={() => Linking.openURL('mailto:abcd@gmail.com')}>
            {' '}abcd@gmail.com
          </Text>
        </Text>
        <Text style={styles.infoText}>
          WEBSITE: 
          <Text 
            style={styles.linkText} 
            onPress={() => Linking.openURL('http://www.google.com')}>
            {' '}www.google.com
          </Text>
        </Text>
        <Text style={styles.infoText}>TIMING: 9.00 am to 11.00 pm</Text>
        <Text style={styles.infoText}>0 ★★★★★</Text>
        <Text style={styles.infoText}>1 reviews</Text>
      </View>

      <View style={styles.addressContainer}>
        <Text style={styles.infoText}>ADDRESS: Nashik</Text>
        <Text style={styles.infoText}>
          Google Location: 
          <Text 
            style={styles.linkText} 
            onPress={() => Linking.openURL('https://maps.google.com')}>
            {' '}Go To location
          </Text>
        </Text>
        <TouchableOpacity style={styles.shareContainer}>
          <Text style={styles.shareText}>Share</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.infoText}>
          Please 
          <Text style={styles.linkText}> login </Text> 
          to add ratings and comments.
        </Text>
      </View>

      <View style={styles.commentContainer}>
        <TouchableOpacity style={styles.addCommentButton}>
          <Text style={styles.addCommentText}>Add Comment</Text>
        </TouchableOpacity>
        <Text style={styles.clientCommentsTitle}>Clients Comments :</Text>
        <Text style={styles.clientComment}>dchshdigjdk</Text>
      </View>
    </View>
    </ScrollView>
      );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:10,
    backgroundColor:'#fff',
  },
  header: {
    alignItems:'center',
    marginVertical:10,
  },
  headerText: {
    fontSize: 24,
    fontWeight:'bold',
    color:'black',
  },
  imageContainer: {
    alignItems:'center',
    marginVertical:5,
  },
  companyImage: {
    width:300,
    height:200,
    borderRadius:10,
  },
  imageCaption: {
    marginTop:5,
    fontSize:14,
    color:'gray',
  },
  buttonContainer: {
    flexDirection:'row',
    justifyContent:'space-around',
    marginVertical:10,
  },
  button: {
    flex: 1,
    paddingVertical:10,
    marginHorizontal:5,
    borderRadius:5,
    alignItems:'center',
  },
  callButton: {
    backgroundColor:'#BD3633',
  },
  directionButton: {
    backgroundColor:'#9C27B0',
  },
  enquiryButton: {
    backgroundColor:'#7B1FA2',
  },
  buttonText: {
    color:'#fff',
    fontWeight:'bold',
  },
  infoContainer: {
    paddingVertical: 10,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'black'
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 3,
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  addressContainer: {
    paddingVertical: 10,
  },
  shareContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareText: {
    fontSize: 16,
    color: '#000',
  },
  loginContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  commentContainer: {
    paddingVertical: 10,
  },
  addCommentButton: {
    backgroundColor: '#D32F2F',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  addCommentText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  clientCommentsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  clientComment: {
    fontSize: 14,
    color: '#333',
  },
  navItem: {
    fontSize: 16,
    color: '#333',
  },
});

export default MerchantEnquireNow;