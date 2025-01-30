import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const image1 = require('./photo/photo1.jpg');
const image2 = require('./photo/photo2.jpg');
const image3 = require('./photo/photo3.jpg');
const image4 = require('./photo/photo4.jpg');
const image5 = require('./photo/photo5.jpg');

const Podcast = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');

    const imageData = [
        { id: '1', source: image1 },
        { id: '2', source: image2 },
        { id: '3', source: image3 },
        { id: '4', source: image4 },
        { id: '5', source: image5 },
    ];

    return (
        <ScrollView contentContainerStyle={styles.body}>
            <View style={styles.Get}>
                <Text style={styles.Text}>PODCAST</Text>
                <TextInput
                    style={styles.search}
                    value={name}
                    onChangeText={(text) => setName(text)}
                    placeholder="Search"
                />
                <Text style={styles.tx}>Recent</Text>
                <Text style={styles.seeAllText}>See all</Text>
                <View style={styles.sliderContainer}>
                    <FlatList
                        data={imageData}
                        horizontal
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.interSliderView}>
                                <TouchableOpacity style={styles.touchable}>
                                    <Image
                                        source={item.source}
                                        style={styles.image}
                                    />
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>
                <Text style={styles.Tend}>Trending</Text>
                <Text style={styles.seeAllText}>See all</Text>

                <View style={styles.bg}>
                    <TouchableOpacity style={styles.touch}>
                        <View style={styles.row}>
                            <Image
                                source={require('./photo/photo4.jpg')}
                                style={styles.cardImage}
                            />
                            <Text style={styles.cardTitle}>Career Curves</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.cardSubtitle}>by Evan Richards</Text>
                </View>

                <View style={styles.bg}>
                    <TouchableOpacity style={styles.touch}>
                        <View style={styles.row}>
                            <Image
                                source={require('./photo/photo6.jpg')}
                                style={styles.cardImage}
                            />
                            <Text style={styles.cardTitle}>Life After Startup</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.cardSubtitle}>by Steila Flores</Text>
                </View>

                <View style={styles.bg}>
                    <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Podcast2')}>
                        <View style={styles.row}>
                            <Image
                                source={require('./photo/photo5.jpg')}
                                style={styles.cardImage}
                            />
                            <Text style={styles.cardTitle}>Design Inspiration</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.cardSubtitle}>by Evan Richards</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    body: {
        flexGrow: 1,
        backgroundColor: '#fff',
        padding: 15,
    },
    Text: {
        fontSize: 0.07 * width,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    Get: {
        alignItems: 'center',
    },
    search: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        height: 0.06 * height,
        width: '100%',
        maxWidth: 350,
        marginVertical: 15,
        borderRadius: 15,
    },
    tx: {
        fontSize: 0.05 * width,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    seeAllText: {
        fontSize: 0.04 * width,
        color: 'black',
        marginBottom: 15,
        textAlign: 'right',
    },
    sliderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 0.3 * height,
    },
    interSliderView: {
        width: 0.4 * width,
        height: 0.2 * height,
        marginRight: 10,
    },
    touchable: {
        height: '100%',
        borderRadius: 5,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    Tend: {
        fontSize: 0.05 * width,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    bg: {
        backgroundColor: 'lightgray',
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 15,
        marginBottom: 15,
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.3,
    },
    touch: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardImage: {
        width: 0.15 * width,
        height: 0.1 * height,
        borderRadius: 5,
    },
    cardTitle: {
        fontSize: 0.05 * width,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 15,
    },
    cardSubtitle: {
        fontSize: 0.04 * width,
        color: 'gray',
        textAlign: 'right',
        marginTop: 5,
    },
});

export default Podcast;
