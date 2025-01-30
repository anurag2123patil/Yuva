import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {useState} from "react";
import { LinearGradient } from 'expo-linear-gradient';
// import LinearGradient from "react-native-linear-gradient";
import { View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity, Image, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const image1 = require('./photo/slider1.png');
const image2 = require('./photo/slider2.png');
const image3 = require('./photo/slider3.png');

const Home = () => {
    const imageData = [
        { id: '1', source: image1 },
        { id: '2', source: image2 },
        { id: '3', source: image3 },
    ];
    const navigation = useNavigation();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => setIsModalVisible(true);
    const hideModal = () => setIsModalVisible(false);
    

    return (
        <ScrollView style={styles.body}>
            <Text style={styles.tranding}>TRENDING ON YUVA SARATHI</Text>
            <View style={styles.sliderView}>
                <FlatList
                    data={imageData}
                    horizontal
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.interSliderView}>
                            <TouchableOpacity style={styles.touchable}onPress={() => navigation.navigate('Job')}>
                                <Image
                                    source={item.source}
                                    style={styles.image}
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                />
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <View style={styles.row}>
                            <TouchableOpacity style={styles.blogStyle}
                                onPress={() => navigation.navigate('Blog')}>
                                <Image
                                    source={require('./photo/blog.png')}
                                    style={styles.blog}
                                />
                                <Text style={{ fontSize: 15, marginTop: 2, color:'black' }}>Blog</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.indusStyle}
                                onPress={() => navigation.navigate('Challenges')}>
                                <Image
                                    source={require('./photo/industry_chal.png')}
                                    style={styles.indus}
                                />
                                <Text style={{ fontSize: 15, color:'black' }}>Challenges</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.blogStyle}
                                onPress={() => navigation.navigate('Job')}>
                                <Image
                                    source={require('./photo/job.png')}
                                    style={styles.blog}
                                />
                                <Text style={{ fontSize: 15, marginTop: 4, color:'black' }}>Job</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.row}>
                            <TouchableOpacity style={styles.blogStyle}
                                onPress={() => navigation.navigate('Poles')}>
                                <Image
                                    source={require('./photo/poles.png')}
                                    style={styles.blog}
                                />
                                <Text style={{ fontSize: 15, marginTop: 0, color:'black' }}>Poles</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.indusStyle}
                                onPress={() => navigation.navigate('Talks')}>
                                <Image
                                    source={require('./photo/talk.png')}
                                    style={styles.indus}
                                />
                                <Text style={{ fontSize: 15, color:'black' }}>Talks</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.blogStyle}
                                onPress={() => navigation.navigate('Internship')}>
                                <Image
                                    source={require('./photo/internship.png')}
                                    style={styles.intern}
                                />
                                <Text style={{ fontSize: 15, marginTop: 4, color:'black' }}>Internship</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.row3}>
                <Text style={styles.tranding}>EXPLORE EVENTS</Text>
                <TouchableOpacity style={styles.exploreTouch}
                    onPress={() => navigation.navigate('ExploreEvent')}
                >
                    <View style={styles.row2}>
                        <Text style={{ color: "white", fontSize: 20 }}>View All</Text>
                        <Ionicons name="arrow-forward-sharp" size={25} color="white" />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.exploreEventMainView}>
                <View style={styles.exploreEventMainTouch}>
                    <Image source={require('./photo/reactNative.jpg')}
                        style={{ width: 300, height: 170, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                    />
                    <View style={{ marginTop: 15, marginLeft: 10 }}>
                        <Text style={{ fontSize: 30, marginBottom: 15 }}>React Native</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image source={require('./photo/calendar.jpg')} style={{ height: 20, width: 20 }} />
                            <Text style={{ marginLeft: 15, color:'black' }}>2024-07-29 Time - 18:30:00</Text>
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                            <Image source={require('./photo/clock.png')} style={{ height: 20, width: 20 }} />
                            <Text style={{ marginLeft: 15, color:'black' }}>7:00 PM</Text>
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                            <Image source={require('./photo/location.png')} style={{ height: 20, width: 20 }} />
                            <Text style={{ marginLeft: 15, marginRight: 20, color:'black' }}>Shree sai row Banglow Upendra Nagar Nashik</Text>
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                            <Image source={require('./photo/fees.png')} style={{ height: 20, width: 20 }} />
                            <Text style={{ marginLeft: 15, color:'black' }}>Fees : 300/-</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity style={{ height: 160, width: 300 }}
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

                <View style={styles.row3}>
                    <Text style={styles.tranding}>NEWS</Text>
                    <TouchableOpacity style={styles.exploreTouch}
                    onPress={()=>navigation.navigate('News')}>
                        <View style={styles.row2}>
                            <Text style={{ color: "white", fontSize: 20 }}>View All</Text>
                            <Ionicons name="arrow-forward-sharp" size={25} color="white" />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.newsShow}>
                    <TouchableOpacity style={styles.touchable}
                    onPress={()=>navigation.navigate('News')}>
                        <View style={{ flexDirection: "row" }}>
                            <Image
                                source={require('./photo/acc1.jpeg')}
                                style={{ height: 80, width: 100, marginTop: 10, marginLeft: 20, borderRadius: 5 }}
                            />
                            <View style={{ marginTop: 8, marginLeft: 4, justifyContent: "space-between" }}>
                                <Text style={{ fontSize: 16, color:'black' }}>Mumbai BMW hit-and-run case:</Text>
                                <Text style={{ color: "grey" }}>11/07/24</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.newsShow}>
                    <TouchableOpacity style={styles.touchable}
                    onPress={()=>navigation.navigate('News')}>
                        <View style={{ flexDirection: "row" }}>
                            <Image
                                source={require('./photo/acc1.jpeg')}
                                style={{ height: 80, width: 100, marginTop: 10, marginLeft: 20, borderRadius: 5 }}
                            />
                            <View style={{ marginTop: 8, marginLeft: 4, justifyContent: "space-between" }}>
                                <Text style={{ fontSize: 16, color:'black'}}>Mumbai BMW hit-and-run case:</Text>
                                <Text style={{ color: "grey" }}>11/07/24</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    tranding: {
        color:'black',
        flex: 1,
        marginTop: 20,
        marginLeft: 20,
        fontSize: 25,
    },
    sliderView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    interSliderView: {
        flex: 1,
        width: 350,
        height: 220,
        marginTop: 20,
        alignItems: "center",

    },
    touchable: {
        height: 220,
        flex: 1,
        width: 330,
        borderRadius: 20,
        overflow: 'hidden',
    },
    image: {
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
    },
    cardContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 240,
    },
    card: {
        height: 230,
        width: 340,
        flex: 1,
        marginTop: 30,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.2,
        elevation: 2,
    },
    blog: {
        width: 60,
        height: 60,
    },
    blogStyle: {
        flex: 1,
        width: 60,
        justifyContent: "center",
        marginTop: 5,
        alignItems: "center",
    },
    indus: {
        width: 60,
        height: 60,
    },
    indusStyle: {
        flex: 1,
        width: 60,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    intern: {
        width: 60,
        height: 60,

    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    row2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: "#525252",
        width: 110,
        height: 28,
        borderRadius: 8,
    },
    row3: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 15,

    },
    exploreTouch: {
        marginTop: 20,
        marginRight: 37,
    },
    exploreEventMainView: {
        marginBottom: 30,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,

    },
    exploreEventMainTouch: {
        height: 400,
        width: 300,
        flex: 1,
        marginTop: 30,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.2,
        elevation: 4,
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
    newsShow: {
        width: 320,
        height: 100,
        marginTop: 20,
        alignItems: "center",
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.2,
        elevation: 4,
        borderRadius: 10,
    },

});

export default Home;
