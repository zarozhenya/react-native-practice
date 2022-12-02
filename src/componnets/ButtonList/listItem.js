import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Arrow from '../../assets/svg/arrow.svg';
import {styles} from './styles';
import {GradientText} from '../GradientText';

export const ListItem = ({item, index, length}) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate(item.key);
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={
        index !== length - 1
          ? [styles.buttonItem, {marginBottom: 10}]
          : styles.buttonItem
      }>
      <GradientText style={styles.text} colors={['#0000ff', '#ff0000']}>
        {item.title}
      </GradientText>
      <Arrow fill="#303030" />
    </TouchableOpacity>
  );
};
