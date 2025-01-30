import React, { useState } from 'react';
import { Image, TouchableOpacity, View, Text, StatusBar, StyleSheet, Alert, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import LinearGradient from "react-native-linear-gradient";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NearMeIndustry from './NearMeIndustry';
import BookmarksIndustry from './BookmarksIndustry';
import FeedBackIndustry from './FeedBackIndustry';
import GetInTouchIndustry from './GetInTouchIndustry';
import MyAccountIndustry from './MyAccountIndustry';
import Activity from '../Student/Activity';
import FAQ from '../Student/FAQ';
import HomeIndustry from './HomeIndustry';
import BlogIndustry from './BlogIndustry';
import ChallengesIndustry from './ChallengesIndustry';
import JobIndustry from './JobIndustry';
import PolesIndustry from './PolesIndustry';
import TalksIndustry from './TalksIndustry';
import InternshipIndustry from './InternshipIndustry';
import AboutUs from '../Student/AboutUs';
import ShareInternshipIndustry from './ShareInternshipIndustry';
import ReceivedApplicationIndustry from './ReceivedApplicationIndustry';
import ShareJobIndustry from './ShareJobIndustry';
import ShareAdvertiseInustry from './ShareAdvertiseIndustry';
import My_EnquiryIndustry from './My_EnquiryIndustry';
import Blog2Industry from './Blog2Industry';
import ExploreEventsIndustry from './ExploreEventsIndustry';
import ModalComponent from './ModalComponent';
import NewsIndustry from './NewsIndustry';
import News2Industry from './News2Industry';
import AddblogIndustry from './AddblogIndus';
import PodcastIndustry from './PodcastIndustry';
import Addpodindus from './AddPodcast';
import AddPodcast from './AddPodcast';
import AddInternIndustry from './AddInternIndustry';
import Podcast2Industry from './Podcast2Industry';
import AddNewsIndustry from './AddNewsIndustry';
import EditMyAccountIndustry from './EditMyAccountIndustry';
import Talks2indus from './Talks2indus';
import Jobmore from './Jobmore';
import Internmore from './Internmore';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ label, icons, onPress }) => (
    <TouchableOpacity style={styles.drawerItem} onPress={onPress}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name={icons} size={33} color="black" style={styles.drawerIcon} />
            <Text style={styles.drawerLabel}>{label}</Text>
        </View>
    </TouchableOpacity>
);

function CustomHeader({ navigation }) {
    return {
        headerStyle: {
            height: 110,
        },
        headerBackground: () => (
            <LinearGradient
                colors={['#8B41A2', '#983F7F', '#AF3B52', '#BD3633']}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{ flex: 1 }}
            />
        ),
        headerRight: () => (
            <Image
                source={require('./photo/logo.png')}
                style={{ height: 60, width: 160, marginRight: 10 }}
            />
        ),
        headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image
                    source={require('./photo/userIcon.png')}
                    style={{
                        height: 60,
                        width: 60,
                        borderRadius: 30,
                        marginLeft: 15,
                        borderColor: "white",
                        borderWidth: 1
                    }}
                />
            </TouchableOpacity>
        ),
    };
};

function TabNavigator() {
    const [modalVisible, setModalVisible] = useState(false);

    const handleOpenModal = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };
    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator
                screenOptions={({ navigation }) => ({
                    ...CustomHeader({ navigation }),
                    tabBarStyle: { height: 60 },
                    tabBarLabelStyle: {
                        fontSize: 13,
                        color: 'black'
                    },
                    headerTitle: ' ',
                })}
            >
                <Tab.Screen
                    name='FEEDS'
                    component={HomeIndustry}
                    options={{
                        tabBarIcon: () => (
                            <Ionicons name="home-outline" size={30} color="black" />
                        ),
                    }}
                />
                <Tab.Screen
                    name='NEAR ME'
                    component={NearMeIndustry}
                    options={{
                        tabBarIcon: () => (
                            <Ionicons name="location-outline" size={30} color="black" />
                        ),
                    }}
                />
                <Tab.Screen
                    name='ACTIVITIES'
                    component={Activity}
                    options={{
                        tabBarIcon: () => (
                            <Ionicons name="grid-outline" size={30} />
                        ),
                        tabBarButton: (props) => (
                            <TouchableOpacity
                                {...props}
                                onPress={handleOpenModal}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name='FAQ'
                    component={FAQ}
                    options={{
                        tabBarIcon: () => (
                            <Ionicons name="reader-outline" size={34} />
                        ),
                    }}
                />
                <Tab.Screen
                    name='ShareInternshipIndustry'
                    component={ShareInternshipIndustry}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='ReceivedApplicationIndustry'
                    component={ReceivedApplicationIndustry}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='ShareJobIndustry'
                    component={ShareJobIndustry}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='FEEDBACK'
                    component={FeedBackIndustry}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='ShareAdvertiseInustry'
                    component={ShareAdvertiseInustry}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='My_Enquiry'
                    component={My_EnquiryIndustry}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='Bookmarks'
                    component={BookmarksIndustry}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='AboutUs'
                    component={AboutUs}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='GetInTouchIndustry'
                    component={GetInTouchIndustry}
                    options={{
                        tabBarButton: () => null,
                    }}
                />

                <Tab.Screen
                    name='MyAccount'
                    component={MyAccountIndustry}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='Blog'
                    component={BlogIndustry}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='Challenges'
                    component={ChallengesIndustry}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='Job'
                    component={JobIndustry}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='Poles'
                    component={PolesIndustry}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='Talks'
                    component={TalksIndustry}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='Internship'
                    component={InternshipIndustry}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='Blog2'
                    component={Blog2Industry}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='ExploreEvent'
                    component={ExploreEventsIndustry}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='News'
                    component={NewsIndustry}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='News2'
                    component={News2Industry}
                    options={{
                        tabBarButton: () => null,
                    }}
                />

                <Tab.Screen
                    name='AddblogIndustry'
                    component={AddblogIndustry}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='PodcastIndustry'
                    component={PodcastIndustry}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='AddPodcast'
                    component={AddPodcast}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='AddInternIndustry'
                    component={AddInternIndustry}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='Podcast2Industry'
                    component={Podcast2Industry}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='AddNewsIndustry'
                    component={AddNewsIndustry}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='EditMyAccountIndustry'
                    component={EditMyAccountIndustry}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='Talks2indus'
                    component={Talks2indus}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='Jobmore'
                    component={Jobmore}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='Internmore'
                    component={Internmore}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
            </Tab.Navigator>
            <ModalComponent
                visible={modalVisible}
                onClose={handleCloseModal}
            />
        </View>
    );
};

function DrawerContent(props) {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.profileContainer}>
                <Image
                    source={require('./photo/userIcon.png')}
                    style={styles.profilePhoto}
                />
                <Text style={styles.profileName}>User Name</Text>
                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", height: 20, width: 70 }}
                    onPress={() => props.navigation.navigate('Main', { screen: 'MyAccount' })}>
                    <Text style={styles.MyAccName}>My Account</Text>
                </TouchableOpacity>

            </View>
            <ScrollView style={{ flex: 1, paddingTop: 20, marginBottom: 20 }}>
                <CustomDrawerItem
                    label="Share Internship with us"
                    icons={"share-outline"}
                    onPress={() => props.navigation.navigate('Main', { screen: 'ShareInternshipIndustry' })}
                />
                <CustomDrawerItem
                    label="Received Applications"
                    icons={"reader-outline"}
                    onPress={() => props.navigation.navigate('Main', { screen: 'ReceivedApplicationIndustry' })}
                />
                <CustomDrawerItem
                    label="Share Job with us"
                    icons={"share-social-outline"}
                    onPress={() => props.navigation.navigate('Main', { screen: 'ShareJobIndustry' })}
                />
                <CustomDrawerItem
                    icons={"thumbs-up-outline"}
                    label="Feedback"
                    onPress={() => props.navigation.navigate('Main', { screen: 'FEEDBACK' })}
                />
                <CustomDrawerItem
                    icons={"add-circle-outline"}
                    label="Advertise with Us"
                    onPress={() => props.navigation.navigate('Main', { screen: 'ShareAdvertiseInustry' })}
                />
                <CustomDrawerItem
                    icons={"help-circle-outline"}
                    label="My Enquiry"
                    onPress={() => props.navigation.navigate('Main', { screen: 'My_Enquiry' })}
                />
                <CustomDrawerItem
                    icons={"bookmark-outline"}
                    label="Bookmarks"
                    onPress={() => props.navigation.navigate('Main', { screen: 'Bookmarks' })}
                />
                <TouchableOpacity style={styles.drawerItem}
                    onPress={() => Alert.alert('Logout Successfully Industry')}>
                    <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "red", width: 160, height: 40, borderRadius: 10 }}>
                        <Ionicons name={"log-out-outline"} size={30} color="white" style={styles.drawerIcon} />
                        <Text style={{ fontSize: 30, color: "white" }}>LogOut</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('Main', { screen: 'AboutUs' })}>
                    <View>
                        <Text style={{ fontSize: 20, color: "grey", marginLeft: 10 }}>About Us</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('Main', { screen: 'GetInTouchIndustry' })}>
                    <View>
                        <Text style={{ fontSize: 20, color: "grey", marginLeft: 10 }}>Get In Touch</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View >
    );
};

const MainNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
            screenOptions={{ headerShown: false }}
        >
            <Drawer.Screen name="Main" component={TabNavigator} />
        </Drawer.Navigator>
    );
};

const NavigationForIndustry = () => {
    return (
        <NavigationContainer independent={true}>
            <StatusBar backgroundColor={'black'} />
            <MainNavigator />
        </NavigationContainer>
    );
};



const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        backgroundColor: "#1D1B20",
        paddingTop: 20,
    },
    profileContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        backgroundColor: '#333',
    },
    profilePhoto: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    MyAccName: {
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 5,
        color: 'white',
    },
    drawerItem: {
        fontSize: 20,
        color: 'white',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 30,
    },
    drawerLabel: {
        marginLeft: 10,
        fontSize: 15
    },
    drawerIcon: {
        marginRight: 15,
        marginLeft: 10,
    },
});


export default NavigationForIndustry;
