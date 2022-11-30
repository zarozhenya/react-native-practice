import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import {screensData} from '..';
import {ButtonList} from '../../../componnets/ButtonList';

export const Home = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <ButtonList buttons={screensData} />
    </SafeAreaView>
  );
};
