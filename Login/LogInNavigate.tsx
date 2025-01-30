import React from 'react';
import  NavigationContainer from '@react-navigation/native';
import  createStackNavigator  from '@react-navigation/stack';
import MainLogIn from './MainLogIn';
import StudentLogin from './StudentLogin';
import IndustryLogin from './IndustryLogin';
import MerchantLogin from './MerchantLogin';
import NavigationForAll from '../Student/NavigationForAll';

const Stack = createStackNavigator();

const LogInNavigate = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="MainLogIn">
                <Stack.Screen name="MainLogIn" component={MainLogIn}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="StudentLogin" component={StudentLogin}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="IndustryLogin" component={IndustryLogin}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="MerchantLogin" component={MerchantLogin}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name="NavigationForAll" component={NavigationForAll}
                    options={{
                        headerShown: false,
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default LogInNavigate;
