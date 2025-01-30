import React from 'react';
import { Modal, View, Text, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ModalComponent = ({ visible, onClose }) => {
   
    const handleBackgroundPress = () => {
        onClose();
    };
    const navigation = useNavigation(); 


    return (
        
        <Modal
            transparent={true}
            animationType="slide"
            visible={visible}
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={handleBackgroundPress}>
                <View style={styles.modalBackground}>
                    <TouchableWithoutFeedback>
                        <View style={styles.modalContainer}>
                            <Text style={styles.modalText}>Activities</Text>
                            <View style={styles.row}>
                                    <TouchableOpacity style={styles.blogStyle} onPress={()=>navigation.navigate('Blog')}>
                                    <Image
                                        source={require('./photo/blog.png')}
                                        style={styles.blog}
                                    />
                                    <Text style={{ fontSize: 15, marginTop: 2, color: 'black' }}>Blog</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.indusStyle} onPress={()=>navigation.navigate('Challenges')}>
                                    <Image
                                        source={require('./photo/challenges1.png')}
                                        style={styles.indus}
                                    />
                                    <Text style={{ fontSize: 15, color: 'black' }}>Industry</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.blogStyle} onPress={()=>navigation.navigate('Internship')}>
                                    <Image
                                        source={require('./photo/internship1.png')}
                                        style={styles.blog}
                                    />
                                    <Text style={{ fontSize: 15, marginTop: 4, color: 'black' }}>Internship</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.blogStyle} onPress={()=>navigation.navigate('Job')}>
                                    <Image
                                        source={require('./photo/job.png')}
                                        style={styles.blog}
                                    />
                                    <Text style={{ fontSize: 15, marginTop: 4, color: 'black' }}>Job</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.row}>
                                <TouchableOpacity style={styles.blogStyle} onPress={()=>navigation.navigate('News')}>
                                    <Image
                                        source={require('./photo/news3.png')}
                                        style={styles.blog}
                                    />
                                    <Text style={{ fontSize: 15, marginTop: 2, color: 'black' }}>News</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.indusStyle} onPress={()=>navigation.navigate('PodcastIndustry')}>
                                    <Image
                                        source={require('./photo/podcasts1.png')}
                                        style={styles.indus}
                                    />
                                    <Text style={{ fontSize: 15, color: 'black' }}>Podcasts</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.blogStyle} onPress={()=>navigation.navigate('Poles')}>
                                    <Image
                                        source={require('./photo/polls.png')}
                                        style={styles.blog}
                                    />
                                    <Text style={{ fontSize: 15, marginTop: 4, color: 'black' }}>Polls/Survey</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.blogStyle} onPress={()=>navigation.navigate('Talks')}>
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
        width: '100%',
        alignItems: 'center',
        height: 350,
    },
    modalText: {
        fontSize: 30,
        marginBottom: 20,
        color: 'black',
        // fontFamily: 'InriaSerif-Regular',
    },
    closeButton: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
    blog: {
        width: 60,
        height: 60,
    },
    indus: {
        width: 60,
        height: 60,
    },
    blogStyle: {
        flex: 1,
        width: 60,
        justifyContent: "center",
        alignItems: "center",
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    indusStyle: {
        flex: 1,
        width: 60,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default ModalComponent;
