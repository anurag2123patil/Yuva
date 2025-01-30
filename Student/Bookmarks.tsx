import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const Bookmarks = () => {
    const [name, setName] = useState('');
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>My BookMarks</Text>
            <TextInput
                style={styles.search}
                value={name}
                onChangeText={(text) => setName(text)}
                placeholder="Search"
            />
            <View>
                <View style={styles.more}>
                    <Text style={styles.mainTitle}>Innovative</Text>
                    <Text style={styles.subTitle}>UI/UX Developer</Text>
                    <View>
                        <Image source={require('./photo/user.png')} style={styles.profileImage} />
                    </View>
                    <Text style={styles.statusText}>
                        Status:
                        <View>
                            <TouchableOpacity style={styles.active}>
                                <Text style={styles.activeText}>Active</Text>
                            </TouchableOpacity>
                        </View>
                    </Text>
                    <Text style={styles.positionText}>No. of position : 4</Text>
                    <TouchableOpacity>
                        <Text style={styles.linkText}>View Location</Text>
                    </TouchableOpacity>
                    <View style={styles.skillsContainer}>
                        <Text style={styles.skillsTitle}>Skills :</Text>
                        <Text style={styles.skillsText}>UI/UX developer using Figma</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.btn}>
                            <TouchableOpacity>
                                <Text style={styles.btnText}>offline Mode</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.btn}>
                            <TouchableOpacity>
                                <Text style={styles.btnText}>4 Months</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.gradientContainer}>
                        <LinearGradient
                            colors={['#8B41A2', '#983F7F', '#AF3B52', '#BD3633']}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.gradient}>
                            <Text style={styles.buttonText}>Apply Now</Text>
                        </LinearGradient>
                    </View>
                </View>
            </View>
            {/* Add additional views like the one above as needed */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
    },
    title: {
        color: 'black',
        fontSize: width * 0.08,  // Responsive font size
        textAlign: 'center',
        marginTop: height * 0.03,
        fontWeight: 'bold',
    },
    search: {
        borderWidth: 1,
        borderColor: 'gray',
        width: width * 0.85,
        height: height * 0.05,
        paddingLeft: 10,
        marginTop: height * 0.02,
        marginBottom: height * 0.02,
        marginHorizontal: width * 0.075,
        borderRadius: 10,
    },
    more: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        marginHorizontal: width * 0.05,
        marginBottom: height * 0.02,
        borderRadius: 10,
        elevation: 8,
        shadowOpacity: 0.8,
        shadowColor: 'black',
    },
    mainTitle: {
        color: 'black',
        fontSize: width * 0.065,  // Responsive font size
        fontWeight: 'bold',
        marginLeft: width * 0.05,
        marginTop: height * 0.01,
    },
    subTitle: {
        color: 'red',
        fontSize: width * 0.045,
        fontWeight: 'bold',
        marginLeft: width * 0.05,
        marginTop: height * 0.005,
    },
    profileImage: {
        width: width * 0.28,
        height: width * 0.28,
        borderRadius: 10,
        marginTop: height * 0.01,
        marginLeft: width * 0.05,
    },
    statusText: {
        color: 'black',
        fontSize: width * 0.055,
        marginLeft: width * 0.075,
        marginTop: height * 0.01,
        fontWeight: 'bold',
        flexDirection: 'row',
    },
    active: {
        backgroundColor: 'yellow',
        width: width * 0.3,
        height: height * 0.04,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: width * 0.025,
    },
    activeText: {
        fontSize: width * 0.04,
        color: 'black',
        fontWeight: 'bold',
    },
    positionText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: width * 0.045,
        marginLeft: width * 0.075,
        marginTop: height * 0.01,
    },
    linkText: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: width * 0.045,
        marginLeft: width * 0.075,
        marginTop: height * 0.01,
    },
    skillsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: height * 0.01,
    },
    skillsTitle: {
        fontSize: width * 0.05,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: width * 0.075,
    },
    skillsText: {
        fontSize: width * 0.045,
        color: 'black',
        marginTop: height * 0.01,
    },
    buttonContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-around',
        marginBottom: height * 0.01,
    },
    btn: {
        borderColor: 'skyblue',
        borderWidth: 3,
        width: width * 0.4,
        height: height * 0.06,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: width * 0.025,
        marginTop: height * 0.05,
    },
    btnText: {
        color: 'black',
        fontSize: width * 0.045,
        textAlign: 'center',
    },
    gradientContainer: {
        height: height * 0.07,
        marginTop: height * 0.03,
        alignSelf: 'center',
    },
    gradient: {
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.5,
        height: height * 0.07,
    },
    buttonText: {
        color: '#fff',
        fontSize: width * 0.04,
        fontWeight: 'bold',
    },
});

export default Bookmarks;

