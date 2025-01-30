import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StudentLogin from './StudentLogin';

const MainLogIn = ({ navigation }) => {


    return (

        <LinearGradient colors={['#8B41A2', '#983F7F', '#AF3B52', '#BD3633']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
        >
            <View style={{
                padding: 60, borderColor: "white", borderWidth: 1,
                marginTop: 70, borderRadius: 20, justifyContent: "center", alignItems: "center"
            }}>
                <Image source={require('./logo.png')} style={styles.logo} />
                <Text style={{ color: "white", fontSize: 60, marginBottom: 10 }}>LOG IN</Text>
                <TouchableOpacity style={{
                    width: 180, height: 40, borderRadius: 20, borderWidth: 1,
                    borderColor: "white", backgroundColor: "white", marginTop: 20, justifyContent: "center", alignItems: "center"
                }}
                    onPress={() => navigation.navigate('StudentLogin')}>
                    <Text style={{ fontSize: 30 }}>STUDENT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: 180, height: 40, borderRadius: 20, borderWidth: 1,
                    borderColor: "white", backgroundColor: "white", marginTop: 40, justifyContent: "center", alignItems: "center"
                }}
                    onPress={() => navigation.navigate('IndustryLogin')}>
                    <Text style={{ fontSize: 30 }}>INDUSTRY</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: 180, height: 40, borderRadius: 20, borderWidth: 1,
                    borderColor: "white", backgroundColor: "white", marginTop: 40, justifyContent: "center", alignItems: "center"
                }}
                    onPress={() => navigation.navigate('MerchantLogin')}>
                    <Text style={{ fontSize: 30 }}>MERCHANT</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        marginBottom: 70,
        width: 210,
        height: 80,
    },
});

export default MainLogIn;
