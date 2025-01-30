import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TalkMerchant = () => {
    const navigation = useNavigation();
    const display = () =>
    {
    }
    return (
        <ScrollView>
            <View style={styles.section}>
                <Text style={styles.headerTitle}>Talks</Text>
                <Text style={styles.connectText}>Let's connect!</Text>
                <Text style={styles.sectionTitle}>Trending</Text>
                <TouchableOpacity 
                onPress={() => navigation.navigate('Talk2Merchant')}>
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
                    <TouchableOpacity onPress={() => navigation.navigate('Talk2Merchant')}>
                        <View style={styles.speakerItem} key="shiv-khera">
                            <Image
                                source={require('./photo/neera.jpg')}
                                style={styles.speakerImage}
                            />
                            <Text style={styles.speakerName}>Shiv</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Talk2Merchant')}>
                        <View style={styles.speakerItem} key="priya-kumar">
                            <Image
                                source={require('./photo/neeraj.jpg')}
                                style={styles.speakerImage}
                            />
                            <Text style={styles.speakerName}>Priya</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Talk2Merchant')}>
                        <View style={styles.speakerItem} key="neeraj-malik">
                            <Image
                                source={require('./photo/trending.jpg')}
                                style={styles.speakerImage}
                            />
                            <Text style={styles.speakerName}>Neeraj</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Talk2Merchant')}>
                        <View style={styles.speakerItem} key="neha-sonar">
                            <Image
                                source={require('./photo/pp.jpg')}
                                style={styles.speakerImage}
                            />
                            <Text style={styles.speakerName}>Neha</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Newest Talks</Text>
                <View style={styles.talkRow}>
                    <TouchableOpacity>
                        <View style={styles.talkItem} key="micro-robot">
                            <Image
                                source={require('./photo/trending.jpg')}
                                style={styles.talkImage}
                            />
                            <Text style={styles.talkTitle}>How you could see inside your body with a micro-robot.</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.talkRow}>
                    <TouchableOpacity onPress={() => navigation.navigate('Talk2Merchant')}>
                        <View style={styles.talkItem} key="unwanted-arousal">
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
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    connectButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
    },
    connectText: {
        color: 'gray',
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 1,
    },
    section: {
        padding: 1,
        marginTop: 5,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 5,
        paddingTop: 1,
        color: 'black',
        marginLeft:20
    },
    trendingItem: {
        marginBottom: 20,
        padding: 10,
        margin: 0.5,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        elevation: 8,
        shadowOpacity: 0.5,
        shadowColor: '#000',
    },

    trendingImage: {
        width: '100%',
        height: 200,
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
        marginBottom: 20,
    },
    speakerImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 5,
    },
    speakerName: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    talkRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    talkItem: {
        flex: 1,
        marginBottom: 20,
        marginRight: 10,
        padding: 10,
        margin: 0.5,
        marginLeft: 10,
        marginTop: 10,
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        elevation: 8,
        shadowOpacity: 0.8,
        shadowColor: 'black',
        width: 352,
        height: 200,
        shadowOffset:{width:0,height:2},
        shadowRadius: 5,
    },
    talkImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
        borderRadius: 5,
        elevation: 8,
        shadowOpacity: 0.8,
        shadowColor: 'black',
        // width: '100%',
        // height: 200,
        shadowOffset:{width:0,height:2},
        shadowRadius: 5,
        backgroundColor:'pink'
    },
    talkTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5,
    },
    main: {
        flex: 3,
        marginBottom: 30,
        alignItems:'flex-end',
        justifyContent:'flex-end'
    },
});
export default TalkMerchant;
