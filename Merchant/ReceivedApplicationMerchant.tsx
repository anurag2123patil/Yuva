import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window'); // Get the screen width for responsiveness

const ReceivedApplicationMerchant = () => {
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>Received Application</Text>
                    <View style={styles.card}>
                        <View style={styles.profile}>
                            <Image source={require('./photo/user.png')} style={styles.profileImage} />
                            <Text style={styles.cardTitle}>Software Development</Text>
                            <Text style={styles.cardSubtitle}>MOHINI PAWAR</Text>
                            <Text style={styles.cardSubtitle}>UI/UX Developer</Text>
                            <Text style={styles.cardText}>
                                Mention in detail what relevant skill or past experience you have for this internship.
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

                    <View style={styles.card}>
                        <View style={styles.profile}>
                            <Image source={require('./photo/user.png')} style={styles.profileImage} />
                            <Text style={styles.cardTitle}>Software Development</Text>
                            <Text style={styles.cardSubtitle}>MOHINI PAWAR</Text>
                            <Text style={styles.cardSubtitle}>UI/UX Developer</Text>
                            <Text style={styles.cardText}>
                                Mention in detail what relevant skill or past experience you have for this internship.
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
        padding: width * 0.05, // Responsive padding based on screen width
    },
    title: {
        fontSize: width * 0.06, // Responsive font size
        fontWeight: 'bold',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#fff',
        padding: width * 0.05, // Responsive padding
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 20,
    },
    cardTitle: {
        fontSize: width * 0.045, // Responsive font size
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardSubtitle: {
        fontSize: width * 0.04, // Responsive font size
        marginBottom: 10,
    },
    cardText: {
        fontSize: width * 0.035, // Responsive font size
        marginBottom: 10,
    },
    contactInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    contactText: {
        fontSize: width * 0.035, // Responsive font size
    },
    button: {
        backgroundColor: '#3f51b5',
        padding: width * 0.04, // Responsive button padding
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: width * 0.04, // Responsive font size for button
        fontWeight: 'bold',
    },
    profile: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: width * 0.04, // Responsive padding
        marginBottom: 20,
    },
    profileImage: {
        width: width * 0.25, // Responsive image size
        height: width * 0.25,
        borderRadius: width * 0.125, // Circular profile image
        marginBottom: 10,
    },
});

export default ReceivedApplicationMerchant;
