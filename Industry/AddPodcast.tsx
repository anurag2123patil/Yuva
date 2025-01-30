import React, { useState } from 'react';
import { Text, Button, View, ScrollView, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';


const AddPodcast = () => {

    const [title, setTitle] = useState('');
    const [descript, setDescription] = useState('');
    const [catego, setCategory] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [descriptError, setDescriptionError] = useState(false);
    const [categoError, setCategoryError] = useState(false);

    const handleFilePick = async () => {

    };

    const display = () => {
        
        { !title ? setTitleError(true) : setTitleError(false) }
        { !descript ? setDescriptionError(true) : setDescriptionError(false) }
        { !catego ? setCategoryError(true) : setCategoryError(false) }

        if (!title || !descript || !catego) {
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
            <View style={styles.Feed}><Text style={styles.Text}>Add Podcast Details</Text></View>

            <TextInput style={styles.input}
                value={title}
                onChangeText={(text) => setTitle(text)}
                placeholder="Title*"
            />
            {titleError ? <Text style={styles.error}>Enter a Podacast details*</Text> : null}

            <TextInput style={styles.input}
                value={descript}
                onChangeText={(text) => setDescription(text)}
                placeholder="Description*"
            />
            {descriptError ? <Text style={styles.error}>Enter a Podcast Description*</Text> : null}

            <TextInput style={styles.input}
                value={catego}
                onChangeText={(text) => setCategory(text)}
                placeholder="Category"
            />
            {categoError ? <Text style={styles.error}>Required field* </Text> : null}


            <View style={{  flexDirection:'row', justifyContent: "space-evenly", alignItems: "center",}}>
                        <TouchableOpacity style={styles.fileChooseBtn} onPress={handleFilePick}>
                            <Text style={{ fontSize: 12, color: "black" }}>choose files </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.fileChooseBtn} onPress={handleFilePick}>
                            <Text style={{ fontSize: 12, color: "black" }}>Upload Images</Text>
                        </TouchableOpacity>
            </View>
            

            <View style={{flexDirection:'row',justifyContent:'space-evenly' }} style={styles.imp}>
                <Button title='POST' onPress={display} color='#800080' ></Button>
                <Button title='CLOSE' onPress={call} color='#ffd700'></Button>

            </View>
        

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    Text: {

        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        shadowColor: 'black',
        elevation: 8,
        shadowOpacity: 0.8,
        marginBottom:25
    },
    Feed: {

        alignItems: 'center',
        marginTop: 60
    },
    input: {

        // marginLeft: 30,
        // marginRight: 30,
        // marginTop: 50,
        // borderColor: 'black',
        // borderWidth: 0.5,
        // borderRadius: 5,
        // paddingLeft: 10,
        // fontSize:20

        padding: 10,
        margin:0.5,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10,
        marginTop:30,
        backgroundColor:'#dda0dd',
        borderRadius:10,
        elevation:8,
        shadowOpacity:0.8,
        shadowColor: 'black',
        fontSize: 18
    },
    error: {
        color: 'red',
        marginLeft: 30
    },
    // main:{
    //     flex:1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     color:'blue'

    // },
    // insane: {
    //     flex:1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     // marginBottom: 20,
    //     color:'orange'
    // }
    fileChooseBtn: {
        height: 90,
        width: 140,
        borderRadius: 20,
        marginTop: 30,
        borderColor: "black",
        borderWidth: 1,
        justifyContent: "space-around",
        alignItems:"center"
    },
    imp: {
        padding: 10,
        margin:0.5,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10,
        marginTop:50,
        backgroundColor:'#dda0dd',
        borderRadius:10,
        elevation:8,
        shadowOpacity:0.8,
        shadowColor: 'black',
        fontSize: 18
    }


});
export default AddPodcast;