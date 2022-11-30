import React from 'react';
import {FlatList} from 'react-native';
import {ListItem} from './listItem';

export const ButtonList = ({buttons}) => {
  return (
    <FlatList
      data={buttons}
      renderItem={({item}) => <ListItem item={item} />}
    />
  );
};
