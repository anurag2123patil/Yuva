import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';
const AddblogIndustry = () => {

    const [title, setTitle] = useState('');
    const [descript, setDescription] = useState('');
    const [pos, setPost] = useState('');
    const [written, setWritten] = useState('');
    const [category, setCategory] = useState('');


    const [titleError, setTitleError] = useState(false);
    const [descriptError, setDescriptionError] = useState(false);
    const [posError, setPostError] = useState(false);
    const [writtenError, setWrittenError] = useState(false);
    const [categoryError, setCategoryError] = useState(false);



    const handleFilePick = async () => {

    };


    const display = () => {

        { !title ? setTitleError(true) : setTitleError(false) }
        { !descript ? setDescriptionError(true) : setDescriptionError(false) }
        { !pos ? setPostError(true) : setPostError(false) }
        { !written ? setWrittenError(true) : setWrittenError(false) }
        { !category ? setCategoryError(true) : setCategoryError(false) }

        if (!title || !descript || !pos || !written) {
            return false
        }
        else {
            console.warn("Submited");

        }

    }
    const call = () => {
        console.warn("Close button clicked");
    }

    return (
        <ScrollView>
            <View style={styles.Feed}><Text style={styles.Text}>Add Blog Details</Text></View>
            <TextInput style={styles.input}
                value={title}
                onChangeText={(text) => setTitle(text)}
                placeholder="Blog Title*"
            />
            {titleError ? <Text style={styles.error}>Enter a Blog detail*</Text> : null}

            <TextInput style={styles.input}
                value={descript}
                onChangeText={(text) => setDescription(text)}
                placeholder="Description*"
            />
            {descriptError ? <Text style={styles.error}>Enter a Blog  Description*</Text> : null}


            <TextInput style={styles.input}
                value={pos}
                onChangeText={(text) => setPost(text)}
                placeholder="Post By*"
            />
            {posError ? <Text style={styles.error}>Enter a Blog youtube posted by*</Text> : null}

            <TextInput style={styles.input}
                value={written}
                onChangeText={(text) => setWritten(text)}
                placeholder="Written By*"
            />
            {writtenError ? <Text style={styles.error}>Enter a Blog youtube posted by*</Text> : null}

            <TextInput style={styles.input}
                value={category}
                onChangeText={(text) => setWritten(text)}
                placeholder="Category*"
            />
            {categoryError ? <Text style={styles.error}>Enter a Blog category*</Text> : null}

            <View>
                <Text style={{ fontSize: 20, flexDirection: 'row', justifyContent: 'space-evenly' , marginLeft:20,marginTop:10,color:'black'}}>Podcast Audio/Video</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", }}>
                <TouchableOpacity style={styles.fileChooseBtn} onPress={handleFilePick}>
                    <Text style={{ fontSize: 12, color: "black" }}>Choose File </Text>
                </TouchableOpacity>
            </View>
            <View  style={styles.imp}>
                <Button title='POST' onPress={display} color='#800080' ></Button>
                <Button title='CLOSE' onPress={call} color='#ffd700'></Button>

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    Text: {

        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        shadowColor: 'black',
        elevation: 8,
        shadowOpacity: 0.8,
        marginTop: 20,
    },
    Feed: {

        alignItems: 'center',
        marginTop: 60
    },

    input: {

        marginLeft: 30,
        marginRight: 30,
        marginTop: 30,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 5,
        paddingLeft: 10,

    },
    gradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 5,
        color: 'blue',
    },
    error: {
        color: 'red',
        marginLeft: 30
    },
    main: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    fileChooseBtn: {
        height: 60,
        width: 120,
        borderRadius: 20,
        marginTop: 15,
        borderColor: "black",
        borderWidth: 1,
        justifyContent: "space-around",
        alignItems: "center"

    },
    imp: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 15,
    }


});

export default AddblogIndustry;