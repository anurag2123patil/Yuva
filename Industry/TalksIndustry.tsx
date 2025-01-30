import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Get the width and height of the device
const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

const TalkIndustry = () => {
    const navigation = useNavigation();

    return (
        <ScrollView>
            <View style={styles.section}>
                <Text style={styles.headerTitle}>Talks</Text>
                <Text style={styles.connectText}>Let's connect!</Text>
                <Text style={styles.sectionTitle}>Trending</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Talks2indus')}>
                    <View style={styles.trendingItem}>
                        <Image
                            source={require('./photo/trending.jpg')}
                            style={styles.trendingImage}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Top Speakers</Text>
                <View style={styles.speakerRow}>
                    {["shiv-khera", "priya-kumar", "neeraj-malik", "neha-sonar"].map((speaker, index) => (
                        <TouchableOpacity key={speaker} onPress={() => navigation.navigate('Talks2indus')}>
                            <View style={styles.speakerItem}>
                                <Image
                                    source={require('./photo/neera.jpg')} // replace with actual images per speaker
                                    style={styles.speakerImage}
                                />
                                <Text style={styles.speakerName}>{speaker.split('-')[0].charAt(0).toUpperCase() + speaker.split('-')[0].slice(1)}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Newest Talks</Text>
                <View style={styles.talkRow}>
                    <TouchableOpacity onPress={() => navigation.navigate('Talks2indus')}>
                        <View style={styles.talkItem}>
                            <Image
                                source={require('./photo/trending.jpg')}
                                style={styles.talkImage}
                            />
                            <Text style={styles.talkTitle}>How you could see inside your body with a micro-robot.</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.talkRow}>
                    <TouchableOpacity onPress={() => navigation.navigate('Talks2indus')}>
                        <View style={styles.talkItem}>
                            <Image
                                source={require('./photo/trending.jpg')}
                                style={styles.talkImage}
                            />
                            <Text style={styles.talkTitle}>The truth about unwanted arousal broken at last.</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    section: {
        padding: deviceWidth * 0.05,
        marginTop: deviceHeight * 0.01,
    },
    headerTitle: {
        fontSize: deviceWidth * 0.07, // Adjust font size based on screen width
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    connectText: {
        color: 'gray',
        fontWeight: 'bold',
        textAlign: 'right',
        padding: deviceHeight * 0.01,
    },
    sectionTitle: {
        fontSize: deviceWidth * 0.05, // Font size adjusts to screen width
        fontWeight: 'bold',
        marginBottom: deviceHeight * 0.01,
        marginTop: deviceHeight * 0.01,
        color: 'black',
    },
    trendingItem: {
        marginBottom: deviceHeight * 0.02,
        padding: deviceWidth * 0.03,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        elevation: 8,
        shadowOpacity: 0.5,
        shadowColor: '#000',
    },
    trendingImage: {
        width: '100%',
        height: deviceHeight * 0.25, // Image height scales with device height
        resizeMode: 'cover',
        borderRadius: 10,
    },
    speakerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    speakerItem: {
        flex: 1,
        alignItems: 'center',
        marginBottom: deviceHeight * 0.02,
    },
    speakerImage: {
        width: deviceWidth * 0.2,
        height: deviceWidth * 0.2, // Make circular images
        borderRadius: deviceWidth * 0.1,
        marginBottom: deviceHeight * 0.01,
    },
    speakerName: {
        fontSize: deviceWidth * 0.04,
        fontWeight: 'bold',
    },
    talkRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    talkItem: {
        flex: 1,
        marginBottom: deviceHeight * 0.02,
        padding: deviceWidth * 0.03,
        // marginBottom: deviceHeight * 0.02,
        // padding: deviceWidth * 0.03,
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        elevation: 8,
        shadowOpacity: 0.8,
        shadowColor: 'black',
    },
    talkImage: {
        width: '100%',
        height: deviceHeight * 0.2,
        resizeMode: 'cover',
        borderRadius: 5,
        shadowOpacity: 0.8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
    },
    talkTitle: {
        fontSize: deviceWidth * 0.04,
        fontWeight: 'bold',
        marginTop: deviceHeight * 0.01,
        width:320
    },
});

export default TalkIndustry;
