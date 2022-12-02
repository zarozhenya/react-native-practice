import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

export const GradientBackground = ({children, colors}) => {
  return (
    <LinearGradient style={styles.background} colors={colors}>
      {children}
    </LinearGradient>
  );
};
