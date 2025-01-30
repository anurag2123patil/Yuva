import React from 'react';
import { Text, View, ScrollView, StyleSheet, TextInput, Image, Dimensions,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



// Get device dimensions
const { width, height } = Dimensions.get('window');

const News = () => {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            {/* <View style={styles.header}>
                <Text style={styles.headerText}>NEWS</Text>
            </View> */}
            <View style={styles.newsContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                />
                <View style={styles.newsSection}>
                    <Text style={styles.breakingNewsTitle}>BREAKING NEWS</Text>
                    {newsData.map((newsItem, index) => (
                        <TouchableOpacity
                        onPress={() => navigation.navigate('News2')}>
                            <View key={index} style={styles.newsItem}>
                            <Image
                                source={newsItem.image}
                                style={styles.newsImage}
                            />
                            <View style={styles.newsContent}>
                                <Text style={styles.newsDate}>{newsItem.date}</Text>
                                <Text style={styles.newsHeadline}>{newsItem.headline}</Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

const newsData = [
    {
        date: '12 July 2024',
        headline: 'Majority of Indian employers plans to add staff in first six months of FY25: Survey',
        image: require('./photo/news1.jpg'),
    },
    {
        date: '12 July 2024',
        headline: 'Majority of Indian employers plans to add staff in first six months of FY25: Survey',
        image: require('./photo/new.jpg'),
    },
    {
        date: '12 July 2024',
        headline: 'Majority of Indian employers plans to add staff in first six months of FY25: Survey',
        image: require('./photo/trending.jpg'),
    },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    header: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#333',
    },
    headerText: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
    },
    newsContainer: {
        paddingHorizontal: 15,
    },
    searchInput: {
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        padding: 10,
        fontSize: 18,
        marginVertical: 15,
        width: '100%',
    },
    newsSection: {
        marginVertical: 10,
    },
    breakingNewsTitle: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    newsItem: {
        marginBottom: 25,
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
    },
    newsImage: {
        width: '100%',
        height: height * 0.25, // 25% of screen height
    },
    newsContent: {
        padding: 10,
    },
    newsDate: {
        color: 'black',
        marginBottom: 5,
    },
    newsHeadline: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default News;
