import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';
const AddInternIndustry = () => {

    const [title, setTitle] = useState('');
    const [descript, setDescription] = useState('');
    const [pos, setPosition] = useState('');
    const [per, setPeriod] = useState('');
    const [num, setNumber] = useState('');
    const [skill, setSkill] = useState('');
    const [mod, setMode] = useState('');
    const [loc, setLocation] = useState('');
    const [add, setAddress] = useState('');
    const [lin, setLink] = useState('');


    const [titleError, setTitleError] = useState(false);
    const [descriptError, setDescriptionError] = useState(false);
    const [posError, setPositionError] = useState(false);
    const [perError, setPeriodError] = useState(false);
    const [numError, setNumberError] = useState(false);
    const [skillError, setSkillError] = useState(false);
    const [modError, setModeError] = useState(false);
    const [locError, setLocationError] = useState(false);
    const [addError, setAddressError] = useState(false);
    const [linError, setLinkError] = useState(false);

    const handleFilePick = async () => {

    };


    const display = () => {

        { !title ? setTitleError(true) : setTitleError(false) }
        { !descript ? setDescriptionError(true) : setDescriptionError(false) }
        { !pos ? setPositionError(true) : setPositionError(false) }
        { !per ? setPeriodError(true) : setPeriodError(false) }
        { !num ? setNumberError(true) : setPeriodError(false) }
        { !skill ? setSkillError(true) : setPeriodError(false) }
        { !mod ? setModeError(true) : setModeError(false) }
        { !loc ? setLocationError(true) : setLocationError(false) }
        { !add ? setAddressError(true) : setAddressError(false) }
        { !lin ? setLinkError(true) : setLinkError(false) }


        if (!title || !descript || !pos || !per || !num || !skill || !mod || !loc || !add || !lin) {
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
            <View style={styles.Feed}>
                <Text style={styles.Text}>Add Internship Details</Text>
            </View>
            <TextInput style={styles.input}
                value={title}
                onChangeText={(text) => setTitle(text)}
                placeholder="Company Name*"
            />
            {titleError ? <Text style={styles.error}>Enter a valid detail*</Text> : null}

            <TextInput style={styles.input}
                value={descript}
                onChangeText={(text) => setDescription(text)}
                placeholder="Internship Description*"
            />
            {descriptError ? <Text style={styles.error}>Enter a Internship  Description*</Text> : null}


            <TextInput style={styles.input}
                value={pos}
                onChangeText={(text) => setPosition(text)}
                placeholder="Internship Position**"
            />
            {posError ? <Text style={styles.error}>Enter a internship Position*</Text> : null}

            <TextInput style={styles.input}
                value={per}
                onChangeText={(text) => setPeriod(text)}
                placeholder="Internship Period*"
            />
            {perError ? <Text style={styles.error}>Enter a internship period*</Text> : null}

            <TextInput style={styles.input}
                value={num}
                onChangeText={(text) => setNumber(text)}
                placeholder="Number of Positions*"
            />
            {numError ? <Text style={styles.error}>Enter a Number of Positions*</Text> : null}

            <TextInput style={styles.input}
                value={skill}
                onChangeText={(text) => setSkill(text)}
                placeholder="Skills*"
            />
            {skillError ? <Text style={styles.error}>Enter a Skills*</Text> : null}

            <TextInput style={styles.input}
                value={mod}
                onChangeText={(text) => setMode(text)}
                placeholder="Internship Mode*"
            />
            {modError ? <Text style={styles.error}>Enter a internhip Mode*</Text> : null}


            <TextInput style={styles.input}
                value={loc}
                onChangeText={(text) => setLocation(text)}
                placeholder="Geo Location Link*"
            />
            {locError ? <Text style={styles.error}>Enter a Internship Location*</Text> : null}


            <TextInput style={styles.input}
                value={add}
                onChangeText={(text) => setAddress(text)}
                placeholder="Company Address*"
            />
            {addError ? <Text style={styles.error}>Enter a Company Address*</Text> : null}

            <TextInput style={styles.input}
                value={lin}
                onChangeText={(text) => setNumber(text)}
                placeholder="Website Link*"
            />
            {linError ? <Text style={styles.error}>Enter a Website Link*</Text> : null}


            <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", }}>
                <TouchableOpacity style={styles.fileChooseBtn} onPress={handleFilePick}>
                    <Text style={{ fontSize: 12, color: "black" }}>choose files </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }} style={styles.imp}>
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

        alignItems: 'center'
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
        marginBottom:20
    }


});

export default AddInternIndustry;