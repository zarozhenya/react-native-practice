import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Arrow from '../../assets/svg/arrow.svg';
import {styles} from './styles';

export const ListItem = ({item}) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.push(item.key);
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.buttonItem}>
      <Text style={styles.text}>{item.title}</Text>
      <Arrow fill="#303030" />
    </TouchableOpacity>
  );
};
