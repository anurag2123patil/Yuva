import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const Job = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');

    return (
        <ScrollView>
            <Text style={styles.title}>JOBS</Text>
            <TextInput 
                style={styles.search}
                value={name}
                onChangeText={(text) => setName(text)}
                placeholder="Search"
            />
            <View style={styles.more}>
                <Text style={styles.innovativeText}>Innovative</Text>
                <Text style={styles.jobTitle}>UI/UX Developer</Text>
                <Image source={require('./photo/user.png')} style={styles.profileImage} />
                <Text style={styles.statusText}>Status:
                    <TouchableOpacity style={styles.active}>
                        <Text style={styles.activeText}>Active</Text>
                    </TouchableOpacity>
                </Text>
                <Text style={styles.positionText}>No.of positions: 4</Text>
                <TouchableOpacity>
                    <Text style={styles.locationText}>View Location</Text>
                </TouchableOpacity>
                <View style={styles.skillContainer}>
                    <Text style={styles.skillLabel}>Skill:</Text>
                    <Text style={styles.skillText}>UI/UX developer using Figma</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Offline Mode</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>4 Months</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Jobmore')}> 
                    <View style={styles.moreDetailsContainer}>
                        <LinearGradient colors={['#8B41A2', '#983F7F', '#AF3B52', '#BD3633']}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.gradient}>
                            <Text style={styles.buttonText}>More details</Text>
                        </LinearGradient>
                    </View>
                </TouchableOpacity>
            </View>

            {/* Repeat the above block for more jobs */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: width * 0.08,
        textAlign: 'center',
        marginTop: height * 0.02,
        fontWeight: 'bold',
    },
    search: {
        borderWidth: 1,
        borderColor: 'gray',
        width: width * 0.85,
        height: height * 0.05,
        paddingLeft: 10,
        marginTop: height * 0.02,
        marginBottom: height * 0.01,
        marginLeft: width * 0.075,
        borderRadius: 10,
    },
    more: {
        borderColor: 'black',
        borderWidth: 1,
        height: height * 0.65,
        width: width * 0.9,
        marginLeft: width * 0.05,
        marginTop: height * 0.02,
        shadowColor: 'black',
        elevation: 7,
        shadowOpacity: 0.8,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: width * 0.05,
    },
    profileImage: {
        width: width * 0.3,
        height: width * 0.3,
        borderRadius: 10,
        marginTop: height * 0.02,
        marginLeft: width * 0.05,
    },
    innovativeText: {
        color: 'black',
        fontSize: width * 0.05,
        fontWeight: 'bold',
        marginBottom: height * 0.005,
    },
    jobTitle: {
        color: 'red',
        fontSize: width * 0.045,
        fontWeight: 'bold',
        marginBottom: height * 0.01,
    },
    statusText: {
        color: 'black',
        fontSize: width * 0.05,
        fontWeight: 'bold',
        marginBottom: height * 0.01,
    },
    positionText: {
        color: 'black',
        fontSize: width * 0.04,
        fontWeight: 'bold',
        marginBottom: height * 0.01,
    },
    locationText: {
        color: 'blue',
        fontSize: width * 0.04,
        fontWeight: 'bold',
        marginBottom: height * 0.01,
    },
    skillContainer: {
        flexDirection: 'row',
        marginBottom: height * 0.02,
    },
    skillLabel: {
        fontSize: width * 0.05,
        color: 'black',
        fontWeight: 'bold',
        marginRight: width * 0.02,
    },
    skillText: {
        fontSize: width * 0.045,
        color: 'black',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: height * 0.02,
    },
    btn: {
        borderColor: 'skyblue',
        borderWidth: 3,
        width: width * 0.4,
        height: height * 0.07,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
    },
    btnText: {
        color: 'black',
        fontSize: width * 0.045,
    },
    moreDetailsContainer: {
        height: height * 0.07,
        alignItems: 'center',
    },
    gradient: {
        borderRadius: 20,
        width: width * 0.5,
        height: height * 0.07,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: width * 0.04,
        fontWeight: 'bold',
    },
    active: {
        backgroundColor: 'yellow',
        width: width * 0.25,
        height: height * 0.04,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeText: {
        fontSize: width * 0.04,
        color: 'black',
        fontWeight: 'bold',
    }
});

export default Job;