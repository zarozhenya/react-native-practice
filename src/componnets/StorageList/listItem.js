import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import CloseIcon from '../../assets/svg/close.svg';
export const ListItem = ({item, index, length, handleDelete}) => {
  const onDelete = () => {
    handleDelete(item[0]);
  };
  return (
    <View
      style={
        index !== length - 1 ? [styles.item, {marginBottom: 10}] : styles.item
      }>
      <Text style={styles.text}>
        {item[0]}: {item[1]}
      </Text>
      <Pressable style={styles.button} onPress={onDelete}>
        <CloseIcon width={20} height={20} />
      </Pressable>
    </View>
  );
};
