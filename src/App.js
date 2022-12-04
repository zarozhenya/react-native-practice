import React, {useEffect} from 'react';
import {Navigation} from './navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import SplashScreen from 'react-native-splash-screen';
import Config from 'react-native-config';
import {Platform} from 'react-native';

EStyleSheet.build({
  $textColor: '#303030',
  $primaryFont: 'Roboto-Regular',
  $primaryFontSize: 16,
  $titleFont: 'Roboto-Black',
  $titleFontSize: 30,
});

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    console.log(`${Platform.OS}: ${Config.GOOGLE_MAPS_API_KEY}`);
  }, []);
  return (
    <>
      <Navigation />
    </>
  );
};

export default App;
