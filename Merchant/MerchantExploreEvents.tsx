import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Linking } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import LinearGradient from "react-native-linear-gradient";
// import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';



const data1 = [
    { label: 'Industry', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },

];

const data2 = [
    { label: 'This Month', value: '1' },
    { label: 'Last 2 days', value: '2' },
    { label: 'Last Month', value: '3' },
];

const  MerchantExploreEvents = () => {

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [value2, setValue2] = useState(null);
    const [isFocus2, setIsFocus2] = useState(false);


    const renderLabel = () => {
        if (value || isFocus)
            return null;
    };

    const renderLabel2 = () => {
        if (value2 || isFocus2)
            return null;
    };

    const map = () => {
        Linking.openURL('https://www.google.com');
    };

    const navigation = useNavigation(); 



    return (
        <ScrollView>
            <View style={styles.box}>
                <Text style={styles.text}>DISCOVER EVENTS</Text>
            </View>
            <View>
                <TextInput
                    placeholder='Search'
                    style={styles.search}
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <View style={styles.container}>
                    {renderLabel()}
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        iconStyle={styles.iconStyle}
                        data={data1}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Industry' : '...'}
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }}
                    />
                </View>
                <View style={styles.container}>
                    {renderLabel2()}
                    <Dropdown
                        style={[styles.dropdown, isFocus2 && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        iconStyle={styles.iconStyle}
                        data={data2}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Last 2 days' : '...'}
                        value={value2}
                        onFocus={() => setIsFocus2(true)}
                        onBlur={() => setIsFocus2(false)}
                        onChange={item => {
                            setValue2(item.value);
                            setIsFocus2(false);
                        }}
                    />
                </View>
            </View>

            <View style={styles.exploreEventMainView}>
                <View style={styles.exploreEventMainTouch}>
                    <Image source={require('./photo/cricket.jpg')}
                        style={{ width: 330, height: 170, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                    />
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold' }}>Cricket</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginBottom: 10 }}>
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: '600' }}>Event Description:</Text>
                        <Text style={{ fontSize: 20, color: 'black' }}>Under 21</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginBottom: 10 }}>
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: '600' }}>Category:</Text>
                        <Text style={{ fontSize: 20, color: 'black' }}>Urban</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image source={require('./photo/calendar.jpg')} style={{ height: 20, width: 20, marginLeft: 10 }} />
                        <Text style={{ marginLeft: 10, color: 'black' }}>Date:</Text>
                        <Text style={{ marginLeft: 5 }}>2024-07-29 T 18:30:00</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                        <Image source={require('./photo/location.png')} style={{ height: 20, width: 20, marginLeft: 10 }} />
                        <Text style={{ marginLeft: 10, color: 'black' }}>Venue:</Text>
                        <Text style={{ marginLeft: 5 }}>Chin tapak dam dam</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                        <Image source={require('./photo/clock.png')} style={{ height: 20, width: 20, marginLeft: 10 }} />
                        <Text style={{ marginLeft: 10, color: 'black' }}>Time:</Text>
                        <Text style={{ marginLeft: 5 }}>7 AM</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                        <Image source={require('./photo/fees.png')} style={{ height: 20, width: 20, marginLeft: 10 }} />
                        <Text style={{ marginLeft: 10, color: 'black' }}>Fees :</Text>
                        <Text style={{ marginLeft: 5 }}>300/-</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, marginBottom: 10 }}>
                        <Text style={{ marginLeft: 10, color: 'black' }}>Google Map Location:</Text>
                        <TouchableOpacity onPress={map}>
                            <Text style={styles.link}>View Location</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity style={{ height: 100, width: 300 }}
                         onPress={()=>navigation.navigate('EventRegister')}>
                            <LinearGradient colors={['#8B41A2', '#983F7F', '#AF3B52', '#BD3633']}
                                start={{ x: 1, y: 0 }}
                                end={{ x: 0, y: 1 }}
                                style={styles.gradient} >
                                <Text style={styles.buttonText} >Register</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.exploreEventMainView}>
                    <View style={styles.exploreEventMainTouch}>
                        <Image source={require('./photo/reactNative.jpg')}
                            style={{ width: 330, height: 170, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                        />
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold' }}>Cricket</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 10, marginBottom: 10 }}>
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: '600' }}>Event Description:</Text>
                            <Text style={{ fontSize: 20, color: 'black' }}>Under 21</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 10, marginBottom: 10 }}>
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: '600' }}>Category:</Text>
                            <Text style={{ fontSize: 20, color: 'black' }}>Urban</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image source={require('./photo/calendar.jpg')} style={{ height: 20, width: 20, marginLeft: 10 }} />
                            <Text style={{ marginLeft: 10, color: 'black' }}>Date:</Text>
                            <Text style={{ marginLeft: 5 }}>2024-07-29 T 18:30:00</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                            <Image source={require('./photo/location.png')} style={{ height: 20, width: 20, marginLeft: 10 }} />
                            <Text style={{ marginLeft: 10, color: 'black' }}>Venue:</Text>
                            <Text style={{ marginLeft: 5 }}>Chin tapak dam dam</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                            <Image source={require('./photo/clock.png')} style={{ height: 20, width: 20, marginLeft: 10 }} />
                            <Text style={{ marginLeft: 10, color: 'black' }}>Time:</Text>
                            <Text style={{ marginLeft: 5 }}>7 AM</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                            <Image source={require('./photo/fees.png')} style={{ height: 20, width: 20, marginLeft: 10 }} />
                            <Text style={{ marginLeft: 10, color: 'black' }}>Fees :</Text>
                            <Text style={{ marginLeft: 5 }}>300/-</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, marginBottom: 10 }}>
                            <Text style={{ marginLeft: 10, color: 'black' }}>Google Map Location:</Text>
                            <TouchableOpacity onPress={map}>
                                <Text style={styles.link}>View Location</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <TouchableOpacity style={{ height: 100, width: 300 }}
                             onPress={()=>navigation.navigate('EventRegister')}>
                                <LinearGradient colors={['#8B41A2', '#983F7F', '#AF3B52', '#BD3633']}
                                    start={{ x: 1, y: 0 }}
                                    end={{ x: 0, y: 1 }}
                                    style={styles.gradient} >
                                    <Text style={styles.buttonText} >Register</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};


const styles = StyleSheet.create({
    box: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    text: {
        color: 'black',
        fontSize: 30
    },
    search: {
        borderWidth: 1,
        borderColor: 'grey',
        fontSize: 20,
        margin: 10,
        height: 40,
        padding: 0,
        paddingLeft: 60,
        borderRadius: 10
    },
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        fontSize: 20,
        paddingLeft: 10,
        height: 40,
        padding: 0,
        width: 180,
        borderRadius: 10
    },
    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        padding: 10,
        width: 200

    },
    dropdown: {
        height: 30,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    exploreEventMainView: {

        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        marginBottom: 40,
        
    },
    exploreEventMainTouch: {
        // height: 500,
        // width: 330,
        flex: 1,
        marginTop: 30,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.8,
        elevation: 4,
        borderColor: 'grey',
        borderWidth: 1,
        marginLeft:60,
        marginRight:60
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#fff',
        backgroundColor: 'transparent'
    },
    gradient: {
        padding: 10,
        borderRadius: 20,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline'
    }


})


export default MerchantExploreEvents;