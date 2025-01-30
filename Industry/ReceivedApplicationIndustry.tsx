import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
const ReceivedApplicationIndustry= () => {
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
                    {/* <Text style={styles.title}>Internship Application</Text> */}
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
                    {/* <Text style={styles.title}>Internship Application</Text> */}
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
    header: {
        backgroundColor: '#990000',
        padding: 20,
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
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
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardSubtitle: {
        fontSize: 16,
        marginBottom: 10,
    },
    cardText: {
        fontSize: 14,
        marginBottom: 10,
    },
    contactInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    contactText: {
        fontSize: 14,
    },
    button: {
        backgroundColor: '#3f51b5',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    profile: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 15,
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },

});
export default ReceivedApplicationIndustry;