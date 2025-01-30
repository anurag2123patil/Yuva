import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

const Blog2Industry = () => {

    const map = () => {
        Linking.openURL('https://www.google.com');
    };

    return (
        <ScrollView>
            <View style={styles.header}>
                <LinearGradient colors={['#8B41A2', '#983F7F', '#AF3B52', '#BD3633']}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}>
                    <Text style={styles.headerText}>Blogs Feed</Text>
                </LinearGradient>
            </View>
            <View>
                <Text style={styles.blogText}>How to get an Internship at Google:</Text>
                <Text style={styles.dateText}>Date: 07/08/24</Text>
            </View>
            <View>
                <Text style={styles.blogDescription}>
                    Applying for an internship at Google can be a game-changer for your career. Google offers a variety of internships that provide hands-on experience,
                    Applying for an internship at Google can be a game-changer for your career. Google offers a variety of internships that provide hands-on experience,
                    Applying for an internship at Google can be a game-changer for your career. Google offers a variety of internships that provide hands-on experience,
                </Text>
                <Image
                    source={require('./photo/blog1.png')}
                    style={styles.blogImage}
                />
                <TouchableOpacity onPress={map}>
                    <Text style={styles.link}>View More Details</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    header: {
        height: height * 0.1, // 10% of screen height
    },
    headerText: {
        color: 'white',
        fontSize: width * 0.08, // 8% of screen width
        paddingLeft: width * 0.15, // 15% of screen width
        paddingTop: height * 0.015, // 1.5% of screen height
        paddingBottom: height * 0.015, // 1.5% of screen height
    },
    blogText: {
        margin: width * 0.025, // 2.5% of screen width
        color: 'black',
        fontSize: width * 0.065, // 6.5% of screen width
        fontFamily: 'LuxuriousRoman-Regular',
    },
    dateText: {
        margin: width * 0.025, // 2.5% of screen width
        fontSize: width * 0.035, // 3.5% of screen width
    },
    blogDescription: {
        margin: width * 0.025, // 2.5% of screen width
        color: 'black',
        fontSize: width * 0.05, // 5% of screen width
    },
    blogImage: {
        height: height * 0.22, // 22% of screen height
        width: width * 0.9, // 90% of screen width
        marginLeft: width * 0.05, // 5% of screen width
        marginTop: height * 0.02, // 2% of screen height
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
        textAlign: 'center',
        marginTop: height * 0.02, // 2% of screen height
        fontSize: width * 0.04, // 4% of screen width
    },
});

export default Blog2Industry;
