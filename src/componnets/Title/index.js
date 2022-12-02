import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

export const Title = ({color, children}) => {
  return <Text style={[styles.text, {color}]}>{children}</Text>;
};
