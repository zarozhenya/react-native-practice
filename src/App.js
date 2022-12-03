import React, {useEffect} from 'react';
import {Navigation} from './navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import SplashScreen from 'react-native-splash-screen';

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
  }, []);
  return (
    <>
      <Navigation />
    </>
  );
};

export default App;
