import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const BookmarksIndustry = () => {
    const [name, setName] = useState('');
    return (
        <ScrollView>
            <Text style={styles.title}>My BookMarks</Text>
            <TextInput
                style={styles.search}
                value={name}
                onChangeText={(text) => setName(text)}
                placeholder="Search"
            />
            <View>
                {/* First Job Card */}
                <View style={styles.more}>
                    <Text style={styles.jobTitle}>Innovative</Text>
                    <Text style={styles.subTitle}>UI/UX Developer</Text>
                    <Image source={require('./photo/user.png')} style={styles.profileImage} />
                    <Text style={styles.statusText}>
                        Status:
                        <TouchableOpacity style={styles.active}>
                            <Text style={styles.activeText}>Active</Text>
                        </TouchableOpacity>
                    </Text>
                    <Text style={styles.positionText}>No.of position : 4</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewLocationText}>View Location</Text>
                    </TouchableOpacity>
                    <View style={styles.skillContainer}>
                        <Text style={styles.skillLabel}>Skills :</Text>
                        <Text style={styles.skillText}>UI/UX developer using Figma</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>offline Mode</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>4 Months</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.gradientContainer}>
                        <LinearGradient
                            colors={['#8B41A2', '#983F7F', '#AF3B52', '#BD3633']}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.gradient}
                        >
                            <Text style={styles.buttonText}>More Details</Text>
                        </LinearGradient>
                    </View>
                </View>

                {/* Second Job Card */}
                <View style={styles.more}>
                    <Text style={styles.jobTitle}>FrontEnd Developer</Text>
                    <Text style={styles.subTitle}>UI/UX Developer</Text>
                    <Image source={require('./photo/user.png')} style={styles.profileImage} />
                    <Text style={styles.statusText}>
                        Status:
                        <TouchableOpacity style={styles.active}>
                            <Text style={styles.activeText}>Active</Text>
                        </TouchableOpacity>
                    </Text>
                    <Text style={styles.positionText}>No.of position : 4</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewLocationText}>View Location</Text>
                    </TouchableOpacity>
                    <View style={styles.skillContainer}>
                        <Text style={styles.skillLabel}>Skills :</Text>
                        <Text style={styles.skillText}>UI/UX developer using Figma</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>offline Mode</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>4 Months</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.gradientContainer}>
                        <LinearGradient
                            colors={['#8B41A2', '#983F7F', '#AF3B52', '#BD3633']}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.gradient}
                        >
                            <Text style={styles.buttonText}>More Details</Text>
                        </LinearGradient>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold',
    },
    search: {
        borderWidth: 1,
        borderColor: 'gray',
        width: '85%', // Percentage width
        height: 40,
        paddingLeft: 10,
        marginTop: 20,
        marginBottom: 10,
        alignSelf: 'center', // Center the input box
        borderRadius: 10,
    },
    more: {
        borderColor: 'grey',
        borderWidth: 1,
        backgroundColor: 'white',
        padding: 10,
        marginVertical: 10,
        marginHorizontal: '5%',
        borderRadius: 10,
        elevation: 8,
        shadowOpacity: 0.8,
        shadowColor: 'black',
        width: '90%',
    },
    profileImage: {
        width: width * 0.25, // Make image size responsive
        height: width * 0.25,
        borderRadius: 10,
        marginTop: 10,
    },
    jobTitle: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 10,
    },
    subTitle: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 5,
    },
    statusText: {
        color: 'black',
        fontSize: 22,
        marginLeft: 30,
        marginTop: 5,
        fontWeight: 'bold',
    },
    positionText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: 30,
        marginTop: 7,
    },
    viewLocationText: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: 30,
        marginTop: 7,
    },
    skillContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 8,
    },
    skillLabel: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 5,
    },
    skillText: {
        fontSize: 17,
        color: 'black',
        marginLeft: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    btn: {
        borderColor: 'skyblue',
        borderWidth: 2,
        width: '45%', // Adjust width based on screen
        height: 50,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    gradientContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    gradient: {
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: 50,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    active: {
        backgroundColor: 'yellow',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        marginLeft: 10,
    },
    activeText: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
    },
});

export default BookmarksIndustry;
