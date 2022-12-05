import React from 'react';
import {FlatList} from 'react-native';
import {EmptyList} from './EmptyList';
import {ListItem} from './listItem';

export const StorageList = ({items, onDelete}) => {
  return (
    <FlatList
      data={items}
      renderItem={({item, index}) => {
        return (
          <ListItem
            item={item}
            index={index}
            length={items.length}
            handleDelete={onDelete}
          />
        );
      }}
      ListEmptyComponent={EmptyList}
    />
  );
};
