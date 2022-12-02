import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {styles} from './styles';
import {GradientBackground} from '../../../componnets/GradientBackground';
import {Title} from '../../../componnets/Title';

export const Info = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <GradientBackground colors={['#0000ff', '#ffff00']}>
        <Title color="#ffffff">Info</Title>
        <Text style={styles.text}>
          Hi! It is my test project where I practice my knowledge of React
          Native libraries. Hope you enjoy while using this application!
        </Text>
      </GradientBackground>
    </SafeAreaView>
  );
};
