import React from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const BlogMerchant = () => {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.main}>
            <View style={styles.center}>
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
                        <TouchableOpacity style={styles.blogButton}
                         onPress={() => navigation.navigate('Blog2Merchant')}>
                            <Image
                                source={require('./photo/blog1.png')}
                                style={styles.blogImage}
                            />
                            <Text style={styles.blogText}>How to get an Internship at Google:</Text>
                            <Text style={styles.font}>Applying for an internship at Google can be a game-changer for your career. Google offers a variety of internships that provide hands-on experience,</Text>
                            <View style={styles.dateContainer}>
                                <Text style={styles.dateText}>18.03.24</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.blogContainer}>
                    <View style={styles.blogWrap}>
                        <TouchableOpacity style={styles.blogButton}
                         onPress={() => navigation.navigate('Blog2Merchant')}>
                            <Image
                                source={require('./photo/blog2.png')}
                                style={styles.blogImage}
                            />
                            <Text style={styles.blogText}>How to get a Job at Google:</Text>
                            <Text style={styles.font}>Engaging, conversational writing skills Good computer, internet and search engine skills Great research skills Good marketing ability A strong understanding of your blog topic/s Interview and Job Hunting tips.</Text>
                            <View style={styles.dateContainer}>
                                <Text style={styles.dateText}>12.08.24</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* <View style={styles.center}>
             <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('AddblogIndustry')} >
               <Text style={styles.btnText}>+ Add Blogs</Text>
             </TouchableOpacity>
            </View> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingHorizontal: width * 0.05, // 5% padding on both sides
    },
    center: {
        justifyContent: "center",
        alignItems: "center",
    },
    textBox: {
        padding: height * 0.05, // 5% of screen height
        alignItems: 'center',
    },
    text: {
        fontSize: width * 0.07, // 7% of screen width
        color: '#000',
        fontWeight: 'bold',
        shadowColor: '#000',
        elevation: 6,
        shadowOpacity: 0.8,
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        paddingHorizontal: width * 0.02, // 2% of screen width
        backgroundColor: '#fff',
        marginTop: height * 0.02, // 2% of screen height
    },
    input: {
        flex: 1,
        paddingLeft: width * 0.1, // 10% of screen width
    },
    blogContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: height * 0.02, // 2% of screen height
    },
    blogWrap: {
        width: width * 0.9, // 90% of screen width
        marginTop: height * 0.01, // 1% of screen height
        backgroundColor: '#f4f4f4',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 2,
        padding: width * 0.02, // 2% of screen width
    },
    blogButton: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    blogImage: {
        height: height * 0.22, // 22% of screen height
        width: '100%',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    blogText: {
        marginVertical: height * 0.01, // 1% of screen height
        color: 'black',
        fontSize: width * 0.04, // 4% of screen width
        fontFamily: 'LuxuriousRoman-Regular',
    },
    font: {
        marginVertical: height * 0.01, // 1% of screen height
        color: 'black',
        marginBottom: height * 0.01, // 1% of screen height
    },
    dateContainer: {
        backgroundColor: 'white',
        margin: width * 0.025, // 2.5% of screen width
        height: height * 0.025, // 2.5% of screen height
        width: width * 0.25, // 25% of screen width
    },
    dateText: {
        fontSize: width * 0.03, // 3% of screen width
        textAlign: 'center',
    },
    btn: {
        backgroundColor: '#6398FF',
        borderRadius: 5,
        width: width * 0.4, // 40% of screen width
        height: height * 0.05, // 5% of screen height
        marginBottom: height * 0.05, // 5% of screen height
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: width * 0.05, // 5% of screen width
    }
});

export default BlogMerchant;
