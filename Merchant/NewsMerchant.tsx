//{{NEWS MAIN PAGE INDUSTRY}}
import React, { useState } from 'react';
import { Text, Button, View, ScrollView, TouchableOpacity, StyleSheet, TextInput, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const NewsMerchant = () => {
    const navigation = useNavigation();

    const display = () => { }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.Get}><Text style={styles.Text}>NEWS</Text></View>
                <View style={styles.newsContainer}>
                    <View>
                        <TextInput style={styles.searchInput}
                            placeholder="Search"
                        />
                    </View>

                    <View>
                        <Text style={styles.breakingNews}>BREAKING NEWS</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('News2Merchant')}>
                        <View style={styles.deco}>
                            <Image
                                source={require('./photo/trending.jpg')}
                                style={styles.newsImage}
                            />
                            <View style={styles.newsContent}>
                                <Text style={styles.newsDate}>12 July 2024</Text>
                                <Text style={styles.newsHeadline}>Majority of Indian employers plan to add staff in first six months of FY25: Survey</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* Repeat Breaking News Section */}
                    <View>
                        <Text style={styles.breakingNews}>BREAKING NEWS</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('News2Merchant')} >
                        <View style={styles.deco}>
                            <Image
                                source={require('./photo/trending.jpg')}
                                style={styles.newsImage}
                            />
                            <View style={styles.newsContent}>
                                <Text style={styles.newsDate}>12 July 2024</Text>
                                <Text style={styles.newsHeadline}>Majority of Indian employers plan to add staff in first six months of FY25: Survey</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>
                {/* <TouchableOpacity onPress={() => navigation.navigate('AddNewsIndustry')}>
                    <View style={styles.main}>
                        <Button title='+ADD NEWS' onPress={display}></Button>
                    </View>
                </TouchableOpacity> */}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    newsContainer: {
        padding: width * 0.05, // Responsive padding
    },
    searchInput: {
        fontSize: 18,
        backgroundColor: 'lightgrey',
        elevation: 5,
        shadowOpacity: 0.5,
        shadowColor: 'black',
        marginBottom: 10,
        borderRadius: 10,
        padding: 10,
        width: '100%',
    },
    breakingNews: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    newsImage: {
        width: '100%',
        height: width * 0.5, // Responsive height based on screen width
        borderRadius: 10,
        marginBottom: 10,
    },
    newsContent: {
        backgroundColor: 'white',
        padding: 10,
    },
    newsDate: {
        color: 'black',
        marginBottom: 5,
    },
    newsHeadline: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    deco: {
        padding: 10,
        borderRadius: 10,
        elevation: 8,
        shadowOpacity: 0.8,
        shadowColor: 'black',
        marginBottom: 20,
    },
    Get: {
        alignItems: 'center',
        marginTop: 30,
    },
    Text: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    main: {
        marginBottom: 30,
        alignItems: 'flex-end',
    },
});

export default NewsMerchant;