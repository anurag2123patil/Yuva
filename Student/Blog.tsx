import React from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Blogs = () => {
    const navigation = useNavigation(); 
   
    return (
        <ScrollView style={styles.main}>
            <View style={{justifyContent:"center" , alignItems:"center"}}>
                <View style={styles.textBox}>
                    <Text style={styles.text}>Insights from Our Team</Text>
                    <View style={styles.searchBox}>

                        <TextInput
                            style={styles.input}
                            placeholder="Search"
                            
                        />
                    </View>
                </View>
                <View style={styles.blogContainer}>
                    <View style={styles.blogWrap}>
                        <TouchableOpacity style={styles.blog}
                        onPress={()=>navigation.navigate('Blog2')}>
                            <Image
                                source={require('./photo/blog1.png')}
                                style={styles.blog}
                            />
                            <Text style={styles.blogText}>How to get an Internship at Google:</Text>
                            <Text style={styles.font}>Applying for an internship at Google can be a game-changer for your career. Google offers a variety of internships that provide hands-on experience,</Text>
                            <View style={{ backgroundColor: 'white', margin: 10, height: 20, width: 100}}>
                                <Text style={{ marginLeft: 60, fontSize: 10,color:'black' }}>18.03.24</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.blogContainer}>
                    <View style={styles.blogWrap}>
                        <TouchableOpacity style={styles.blog1}
                        onPress={()=>navigation.navigate('Blog2')}>
                            <Image
                                source={require('./photo/blog2.png')}
                                style={styles.blog}
                            />
                            <Text style={styles.blogText}>How to get a Job at Google:</Text>
                            <Text style={styles.font}>Engaging, conversational writing skills Good computer, internet and search engine skills Great       research skills Good marketing ability A strong understanding of your blog topic/s Interview and Job Hunting tips.</Text>
                            <View style={{ backgroundColor: 'white', margin: 10, height: 20, width: 100, flexDirection: 'row' }}>

                                <Text style={{ marginLeft: 60, fontSize: 10, color:'black' }}>12.08.24</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


        </ScrollView>

    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,

    },
    textBox: {
        flex: 1,
        padding: 50,
        alignItems: 'center',

    },
    text: {
        fontSize: 25,
        color: '#000',
        fontWeight: 'bold',
        shadowColor: '#000',
        elevation: 6,
        shadowOpacity: 0.8
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        marginTop: 20,
        margin: 10

    },
    icon: {
        position: 'absolute',
        left: 10,

    },
    input: {
        color:'black',
        flex: 1,
        paddingLeft: 40
    },
    blogContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        // backgroundColor: "red",
        paddingLeft:40,
        paddingRight:40,
        height: 400,

    },
    blogWrap: {
        flex: 1,
        width: 350,
        height: 400,
        marginTop: 5,
        backgroundColor: '#f4f4f4',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 2,
        margin: 30
    },
    blog1: {
        flex: 1,
        width: 350,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'

    },
    blog: {
        height: 174,
        width: 350,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    blogText: {
        margin: 10,
        color: 'black',
        fontSize: 15,
        fontFamily: 'LuxuriousRoman-Regular',

    },
    font: {
        margin: 15,
        color: 'black',
        marginBottom: 5
    },


})

export default Blogs;