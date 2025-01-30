import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
const NearMeMerchant = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <TextInput style={styles.searchInput}
                        placeholder="Search"
                    />
                </View>
                <View style={styles.filter}>
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterButtonText}>Relevance</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterButtonText}>Top Rated</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterButtonText}>Ratings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterButtonText}>Verified</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listing}>
                    <TouchableOpacity>
                        <View style={styles.listingItem}>
                            <View style={styles.listingImage}>
                                <Image source={require('./photo/trending.jpg')} style={styles.listingImageContent} />
                            </View>
                            <View style={styles.listingDetails}>
                                <View style={styles.listingTop}>
                                    <Text style={styles.listingTitle}>
                                        Tata Group Indian conglomerate
                                    </Text>
                                </View>
                                <View style={styles.listingRating}>
                                    <Text style={styles.listingRatingText}>4.1</Text>
                                </View>
                                <Text style={styles.listingRatingT}>234 Ratings</Text>
                                <Text style={styles.listingAddress}>Annie Besant Road Warli colony</Text>
                                <TouchableOpacity style={styles.callNowButton}>
                                    <Image source={require('./photo/callp.png')} style={styles.callIcon} />
                                    <Text style={styles.callNowButtonText}>Call Now</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.listingItem}>
                        <View style={styles.listingImage}>
                            <Image source={require('./photo/trending.jpg')} style={styles.listingImageContent} />
                        </View>
                        <View style={styles.listingDetails}>
                            <View style={styles.listingTop}>
                                <Text style={styles.listingTitle}>Mahaveer Pearls The Jewelry Store</Text>
                            </View>
                            <View style={styles.listingRating}>
                                <Text style={styles.listingRatingText}>4.1</Text>
                                {/* <Image source={require('./photos/callp.png')} style={styles.starIcon} /> */}
                            </View>
                            <Text style={styles.listingRatingT}>110 Ratings</Text>
                            <Text style={styles.listingAddress}>Annie Besant Road Warli colony</Text>
                            <TouchableOpacity style={styles.callNowButton}>
                                <Image source={require('./photo/callp.png')} style={styles.callIcon} />
                                <Text style={styles.callNowButtonText}>Call Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>




                    <View style={styles.listingItem}>
                        <View style={styles.listingImage}>
                            <Image source={require('./photo/trending.jpg')} style={styles.listingImageContent} />
                        </View>
                        <View style={styles.listingDetails}>
                            <View style={styles.listingTop}>
                                <Text style={styles.listingTitle}>TheLibasStore</Text>
                            </View>
                            <View style={styles.listingRating}>
                                <View style={styles.box}>
                                    <Text style={styles.listingRatingText}>4.1</Text>
                                </View>
                            </View>
                            <Text style={styles.listingRatingT}>180 Ratings</Text>
                            <Text style={styles.listingAddress}>Annie Besant Road Warli colony</Text>
                            <TouchableOpacity style={styles.callNowButton}>
                                <Image source={require('./photo/callp.png')} style={styles.callIcon} />
                                <Text style={styles.callNowButtonText}>Call Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView >
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderColor:'lightgrey'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#900',
        padding: 16,
    },
    logo: {
        width: 40,
        height: 40,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 16,
    },
    searchIconImage: {
        width: 20,
        height: 20,
    },
    filter: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 16,
        backgroundColor: '#fff',
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    filterButtonText: {
        fontSize: 14,
        color: '#333',
    },
    arrowDownIcon: {
        width: 50,
        height: 100,
        marginLeft: 8,
    },
    listing: {
        flex: 1,
        padding: 16,
    },
    listingItem: {
        flexDirection: 'row',
        marginBottom: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    listingImage: {
        width: 150,
        height: 200,
        borderRadius: 8,
        overflow: 'hidden',
        color: 'green',
        marginTop:10,
    },
    listingImageContent: {
        width: '100%',
        height: '100%',
    },
    listingDetails: {
        flex: 1,
        padding: 16,
    },
    listingTop: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    checkMarkIcon: {
        width: 16,
        height: 16,
    },
    topRatedIcon: {
        width: 20,
        height: 20,
        marginLeft: 8,
    },
    listingTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 5,
        marginRight: 30,
    },
    listingRating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        backgroundColor: 'green',
        height: 20,
        width: 40,
    },
    listingRatingText: {
        fontSize: 14,
        color: 'white',
       marginLeft:8,
    },
    starIcon: {
        width: 16,
        height: 16,
        marginLeft: 4,
    },
    listingAddress: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    callNowButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 8,
    },
    callNowButtonText: {
        fontSize: 16,
        color: '#fff',
        marginRight: 21,
        marginLeft: 8,
    },
    callIcon: {
        width: 20,
        height: 20,
    },
    box: {
        height: 30,
        width: 30,
        color: 'green',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
    },
    listingRatingT: {
        fontSize: 16,
        color: 'black',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        color: 'lightgrey',
    },
    searchInput: {
        flex: 1,
        padding: 10,
        color: 'lightgrey',
    },
});
export default NearMeMerchant;
