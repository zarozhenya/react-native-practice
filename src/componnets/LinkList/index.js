import React from 'react';
import {FlatList} from 'react-native';
import {ListItem} from './listItem';
import {styles} from './styles';

export const LinkList = ({links}) => {
  return (
    <FlatList
      data={links}
      renderItem={({item, index}) => (
        <ListItem item={item} index={index} length={links.length} />
      )}
      style={styles.linkContainer}
    />
  );
};
