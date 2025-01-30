import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const MerchantBookmarks = () => {
    const [name, setName] = useState('');
    return (
        <ScrollView>

            <Text style={{ color: 'black', fontSize: 30, textAlign: 'center', marginTop: 20, fontWeight: 'bold' }}>My BookMarks</Text>
            <TextInput style={styles.search}
                value={name}
                onChangeText={(text) => setName(text)}
                placeholder="       Search"
            />
            <View>
                <View style={styles.more}>
                    <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold', marginLeft: 20, marginTop: 10 }}>Innovative</Text>
                    <Text style={{ color: 'red', fontSize: 18, fontWeight: 'bold', marginLeft: 20, marginTop: 5 }}>UI/UX Developer</Text>
                    <View>
                        
                        <Image source={require('./photo/user.png')} style={styles.profileImage} />
                    </View>
                    <Text style={{ color: 'black', fontSize: 22, marginLeft: 30, marginTop: 5, fontWeight: 'bold', flexDirection: 'row' }}>Status:
                        <View>
                            <TouchableOpacity style={styles.active}>
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>Active</Text>
                            </TouchableOpacity>
                        </View>
                    </Text>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17, marginLeft: 30, marginTop: 7 }}>No.of position : 4</Text>
                    <TouchableOpacity>
                        <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 17, marginLeft: 30, marginTop: 7 }}>View Location</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 8 }}>
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 30, marginTop: 5 }}>Skills :</Text>
                        <Text style={{ fontSize: 17, color: 'black', fontWeight: 'semibold', marginTop: 8 }}> UI/UX developer using Figma</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles.btn}>
                            <TouchableOpacity>
                                <Text style={{ color: 'black', fontSize: 20, marginLeft: 20, marginTop: 10, marginBottom: 10 }}>offline Mode</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.btn}>
                            <TouchableOpacity>
                                <Text style={{ color: 'black', fontSize: 20, marginLeft: 20, marginTop: 10, marginBottom: 10 }}>4 Months</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ height: 50, marginTop: 20, marginLeft: 75 }}>
                        <LinearGradient colors={['#8B41A2', '#983F7F', '#AF3B52', '#BD3633']}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.gradient} >
                            <Text style={styles.buttonText} >Apply Now</Text>
                        </LinearGradient>
                    </View>
                </View>
            </View>
            <View>
                <View style={styles.more}>
                    <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold', marginLeft: 20, marginTop: 10 }}>FrontEnd Developer</Text>
                    <Text style={{ color: 'red', fontSize: 18, fontWeight: 'bold', marginLeft: 20, marginTop: 5 }}>UI/UX Developer</Text>
                    <View>
                        <Image source={require('./photo/user.png')} style={styles.profileImage} />
                    </View>
                    <Text style={{ color: 'black', fontSize: 20, marginLeft: 30, marginTop: 5, fontWeight: 'bold', flexDirection: 'row' }}>Status:
                        <View>
                            <TouchableOpacity style={styles.active}>
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold' }}>Active</Text>
                            </TouchableOpacity>
                        </View>
                    </Text>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17, marginLeft: 30, marginTop: 7 }}>No.of position : 4</Text>
                    <TouchableOpacity>
                        <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 17, marginLeft: 30, marginTop: 7 }}>View Location</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 8 }}>
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 30, marginTop: 5 }}>Skills :</Text>
                        <Text style={{ fontSize: 17, color: 'black', fontWeight: 'semibold', marginTop: 8 }}> UI/UX developer using Figma</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                        <View style={styles.btn}>
                            <TouchableOpacity>
                                <Text style={{ color: 'black', fontSize: 20, marginLeft: 20, marginTop: 10, marginBottom: 10 }}>offline Mode</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.btn}>
                            <TouchableOpacity>
                                <Text style={{ color: 'black', fontSize: 20, marginLeft: 20, marginTop: 10, marginBottom: 10 }}>4 Months</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ height: 50, marginTop: 10, marginLeft: 75 }}>
                        <TouchableOpacity>
                            <LinearGradient colors={['#8B41A2', '#983F7F', '#AF3B52', '#BD3633']}
                                start={{ x: 1, y: 0 }}
                                end={{ x: 0, y: 1 }}
                                style={styles.gradient} >
                                <Text style={styles.buttonText} >More details</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
};

const styles = StyleSheet.create({
    search: {
        borderWidth: 1,
        borderColor: 'gray',
        width: 350,
        height: 40,
        paddingLeft: 10,
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 30,
        borderRadius: 10
    },
    more: {
        borderColor: 'grey',
        borderWidth: 1,
        height: 520,
        width: 380,
        backgroundColor: 'white',
        padding: 10,
        margin: 0.5,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
        elevation: 8,
        shadowOpacity: 0.8,
        shadowColor: 'black',

    },
    profileImage: {
        width: 110,
        height: 110,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 20
    },
    tx: {
        backgroundColor: 'yellow',
    },
    btn: {
        borderColor: 'skyblue',
        borderWidth: 3,
        marginLeft: 10,
        width: 150,
        height: 50,
        marginTop: 40,
        borderRadius: 7
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',

    },
    gradient: {
        // flex: 1,
        // paddingLeft: 15,
        // paddingRight: 15,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 50,
        // marginTop: 5,
        // marginBottom: 50
    },
    active: {
        backgroundColor: 'yellow',
        width: 100,
        height: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        // marginBottom:20
        // marginTop:15,
        // marginBottom:50
    }

})
export default MerchantBookmarks; 