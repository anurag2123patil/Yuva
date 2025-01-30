import React,{useState} from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import NavigationForMerchant from '../Merchant/NavigationForMerchant';


const MerchantLogin = ({ navigation }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage navigation

    const handlePress = () => {
        setIsLoggedIn(true); // Set the login status to true
    };

    if (isLoggedIn) {
        return <NavigationForMerchant />; // If logged in, render the TabNavigator component
    }

    return (
        <LinearGradient colors={['#8B41A2', '#983F7F', '#AF3B52', '#BD3633']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
        >
            <View style={{
                padding: 40, borderColor: "white", borderWidth: 1,
                marginTop: 70, borderRadius: 20,
            }}>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image source={require('./logo.png')} style={styles.logo} />
                    <Text style={{ color: "white", fontSize: 60, marginBottom: 20 }}>MERCHANT</Text>
                    <TextInput placeholder='Enter Your ID' style={{
                        backgroundColor: "white", fontSize: 20, paddingLeft: 10, paddingRight: 120,
                        paddingBottom: 10, paddingTop: 10, borderRadius: 10
                    }}></TextInput>

                    <TextInput placeholder='Password' style={{
                        backgroundColor: "white", fontSize: 20, paddingLeft: 10, paddingRight: 140,
                        paddingBottom: 10, paddingTop: 10, borderRadius: 10, marginTop: 20
                    }}></TextInput>

                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#15B6C0", marginTop: 30, borderRadius: 20 }}
                    onPress={handlePress}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
                    <Text style={{ color: "white", marginTop:20 }} onPress={handlePress}>Forgot Password</Text>
                
                <Text style={{ color: "white", marginTop: 5 }}>
                    Don’t have an account?{' '}
                    <Text onPress={handlePress} style={{color:"#15B6C0"}}>
                    Register here.
                    </Text>
                </Text>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop:90
    },
    logo: {
        marginBottom: 50,
        width: 210,
        height: 80,

    },
    buttonText: {
        fontSize: 25,
        textAlign: 'center',
        color: '#fff',
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 10,
        paddingTop: 10,
    },
});

export default MerchantLogin;
