import React, { useState } from 'react';
import { Image, TouchableOpacity, View, Text, StatusBar, StyleSheet, Alert, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
// import LinearGradient from "react-native-linear-gradient";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeMerchant from './HomeMerchant';
import NearMeMerchant from './NearMeMerchant';
import Activity from '../Student/Activity';
import FAQ from '../Student/FAQ';
import My_EnquiryMerchant from './MerchantEnquireNow';
import ReceivedApplicationMerchant from './ReceivedApplicationMerchant';
// import FeedBackMerchant from './FeedBackMerchant';
import ShareAdvertiseMerchant from './ShareAdvertiseMerchant';
import AboutUs from '../Student/AboutUs';
import ContactUsIndustry from '../Industry/GetInTouchIndustry';
import MyAccountMerchant from './MyAccountMerchant';
import Blogs from '../Student/Blog';
import Challenges from '../Student/Challenges';
import Job from '../Student/Job';
import Poles from '../Student/Poles';
import Talks from '../Student/Talks';
import ModalComponent from './ModalComponent';
import Internship from '../Student/Internship';
import MerchantAboutUs from './MerchantAboutUs';
import FeedbackMerchant from './FeedbackMerchant';
import MerchantEditProfile from './MerchantEditProfile';
import BlogMerchant from './BlogMerchant';
import Blog2Merchant from './Blog2Merchant';
import ChallengesMerchant from './ChallengesMerchant';
import JobMerchant from './JobMerchant';
import JobMoreMerchant from './JobMoreMerchant';
import PolesMerchant from './PolesMerchant';
import TalkMerchant from './TalkMerchant';
import Talks2Merchant from './Talk2Merchant';
import Talk2Merchant from './Talk2Merchant';
import InternshipMerchant from './InternshipMerchant';
import InternMoreMerchant from './InternMoreMerchant';
import MerchantViewAll from './MerchantViewAll';
import NewsMerchant from './NewsMerchant';
import News2Merchant from './News2Merchant';
import PodcastMerchant from './PodcastMerchant';
import Podcast2Merchant from './Podcast2Merchant';



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
                    component={HomeMerchant}
                    options={{
                        tabBarIcon: () => (
                            <Ionicons name="home-outline" size={30} color="black" />
                        ),
                    }}
                />
                <Tab.Screen
                    name='NEAR ME'
                    component={NearMeMerchant}
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
                    name='My_Enquiry'
                    component={My_EnquiryMerchant}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='ReceivedApplicationMerchant'
                    component={ReceivedApplicationMerchant}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='FeedbackMerchant'
                    component={FeedbackMerchant}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='ShareAdvertiseMerchant'
                    component={ShareAdvertiseMerchant}
                    options={{
                        tabBarButton: () => null,
                    }}
                />

                <Tab.Screen
                    name='ContactUs'
                    component={ContactUsIndustry}
                    options={{
                        tabBarButton: () => null,
                    }}
                />

                <Tab.Screen
                    name='MyAccount'
                    component={MyAccountMerchant}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='BlogMerchant'
                    component={BlogMerchant}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                 <Tab.Screen
                    name='Blog2Merchant'
                    component={Blog2Merchant}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='ChallengesMerchant'
                    component={ChallengesMerchant}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='JobMerchant'
                    component={JobMerchant}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                 <Tab.Screen
                    name='JobMoreMerchant'
                    component={JobMoreMerchant}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='PolesMerchant'
                    component={PolesMerchant}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='TalkMerchant'
                    component={TalkMerchant}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                 <Tab.Screen
                    name='Talk2Merchant'
                    component={Talk2Merchant}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='InternshipMerchant'
                    component={InternshipMerchant}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                 <Tab.Screen
                    name='InternMoreMerchant'
                    component={InternMoreMerchant}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='MerchantAboutUs'
                    component={MerchantAboutUs}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='MerchantEditProfile'
                    component={MerchantEditProfile}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='MerchantViewAll'
                    component={MerchantViewAll}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='NewsMerchant'
                    component={NewsMerchant}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                 <Tab.Screen
                    name='PodcastMerchant'
                    component={PodcastMerchant}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='Podcast2Merchant'
                    component={Podcast2Merchant}
                    options={{
                        tabBarButton: () => null,
                    }}
                />
                <Tab.Screen
                    name='News2Merchant'
                    component={News2Merchant}
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
                    label="My Enquiry"
                    icons={"share-outline"}
                    onPress={() => props.navigation.navigate('Main', { screen: 'My_Enquiry' })}
                />
                <CustomDrawerItem
                    label="Received Applications"
                    icons={"reader-outline"}
                    onPress={() => props.navigation.navigate('Main', { screen: 'ReceivedApplicationMerchant' })}
                />
                <CustomDrawerItem
                    label="Feedback"
                    icons={"thumbs-up-outline"}
                    onPress={() => props.navigation.navigate('Main', { screen: 'FeedbackMerchant' })}
                />
                <CustomDrawerItem
                    label="Advertise with Us"
                    icons={"add-circle-outline"}
                    onPress={() => props.navigation.navigate('Main', { screen: 'ShareAdvertiseMerchant' })}
                />
                <TouchableOpacity style={styles.drawerItem}
                    onPress={() => Alert.alert('Logout Successfully Merchant')}>
                    <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "red", width: 160, height: 40, borderRadius: 10 }}>
                        <Ionicons name={"log-out-outline"} size={30} color="white" style={styles.drawerIcon} />
                        <Text style={{ fontSize: 30, color: "white" }}>LogOut</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('Main', { screen: 'MerchantAboutUs' })}>
                    <View>
                        <Text style={{ fontSize: 20, color: "grey", marginLeft: 10 }}>About Us</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.drawerItem} onPress={() => props.navigation.navigate('Main', { screen: 'ContactUs' })}>
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

const NavigationForMerchant = () => {
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


export default NavigationForMerchant;