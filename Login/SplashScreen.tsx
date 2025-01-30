import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import LinearGradient from 'react-native-linear-gradient';


SplashScreen.preventAutoHideAsync();

const SplashScreenComponent = ({ onFinish }) => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
      onFinish();
    }, 3000);
  }, []);

  return (

    <LinearGradient colors={['#8B41A2', '#983F7F', '#AF3B52', '#BD3633']}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <Image source={require('./logo.png')} style={styles.logo} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 300,
    height: 130,
  },
});

export default SplashScreenComponent;
