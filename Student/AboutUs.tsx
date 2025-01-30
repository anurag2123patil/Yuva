import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
const { width, height } = Dimensions.get('window');

const AboutUs = () => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.Feed}>
                    <Text style={styles.Text}>About Us</Text>
                    <View style={styles.visionCard}>
                        <Text style={styles.visionText}>Vision</Text>
                        <Ionicons name="eye-sharp" size={width * 0.2} color="grey" style={styles.icon} />
                        <Text style={styles.visionMain}>
                            Empowering the Youth: Our vision at Yuvasarathi is to create a world
                            where every young individual is inspired, educated, and engaged to reach
                            their fullest potential. We envision a global community of learners and mentors,
                            connected through our platform, driving positive change and innovation.
                        </Text>
                    </View>
                    <View style={styles.visionCard}>
                        <Text style={styles.visionText}>Mission</Text>
                        <Ionicons name="eye-sharp" size={width * 0.2} color="grey" style={styles.icon} />
                        <Text style={styles.visionMain}>
                            Empowering the Youth: Our vision at Yuvasarathi is to create a world
                            where every young individual is inspired, educated, and engaged to reach
                            their fullest potential. We envision a global community of learners and mentors,
                            connected through our platform, driving positive change and innovation.
                        </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('FAQ')}>
                            <LinearGradient
                                colors={['#8B41A2', '#983F7F', '#AF3B52', '#BD3633']}
                                start={{ x: 1, y: 0 }}
                                end={{ x: 0, y: 1 }}
                                style={styles.gradient}
                            >
                                <Text style={styles.buttonText}>FAQ’s About Yuvasarthi</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    scrollView: {
        flexGrow: 1,
        alignItems: 'center',
        padding: width * 0.05, // Responsive padding
    },
    Feed: {
        flex: 1,
        alignItems: 'center',
        marginTop: height * 0.02, // Responsive margin top
    },
    Text: {
        fontSize: width * 0.1, // Responsive font size
        color: 'black',
        fontWeight: 'bold',
        shadowColor: 'black',
        elevation: 8,
        shadowOpacity: 0.8,
    },
    visionCard: {
        marginTop: height * 0.02, // Responsive margin top
        backgroundColor: 'white',
        width: width * 0.9, // Responsive width
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 9,
        borderRadius: 10,
        padding: width * 0.05, // Responsive padding
        marginBottom: height * 0.02, // Responsive margin bottom
    },
    visionText: {
        fontSize: width * 0.08, // Responsive font size
        color: 'black',
        marginBottom: height * 0.01, // Responsive margin bottom
    },
    visionMain: {
        marginTop: height * 0.01, // Responsive margin top
        fontSize: width * 0.04, // Responsive font size
        textAlign: 'center',
        color: 'black',
    },
    icon: {
        marginTop: height * 0.02, // Responsive margin top
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: height * 0.02, // Responsive margin vertical
    },
    gradient: {
        paddingHorizontal: width * 0.05, // Responsive padding
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: width * 0.05, // Responsive font size
        textAlign: 'center',
        paddingVertical: height * 0.01, // Responsive padding vertical
        color: '#fff',
        backgroundColor: 'transparent',
    },
});

export default AboutUs;
