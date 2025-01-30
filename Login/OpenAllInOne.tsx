import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Open Instagram</Text>
      <Button title="Open Instagram" onPress={() => navigation.navigate('WebViewScreen')} />
      <Button title="Open YouTube" onPress={() => navigation.navigate('WebViewScreen')} />

    </View>
  );
};

const WebViewScreen = () => {
  return (
    <WebView
      source={{ uri: 'https://www.instagram.com/' }}
      style={{ flex: 1 }}
      onError={(syntheticEvent) => {
        const { nativeEvent } = syntheticEvent;
        console.warn('WebView error: ', nativeEvent);
      }}
    />
  );
};

const WebViewScreen2 = () => {
    return (
      <WebView
        source={{ uri: 'https://www.youtube.com/' }}
        style={{ flex: 1 }}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
      />
    );
  };
const Stack = createStackNavigator();

const OpenAllInOne = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
        {/* <Stack.Screen name="WebViewScreen2" component={WebViewScreen2} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default OpenAllInOne;
