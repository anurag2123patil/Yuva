import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const Talks = () => {
    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.section}>
                <Text style={styles.headerTitle}>Talks</Text>
                <Text style={styles.connectText}>Let's connect!</Text>
                <Text style={styles.sectionTitle}>Trending</Text>
                <View style={styles.trendingItem}>
                    <Image
                        source={require('./photo/trending.jpg')}
                        style={styles.trendingImage}
                    />
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Top Speakers</Text>
                <View style={styles.speakerRow}>
                    {[
                        { name: 'Shiv ', img: require('./photo/neera.jpg') },
                        { name: 'Priya ', img: require('./photo/pp.jpg') },
                        { name: 'Neeraj', img: require('./photo/neeraj.jpg') },
                        { name: 'Neha ', img: require('./photo/pp.jpg') }
                    ].map((speaker, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => navigation.navigate('Talks2')}
                        >
                            <View style={styles.speakerItem}>
                                <Image
                                    source={speaker.img}
                                    style={styles.speakerImage}
                                />
                                <Text style={styles.speakerName}>{speaker.name}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Newest Talks</Text>
                <View style={styles.talkRow}>
                    {[
                        { title: 'How you could see inside your body with a micro-robot.', img: require('./photo/talk2.jpg') },
                        { title: 'The truth about unwanted arousal broken at last.', img: require('./photo/talk3.jpg') }
                    ].map((talk, index) => (
                        <View style={styles.talkItem} key={index}>
                            <Image
                                source={talk.img}
                                style={styles.talkImage}
                            />
                            <Text style={styles.talkTitle}>{talk.title}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    headerTitle: {
        fontSize: 0.07 * width, // Responsive font size
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginVertical: 10,
    },
    connectText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 10,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 0.05 * width, // Responsive font size
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
    },
    trendingItem: {
        marginBottom: 20,
    },
    trendingImage: {
        width: '100%',
        height: 0.3 * height, // Responsive height
        resizeMode: 'cover',
        borderRadius: 10,
    },
    speakerRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    speakerItem: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 20,
        maxWidth: '45%', // Responsive width
    },
    speakerImage: {
        width: 0.2 * width, // Responsive width
        height: 0.2 * width, // Responsive height
        borderRadius: 0.1 * width, // Responsive border radius
        marginBottom: 5,
    },
    speakerName: {
        fontSize: 0.04 * width, // Responsive font size
        fontWeight: 'bold',
        color: 'black',
    },
    talkRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    talkItem: {
        flex: 1,
        marginBottom: 20,
        maxWidth: '45%', // Responsive width
        marginRight: 10, // Space between items
    },
    talkImage: {
        width: '100%',
        height: 0.2 * height, // Responsive height
        resizeMode: 'cover',
        borderRadius: 10,
    },
    talkTitle: {
        fontSize: 0.04 * width, // Responsive font size
        fontWeight: 'bold',
        color: 'black',
        marginTop: 5,
    },
});

export default Talks;
