import React, { useState } from 'react';
import { Image, TouchableOpacity, View, Text, StatusBar, StyleSheet, Alert, ScrollView, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import NearMe from './NearMe';
import Activity from './Activity';
import FAQ from './FAQ';
import FeedBack from './FeedBack';
import Bookmarks from './Bookmarks';
import Internship_Application from './Internship_Application';
import Job_Application from './Job_Application';
import My_Enquiry from './My_Enquiry';
import My_Network from './My_Network';
import Become_Ambassador from './Become_Ambassador';
import AboutUs from './AboutUs';
import ContactUs from './GetInTouch';
import MyAccout from './MyAccount';
import Blog from './Blog';
import Challenges from './Challenges';
import Job from './Job';
import Poles from './Poles';
import Talks from './Talks';
import Internship from './Internship';
import ExploreEvent from './ExploreEvents';
import ModalComponent from './ModalComponent';
import All_Ambassador from './All_Ambassador';
import News from './News';
import Podcast from './Podcast';
import Podcast2 from './Podcast2';
import BlogPage2 from './BlogPage2';
import EventRegistration from './EventRegistration';
import EventRegistrationNext from './EventRegistrationNext';
import News2 from './News2';
import Talks2 from './Talks2';
import EditMyAccount from './EditMyAccount';
import Jobmore from './Jobmore';
import Internmore from './Internmore';
import JobApply from './JobApply';
import Internapply from './Internapply';
import MerchantEnquiry from './MerchantEnquiry';
import EventEnquiries from './EventEnquiries';
import AmbassadorEnquiry from './AmbassadorEnquiry';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const { width, height } = Dimensions.get('window');

const CustomDrawerItem = ({ label, icons, onPress }) => (
    <TouchableOpacity style={styles.drawerItem} onPress={onPress}>
        <View style={styles.drawerItemContent}>
            <Ionicons name={icons} size={24} color="black" style={styles.drawerIcon} />
            <Text style={styles.drawerLabel}>{label}</Text>
        </View>
    </TouchableOpacity>
);

function CustomHeader({ navigation }) {
    return {
        headerStyle: {
            height: height * 0.15,
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
                style={styles.headerLogo}
            />
        ),
        headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.headerIconContainer}>
                <Image
                    source={require('./photo/userIcon.png')}
                    style={styles.headerIcon}
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
                    tabBarStyle: { height: height * 0.08 },
                    tabBarLabelStyle: {
                        fontSize: width * 0.04,
                        color: 'black',
                    },
                    headerTitle: ' ',
                })}
            >
                <Tab.Screen
                    name='FEEDS'
                    component={Home}
                    options={{
                        tabBarIcon: () => (
                            <Ionicons name="home-outline" size={30} color="black" />
                        ),
                    }}
                />
                <Tab.Screen
                    name='NEAR ME'
                    component={NearMe}
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
                            <Ionicons name="grid-outline" size={30} color="black" />
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
                            <Ionicons name="reader-outline" size={34} color="black" />
                        ),
                    }}
                />
                {/* Other Tab.Screen components */}
                <Tab.Screen
                    name='All_Ambassador'
                    component={All_Ambassador}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='Bookmarks'
                    component={Bookmarks}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='Become_Ambassador'
                    component={Become_Ambassador}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='FEEDBACK'
                    component={FeedBack}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='Internship_Application'
                    component={Internship_Application}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='Job_Application'
                    component={Job_Application}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='My_Enquiry'
                    component={My_Enquiry}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='My_Network'
                    component={My_Network}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='AboutUs'
                    component={AboutUs}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='ContactUs'
                    component={ContactUs}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='MyAccount'
                    component={MyAccout}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='Blog'
                    component={Blog}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='Blog2'
                    component={BlogPage2}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='Challenges'
                    component={Challenges}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='Job'
                    component={Job}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='Poles'
                    component={Poles}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='Talks'
                    component={Talks}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='Podcast2'
                    component={Podcast2}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='Internship'
                    component={Internship}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='News'
                    component={News}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='Podcast'
                    component={Podcast}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='ExploreEvent'
                    component={ExploreEvent}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='EventRegister'
                    component={EventRegistration}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='EventRegisterNext'
                    component={EventRegistrationNext}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='News2'
                    component={News2}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='Talks2'
                    component={Talks2}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='EditProfile'
                    component={EditMyAccount}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='Jobmore'
                    component={Jobmore}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='JobApply'
                    component={JobApply}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='Internmore'
                    component={Internmore}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='InternApply'
                    component={Internapply}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='EventEnquiries'
                    component={EventEnquiries}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='MerchantEnquiry'
                    component={MerchantEnquiry}
                    options={{ tabBarButton: () => null }}
                />
                <Tab.Screen
                    name='AmbassadorEnquiry'
                    component={AmbassadorEnquiry}
                    options={{ tabBarButton: () => null }}
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
        <View style={styles.drawerContent}>
            <View style={styles.profileContainer}>
                <Image
                    source={require('./photo/userIcon.png')}
                    style={styles.profilePhoto}
                />
                <Text style={styles.profileName}>User Name</Text>
                <TouchableOpacity
                    style={styles.myAccountButton}
                    onPress={() => props.navigation.navigate('Main', { screen: 'MyAccount' })}
                >
                    <Text style={styles.myAccountText}>My Account</Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <CustomDrawerItem
                    label="All Ambassador"
                    icons="people-outline"
                    onPress={() => props.navigation.navigate('Main', { screen: 'All_Ambassador' })}
                />
                <CustomDrawerItem
                    label="Bookmarks"
                    icons="bookmark-outline"
                    onPress={() => props.navigation.navigate('Main', { screen: 'Bookmarks' })}
                />
                <CustomDrawerItem
                    icons="ribbon-outline"
                    label="Become Ambassador"
                    onPress={() => props.navigation.navigate('Main', { screen: 'Become_Ambassador' })}
                />
                <CustomDrawerItem
                    icons="chatbox-ellipses-outline"
                    label="Feedback"
                    onPress={() => props.navigation.navigate('Main', { screen: 'FEEDBACK' })}
                />
                <CustomDrawerItem
                    icons="document-text-outline"
                    label="Internship Application"
                    onPress={() => props.navigation.navigate('Main', { screen: 'Internship_Application' })}
                />
                <CustomDrawerItem
                    icons="briefcase-outline"
                    label="Job Application"
                    onPress={() => props.navigation.navigate('Main', { screen: 'Job_Application' })}
                />
                <CustomDrawerItem
                    icons="help-circle-outline"
                    label="My Enquiry"
                    onPress={() => props.navigation.navigate('Main', { screen: 'My_Enquiry' })}
                />
                <CustomDrawerItem
                    icons="git-network-sharp"
                    label="My Network"
                    onPress={() => props.navigation.navigate('Main', { screen: 'My_Network' })}
                />
                <TouchableOpacity
                    style={styles.drawerLogoutButton}
                    onPress={() => Alert.alert('Logout Successfully')}
                >
                    <View style={styles.logoutContainer}>
                        <Ionicons name="log-out-outline" size={24} color="white" style={styles.drawerIcon} />
                        <Text style={styles.logoutText}>LogOut</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.drawerItem}
                    onPress={() => props.navigation.navigate('Main', { screen: 'AboutUs' })}
                >
                    <Text style={styles.drawerExtraText}>About Us</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.drawerItem}
                    onPress={() => props.navigation.navigate('Main', { screen: 'ContactUs' })}
                >
                    <Text style={styles.drawerExtraText}>Get In Touch</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
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

const NavigationForAll = () => {
    return (
        <NavigationContainer independent={true}>
            <StatusBar barStyle='light-content' backgroundColor='black' />
            <MainNavigator />
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        backgroundColor: '#fff',
    },
    profileContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: height * 0.03,
        backgroundColor: '#333',
    },
    profilePhoto: {
        width: width * 0.2,
        height: width * 0.2,
        borderRadius: (width * 0.2) / 2,
        marginBottom: height * 0.01,
    },
    profileName: {
        fontSize: width * 0.05,
        fontWeight: 'bold',
        color: 'white',
    },
    myAccountButton: {
        justifyContent: "center",
        alignItems: "center",
        height: height * 0.03,
        width: width * 0.3,
    },
    myAccountText: {
        fontSize: width * 0.03,
        fontWeight: 'bold',
        color: 'white',
    },
    drawerItem: {
        fontSize: width * 0.04,
        color: 'black',
        paddingLeft: width * 0.05,
        paddingRight: width * 0.05,
        paddingVertical: height * 0.02,
    },
    drawerItemContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    drawerLabel: {
        marginLeft: width * 0.03,
        fontSize: width * 0.04,
    },
    drawerIcon: {
        marginRight: width * 0.02,
    },
    headerLogo: {
        height: height * 0.08,
        width: width * 0.4,
        marginRight: width * 0.03,
    },
    headerIconContainer: {
        marginLeft: width * 0.04,
    },
    headerIcon: {
        height: height * 0.08,
        width: height * 0.08,
        borderRadius: (height * 0.08) / 2,
        borderColor: "white",
        borderWidth: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
        paddingTop: height * 0.02,
        marginBottom: height * 0.02,
    },
    drawerLogoutButton: {
        marginTop: height * 0.02,
    },
    logoutContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'red',
        width: width * 0.6,
        height: height * 0.07,
        borderRadius: 10,
        justifyContent: 'center',
    },
    logoutText: {
        fontSize: width * 0.05,
        color: 'white',
    },
    drawerExtraText: {
        fontSize: width * 0.04,
        color: 'grey',
        marginLeft: width * 0.05,
    },
});

export default NavigationForAll;
