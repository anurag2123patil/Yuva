import React, { useState } from 'react';
import { View, TextInput, Text, Linking, StyleSheet, TouchableOpacity, Alert, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
 const AddNewsIndustry = () => {
  const [news, setNews] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');


    const [newsError, setNewsError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);
    const [categoryError, setCategoryError] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const saveData = () => {
        setNewsError(!news);
        setDescriptionError(!description);
        setCategoryError(!category);

        if (!news || !description || !category || !isChecked) {
            if (!isChecked) {
                Alert.alert('Please agree to the terms and conditions.');
            }
            return;
        } else {
            console.warn("Submitted");
        }
    };

    const handleFilePick = async () => {
        // Handle file picking logic
    };

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    const handlePress = () => {
        Linking.openURL('https://www.google.com');
    };

    return (
        <View>
            <Text style={styles.title}>Add News Details</Text>

            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={news}
                    onChangeText={(text) => setNews(text)}
                    placeholder="News Title *"
                />
                {newsError ? <Text style={styles.error}>Enter a News Title*</Text> : null}

                <TextInput
                    style={styles.input}
                    value={description}
                    onChangeText={(text) => setDescription(text)}
                    placeholder="Description *"
                />
                {descriptionError ? <Text style={styles.error}>Enter a News Description *</Text> : null}

                <TextInput
                    style={styles.input}
                    value={category}
                    onChangeText={(text) => setCategory(text)}
                    placeholder="Category *"
                />
                {categoryError ? <Text style={styles.error}>Enter a News Description *</Text> : null}

                <View style={styles.filePickerContainer}>
                    <TouchableOpacity style={styles.fileChooseBtn} onPress={handleFilePick}>
                        <Text style={styles.fileChooseText}>Upload Images</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Post</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn2}>
                        <Text style={styles.btnText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: width * 0.075, // 7.5% of screen width
        color: 'black',
        textAlign: 'center',
        marginTop: height * 0.02, // 2% of screen height
        fontWeight: 'bold',
    },
    container: {
        borderColor: 'gray',
        borderWidth: 1,
        height: height * 0.7, // 70% of screen height
        marginTop: height * 0.06, // 6% of screen height
        marginRight: width * 0.025, // 2.5% of screen width
        marginLeft: width * 0.025, // 2.5% of screen width
    },
    input: {
        marginLeft: width * 0.07, // 7% of screen width
        marginRight: width * 0.07, // 7% of screen width
        marginTop: height * 0.04, // 4% of screen height
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 5,
        paddingLeft: 10,
        color: 'black',
        shadowColor: 'black',
        elevation: 2,
        shadowOpacity: 0.7,
        backgroundColor: 'white',
        height: height * 0.06, // 6% of screen height
    },
    error: {
        color: 'red',
        marginLeft: width * 0.07, // 7% of screen width
        fontSize: width * 0.035, // 3.5% of screen width
    },
    filePickerContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.03, // 3% of screen height
    },
    fileChooseBtn: {
        height: height * 0.12, // 12% of screen height
        width: width * 0.35, // 35% of screen width
        borderRadius: 20,
        borderColor: "black",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: 'black',
        elevation: 2,
        shadowOpacity: 0.7,
        backgroundColor: 'white',
    },
    fileChooseText: {
        fontSize: width * 0.03, // 3% of screen width
        color: "grey",
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: height * 0.03, // 3% of screen height
    },
    btn: {
        height: height * 0.065, // 6.5% of screen height
        width: width * 0.25, // 25% of screen width
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: 'black',
        elevation: 2,
        shadowOpacity: 0.7,
        backgroundColor: 'blue',
    },
    btn2: {
        height: height * 0.065, // 6.5% of screen height
        width: width * 0.25, // 25% of screen width
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: 'black',
        elevation: 2,
        shadowOpacity: 0.7,
        backgroundColor: 'red',
    },
    btnText: {
        color: 'white',
        fontSize: width * 0.04, // 4% of screen width
    },
});

export default AddNewsIndustry;

