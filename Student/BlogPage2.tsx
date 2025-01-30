import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity,Linking } from 'react-native';
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from 'expo-linear-gradient';


const BlogPage2=()=>{

    const map = () => {
        Linking.openURL('https://www.google.com');
    };

    return(
        <ScrollView>
            
            <View>
            <Text style={styles.blogText}>How to get an Internship at Google:</Text>
            <Text style={{margin:10}}>Date: 07/08/24  </Text>
            </View>
            <View>
                <Text style={{margin:10, color:'black', fontSize:20}}>
                Applying for an internship at Google can be a game-changer for your career. Google offers a variety of internships that provide hands-on experience,
                Applying for an internship at Google can be a game-changer for your career. Google offers a variety of internships that provide hands-on experience,
                Applying for an internship at Google can be a game-changer for your career. Google offers a variety of internships that provide hands-on experience,

                </Text>
                <Image
                                source={require('./photo/blog1.png')}
                                style={styles.blog}
                />
                <TouchableOpacity onPress={map}>
                            <Text style={styles.link}>View More Details</Text>
                </TouchableOpacity>
                        
            </View>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    header:{
        
        height:80
    },
    headerText:{
        color:'white',
        fontSize:30,
        paddingLeft:60,
        paddingTop:10,
        paddingBottom:10
    },
    blogText: {
        margin: 10,
        color: 'black',
        fontSize: 25,
        fontFamily: 'LuxuriousRoman-Regular',

    },
    blog: {
        height: 174,
        width: 350,
        marginLeft:30
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
        textAlign:'center'
    },
   
})

export default BlogPage2;