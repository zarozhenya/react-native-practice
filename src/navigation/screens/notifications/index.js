import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Title} from '../../../componnets/Title';
import {styles} from './styles';
import EStyleSheet from 'react-native-extended-stylesheet';

export const Notifications = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Title color={EStyleSheet.value('$textColor')}>Notifications</Title>
      <Button
        title="Press"
        onPress={() => {
          showMessage({message: 'Success!', type: 'success', icon: 'success'});
        }}
      />
    </SafeAreaView>
  );
};
