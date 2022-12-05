import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Title} from '../../../componnets/Title';
import {styles} from './styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import {addItem, deleteItem, getAllKeysAndData} from '../../../utils/stroage';
import {showMessage} from 'react-native-flash-message';
import {StorageList} from '../../../componnets/StorageList';
import {StorageForm} from '../../../componnets/StorageForm';

export const Storage = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getAllKeysAndData()
      .then(setItems)
      .catch(({message}) =>
        showMessage({type: 'danger', message, icon: 'danger'}),
      );
  }, []);
  const onSubmit = data => {
    addItem(data)
      .then(() => getAllKeysAndData().then(setItems))
      .catch(({message}) =>
        showMessage({type: 'danger', message, icon: 'danger'}),
      );
  };
  const onDelete = key => {
    deleteItem(key)
      .then(() => getAllKeysAndData().then(setItems))
      .catch(({message}) =>
        showMessage({type: 'danger', message, icon: 'danger'}),
      );
  };
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Title color={EStyleSheet.value('$textColor')}>Storage</Title>
        <StorageForm onSubmit={onSubmit} />
        <StorageList items={items} onDelete={onDelete} />
      </View>
    </SafeAreaView>
  );
};
