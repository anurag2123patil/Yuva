import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Internship_Application = () => {
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>Internship Application</Text>
                    <View style={styles.card}>
                        <View style={styles.profile}>
                            <Image source={require('./photo/user.png')} style={styles.profileImage} />
                            <Text style={styles.cardTitle}>Software Development</Text>
                            <Text style={styles.cardSubtitle}>MOHINI PAWAR</Text>
                            <Text style={styles.cardSubtitle}>UI/UX Developer</Text>
                            <Text style={styles.cardText}>
                                Mention in detail what relevant skill or past
                                experience you have for this internship.
                            </Text>
                            <Text style={styles.cardText}>
                                Yes, I am available to join immediately
                            </Text>
                            <View style={styles.contactInfo}>
                                <Text style={styles.contactText}>7887539380</Text>
                            </View>
                            <View style={styles.contactInfo}>
                                <Text style={styles.contactText}>xyz@gmail.com</Text>
                            </View>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>View Resume</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Duplicate card content */}
                <View style={styles.content}>
                    <View style={styles.card}>
                        <View style={styles.profile}>
                            <Image source={require('./photo/user.png')} style={styles.profileImage} />
                            <Text style={styles.cardTitle}>Software Development</Text>
                            <Text style={styles.cardSubtitle}>MOHINI PAWAR</Text>
                            <Text style={styles.cardSubtitle}>UI/UX Developer</Text>
                            <Text style={styles.cardText}>
                                Mention in detail what relevant skill or past
                                experience you have for this internship.
                            </Text>
                            <Text style={styles.cardText}>
                                Yes, I am available to join immediately
                            </Text>
                            <View style={styles.contactInfo}>
                                <Text style={styles.contactText}>7887539380</Text>
                            </View>
                            <View style={styles.contactInfo}>
                                <Text style={styles.contactText}>xyz@gmail.com</Text>
                            </View>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>View Resume</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.content}>
                    <View style={styles.card}>
                        <View style={styles.profile}>
                            <Image source={require('./photo/user.png')} style={styles.profileImage} />
                            <Text style={styles.cardTitle}>Software Development</Text>
                            <Text style={styles.cardSubtitle}>MOHINI PAWAR</Text>
                            <Text style={styles.cardSubtitle}>UI/UX Developer</Text>
                            <Text style={styles.cardText}>
                                Mention in detail what relevant skill or past
                                experience you have for this internship.
                            </Text>
                            <Text style={styles.cardText}>
                                Yes, I am available to join immediately
                            </Text>
                            <View style={styles.contactInfo}>
                                <Text style={styles.contactText}>7887539380</Text>
                            </View>
                            <View style={styles.contactInfo}>
                                <Text style={styles.contactText}>xyz@gmail.com</Text>
                            </View>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>View Resume</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    content: {
        padding: width * 0.05, // 5% padding
    },
    title: {
        fontSize: width * 0.06, // responsive title size
        fontWeight: 'bold',
        marginBottom: width * 0.05, // responsive margin
    },
    card: {
        backgroundColor: '#fff',
        padding: width * 0.05, // responsive padding
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardTitle: {
        fontSize: width * 0.045, // responsive text size
        fontWeight: 'bold',
        marginBottom: width * 0.02,
    },
    cardSubtitle: {
        fontSize: width * 0.04, // responsive text size
        marginBottom: width * 0.02,
    },
    cardText: {
        fontSize: width * 0.035, // responsive text size
        marginBottom: width * 0.02,
    },
    contactInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: width * 0.02,
    },
    contactText: {
        fontSize: width * 0.035, // responsive text size
    },
    button: {
        backgroundColor: '#3f51b5',
        padding: width * 0.04, // responsive padding
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: width * 0.04, // responsive text size
        fontWeight: 'bold',
    },
    profile: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: width * 0.04, // responsive padding
        marginBottom: width * 0.05,
    },
    profileImage: {
        width: width * 0.3, // responsive width
        height: width * 0.3, // responsive height
        borderRadius: (width * 0.3) / 2, // responsive border radius
        marginBottom: width * 0.04,
    },
});

export default Internship_Application