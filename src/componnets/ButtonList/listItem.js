import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const ListItem = ({item}) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.push(item.key);
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text>{item.key}</Text>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );
};
