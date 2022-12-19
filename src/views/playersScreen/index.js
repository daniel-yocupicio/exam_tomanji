import React from 'react';
import {View, Text} from 'react-native';
import Background from '../../components/Background';
import styles from './styles';

export default function Players() {
  return (
    <View style={styles.screenSize}>
      <Background />
      <Text style={{color: '#FFFFFF'}}>Players</Text>
    </View>
  );
}
