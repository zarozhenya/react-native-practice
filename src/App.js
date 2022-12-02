import React from 'react';
import {Navigation} from './navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $textColor: '#303030',
  $primaryFont: 'Roboto-Regular',
  $primaryFontSize: 16,
  $titleFont: 'Roboto-Black',
  $titleFontSize: 30,
});

const App = () => {
  return (
    <>
      <Navigation />
    </>
  );
};

export default App;
