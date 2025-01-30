import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import NavigationForAll from './Student/NavigationForAll';
import NavigationForIndustry from './Industry/NavigationForIndustry';
// import SplashScreenComponent from './SplashScreen';
import LogInNavigate from './Login/LogInNavigate';
import NavigationForMerchant from './Merchant/NavigationForMerchant';
const App = () => {
  const [isSplashScreenVisible, setSplashScreenVisible] = useState(true);

  const handleSplashScreenFinish = () => {
    setSplashScreenVisible(false);
  };

  return (
    // <>
    //   <StatusBar barStyle="dark-content" />
    //   {isSplashScreenVisible ? (
    //     <SplashScreenComponent onFinish={handleSplashScreenFinish} />
    //   ) : (
    <LogInNavigate></LogInNavigate>
    //   )}
    // </>
    // <NavigationForAll />
    // <NavigationForIndustry></NavigationForIndustry>
    // <NavigationForMerchant />
  );
};
export default App;