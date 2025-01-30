import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";

const { width, height } = Dimensions.get('window');

const ShareInternshipIndustry = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    return (
        <ScrollView contentContainerStyle={styles.container}>

            <Text style={styles.title}>SHARE INTERNSHIPS</Text>
            <TextInput
                style={styles.search}
                value={name}
                onChangeText={(text) => setName(text)}
                placeholder="Search"
            />

            <View style={styles.more}>
                <Text style={styles.companyTitle}>Innovative</Text>
                <Text style={styles.positionTitle}>UI/UX Developer</Text>
                <Image source={require('./photo/user.png')} style={styles.profileImage} />
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.status}>
                        Status:
                    </Text>
                    <View style={styles.active}>
                        <Text style={styles.activeText}>Active</Text>
                    </View>
                </View>
                <Text style={styles.positions}>No. of positions: 4</Text>
                <TouchableOpacity>
                    <Text style={styles.locationLink}>View Location</Text>
                </TouchableOpacity>
                <View style={styles.skillContainer}>
                    <Text style={styles.skillTitle}>Skill:</Text>
                    <Text style={styles.skillDescription}>UI/UX developer using Figma</Text>
                </View>
                <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Offline Mode</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>4 Months</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 50, marginTop: 10, marginLeft: 75 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Internmore')} style={styles.detailsButton}>
                        <LinearGradient
                            colors={['#8B41A2', '#983F7F', '#AF3B52', '#BD3633']}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.gradient}>
                            <Text style={styles.buttonText}>More details</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>




            <View style={styles.more}>
                <Text style={styles.companyTitle}>Innovative</Text>
                <Text style={styles.positionTitle}>UI/UX Developer</Text>
                <Image source={require('./photo/user.png')} style={styles.profileImage} />
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.status}>
                        Status:
                    </Text>
                    <View style={styles.active}>
                        <Text style={styles.activeText}>Active</Text>
                    </View>
                </View>
                <Text style={styles.positions}>No. of positions: 4</Text>
                <TouchableOpacity>
                    <Text style={styles.locationLink}>View Location</Text>
                </TouchableOpacity>
                <View style={styles.skillContainer}>
                    <Text style={styles.skillTitle}>Skill:</Text>
                    <Text style={styles.skillDescription}>UI/UX developer using Figma</Text>
                </View>
                <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Offline Mode</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>4 Months</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 50, marginTop: 10, marginLeft: 75 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Internmore')} style={styles.detailsButton}>
                        <LinearGradient
                            colors={['#8B41A2', '#983F7F', '#AF3B52', '#BD3633']}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.gradient}>
                            <Text style={styles.buttonText}>More details</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('AddInternIndustry')} style={styles.addButton}>
                <Text style={styles.addButtonText}>+ Add Internships</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        paddingBottom: 20,
    },
    title: {
        color: 'black',
        fontSize: 0.07 * width, // Scales with screen size
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold',
    },
    search: {
        borderWidth: 1,
        borderColor: 'gray',
        width: '85%',
        height: 40,
        paddingLeft: 10,
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 10,
    },
    more: {
        borderColor: 'black',
        borderWidth: 1,
        width: '90%',
        height: 'auto',
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        elevation: 5,
    },
    profileImage: {
        width: width * 0.25,
        height: width * 0.25,
        borderRadius: 10,
        marginVertical: 10,
    },
    status: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    active: {
        backgroundColor: 'yellow',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        marginLeft:10
    },
    activeText: {
        color: 'black',
        fontWeight: 'bold',
    },
    positions: {
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 7,
    },
    locationLink: {
        color: 'blue',
        fontWeight: 'bold',
        marginTop: 7,
    },
    skillContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    skillTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 5,
    },
    skillDescription: {
        fontSize: 17,
    },
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    btn: {
        borderColor: 'skyblue',
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        width: '45%',
        alignItems: 'center',
    },
    btnText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    detailsButton: {
        // marginTop: 20,
    },
    gradient: {
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        height: 50,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    addButton: {
        marginTop: 20,
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    addButtonText: {
        color: 'white',
        fontSize: 18,
    },
    companyTitle:
    {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5
    },
    positionTitle: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',

    }
});

export default ShareInternshipIndustry;