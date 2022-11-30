import React from 'react';
import {FlatList} from 'react-native';
import {ListItem} from './listItem';
import {styles} from './styles';

export const ButtonList = ({buttons}) => {
  return (
    <FlatList
      data={buttons}
      renderItem={({item}) => <ListItem item={item} />}
      style={styles.buttonContainer}
    />
  );
};
