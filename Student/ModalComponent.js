import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ModalComponent = ({ visible, onClose }) => {
    const navigation = useNavigation();

    

    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={visible}
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.modalBackground}>
                    <TouchableWithoutFeedback>
                        <View style={styles.modalContainer}>
                            <Text style={styles.modalText}> Activities </Text>
                            <View style={styles.row}>
                                <TouchableOpacity style={styles.blogStyle}
                                    onPress={() => navigation.navigate('Blog')}>
                                    <Image
                                        source={require('./photo/blog.png')}
                                        style={styles.blog}
                                    />
                                    <Text style={{ fontSize: 15, marginTop: 2, color: 'black' }}>Blog</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.indusStyle}
                                    onPress={() => navigation.navigate('Challenges')}>
                                    <Image
                                        source={require('./photo/challenges1.png')}
                                        style={styles.indus}
                                    />
                                    <Text style={{ fontSize: 15, color: 'black' }}>Industry</Text>
                                    <Text style={{ fontSize: 15, color: 'black' }}>Challenges</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.indusStyle}
                                    onPress={() => navigation.navigate('Internship')}>
                                    <Image
                                        source={require('./photo/internship1.png')}
                                        style={styles.indus}
                                    />
                                    <Text style={{ fontSize: 15, color: 'black' }}>Internship</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.blogStyle}
                                    onPress={() => navigation.navigate('Job')}>
                                    <Image
                                        source={require('./photo/job.png')}
                                        style={styles.blog}
                                    />
                                    <Text style={{ fontSize: 15, marginTop: 4, color: 'black' }}>Job</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.row}>
                                <TouchableOpacity style={styles.blogStyle}
                                    onPress={() => navigation.navigate('News')}>
                                    <Image
                                        source={require('./photo/news11.png')}
                                        style={styles.blog}
                                    />
                                    <Text style={{ fontSize: 15, marginTop: 2, color: 'black' }}>News</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.indusStyle}
                                    onPress={() => navigation.navigate('Podcast')}>
                                    <Image
                                        source={require('./photo/podcasts1.png')}
                                        style={styles.indus}
                                    />
                                    <Text style={{ fontSize: 15, color: 'black' }}>Podcasts</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.indusStyle}
                                    onPress={() => navigation.navigate('Poles')}>
                                    <Image
                                        source={require('./photo/polls.png')}
                                        style={styles.indus}
                                    />
                                    <Text style={{ fontSize: 15, color: 'black' }}>Polls/Survey</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.blogStyle}
                                    onPress={() => navigation.navigate('Talks')}>
                                    <Image
                                        source={require('./photo/couple1.png')}
                                        style={styles.blog}
                                    />
                                    <Text style={{ fontSize: 15, marginTop: 4, color: 'black' }}>Talks</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '100%',
        height: 350,
        alignItems: 'center',
    },
    modalText: {
        color: 'black',
        fontSize: 18,
        marginBottom: 20,
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
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});

export default ModalComponent;
