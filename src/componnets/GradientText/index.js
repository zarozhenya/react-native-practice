import React from 'react';
import {Text} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

export const GradientText = ({children, style, colors}) => {
  return (
    <MaskedView maskElement={<Text style={style}>{children}</Text>}>
      <LinearGradient colors={colors} start={{x: 0, y: 0}} end={{x: 0, y: 1}}>
        <Text style={[style, {color: 'transparent'}]}>{children}</Text>
      </LinearGradient>
    </MaskedView>
  );
};
