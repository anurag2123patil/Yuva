import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Dimensions, ScrollView, Button, TouchableOpacity } from 'react-native';

const initialData = [
    { id: '01', name: 'Neha madhukar Gujar', email: 'abc@gmail.com', contact: '2222', clgn: 'COEP', clgid: '1005', clgadd: 'vidyavikas', city: 'Nashik', district: 'Nashik', state: 'Maharashtra', pin: '425001', desc: 'abbbbbbbbbbbb', status: 'active' },
    { id: '02', name: 'Mohini ram Patil', email: 'abc@gmail.com', contact: '2222', clgn: 'COEP', clgid: '1005', clgadd: 'vidyavikas', city: 'Nashik', district: 'Nashik', state: 'Maharashtra', pin: '425001', desc: 'abbbbbbbbbbbb', status: 'active' },
    { id: '03', name: 'Nishu vijay Patil', email: 'abc@gmail.com', contact: '2222', clgn: 'COEP', clgid: '1005', clgadd: 'vidyavikas', city: 'Nashik', district: 'Nashik', state: 'Maharashtra', pin: '425001', desc: 'abbbbbbbbbbbb', status: 'active' },
    { id: '04', name: 'Nil ramesh Pail', email: 'abc@gmail.com', contact: '2222', clgn: 'COEP', clgid: '1005', clgadd: 'vidyavikas', city: 'Nashik', district: 'Nashik', state: 'Maharashtra', pin: '425001', desc: 'abbbbbbbbbbbb', status: 'active' },
    { id: '05', name: 'Parth suresh Patil', email: 'abc@gmail.com', contact: '2222', clgn: 'COEP', clgid: '1005', clgadd: 'vidyavikas', city: 'Nashik', district: 'Nashik', state: 'Maharashtra', pin: '425001', desc: 'abbbbbbbbbbbb', status: 'active' },
];

const screenWidth = Dimensions.get('window').width;

const AmbassadorEnquiry = () => {
    const [data, setData] = useState(initialData);

    const deleteItem = (id) => {
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>YOUR APPLICATIONS</Text>
            </View>
            <ScrollView style={styles.container} horizontal={true}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.row}>
                            <View style={[styles.cell, styles.smallCell]}>
                                <Text style={styles.text}>{item.id}</Text>
                            </View>
                            <View style={[styles.cell, styles.largeCell]}>
                                <Text style={styles.text}>{item.name}</Text>
                            </View>
                            <View style={[styles.cell, styles.largeCell]}>
                                <Text style={styles.text}>{item.email}</Text>
                            </View>
                            <View style={[styles.cell, styles.largeCell]}>
                                <Text style={styles.text}>{item.contact}</Text>
                            </View>
                            <View style={[styles.cell, styles.largeCell]}>
                                <Text style={styles.text}>{item.clgn}</Text>
                            </View>
                            <View style={[styles.cell, styles.largeCell]}>
                                <Text style={styles.text}>{item.clgid}</Text>
                            </View>
                            <View style={[styles.cell, styles.largeCell]}>
                                <Text style={styles.text}>{item.clgadd}</Text>
                            </View>
                            <View style={[styles.cell, styles.largeCell]}>
                                <Text style={styles.text}>{item.city}</Text>
                            </View>
                            <View style={[styles.cell, styles.largeCell]}>
                                <Text style={styles.text}>{item.district}</Text>
                            </View>
                            <View style={[styles.cell, styles.largeCell]}>
                                <Text style={styles.text}>{item.state}</Text>
                            </View> 
                             <View style={[styles.cell, styles.largeCell]}>
                                <Text style={styles.text}>{item.pin}</Text>
                            </View>  
                            <View style={[styles.cell, styles.largeCell]}>
                                <Text style={styles.text}>{item.desc}</Text>
                            </View>  
                            <View style={[styles.cell, styles.largeCell]}>
                                <Text style={styles.text}>{item.status}</Text>
                            </View>
                            <View style={[styles.cell, styles.largeCell]}>
                                <Button title="Delete" onPress={() => deleteItem(item.id)} />
                            </View>
                        </View>
                    )}
                    ListHeaderComponent={
                        <View style={styles.row}>
                            <View style={[styles.cell, styles.smallCell]}>
                                <Text style={[styles.text, styles.headerTextt]}>Sr. No</Text>
                            </View>
                            <View style={[styles.cell, styles.largeCell]}>
                                <Text style={[styles.text, styles.headerTextt]}>Full Name</Text>
                            </View>
                            <View style={[styles.cell, styles.largeCell]}>
                                <Text style={[styles.text, styles.headerTextt]}>Email Id</Text>
                            </View>
                            <View style={[styles.cell, styles.largeCell]}>
                                <Text style={[styles.text, styles.headerTextt]}>Contact No.</Text>
                            </View>
                            <View style={[styles.cell, styles.largeCell]}>
                                <TouchableOpacity>
                                    <Text style={[styles.text, styles.headerTextt]}>College Name</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.cell, styles.largeCell]}>
                                <Text style={[styles.text, styles.headerTextt]}>College Id</Text>
                            </View>
                            <View style={[styles.cell, styles.largeCell]}>
                                <Text style={[styles.text, styles.headerTextt]}>College Address</Text>
                            </View>
                            <View style={[styles.cell, styles.largeCell]}>
                                <Text style={[styles.text, styles.headerTextt]}>City</Text>
                            </View>
                            <View style={[styles.cell, styles.largeCell]}>
                                <Text style={[styles.text, styles.headerTextt]}>District</Text>
                            </View>
                            <View style={[styles.cell, styles.largeCell]}>
                                <Text style={[styles.text, styles.headerTextt]}>State</Text>
                            </View>
                            <View style={[styles.cell, styles.largeCell]}>
                                <Text style={[styles.text, styles.headerTextt]}>Pincode</Text>
                            </View>
                            <View style={[styles.cell, styles.largeCell]}>
                                <Text style={[styles.text, styles.headerTextt]}>Description</Text>
                            </View>
                            <View style={[styles.cell, styles.largeCell]}>
                                <Text style={[styles.text, styles.headerTextt]}>Status</Text>
                            </View>
                            <View style={[styles.cell, styles.largeCell]}>
                                <Text style={[styles.text, styles.headerTextt]}>Delete</Text>
                            </View>
                        </View>
                    }
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff'
    },
    header: {
        padding: 10,
    },
    headerText: {
        color: 'black',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'semibold'
    },
    headerTextt: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 14,
        fontWeight: 'semibold',
        textAlign: 'center',
        marginTop: 20,
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        borderWidth: 1,
        borderColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: 130,

    },
    smallCell: {
        flex: 1,
    },
    largeCell: {
        flex: 3,
    },
    text: {
        textAlign: 'center',
    },
});
export default AmbassadorEnquiry;