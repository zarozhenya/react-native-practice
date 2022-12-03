import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import {screensData} from '..';
import {LinkList} from '../../../componnets/LinkList';

export const Home = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <LinkList links={screensData} />
    </SafeAreaView>
  );
};
