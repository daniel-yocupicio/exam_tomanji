import React from 'react';
import {View} from 'react-native';
import NoPlayers from '../../atoms/NoPlayers';
import styles from './styles';

export default function PlayersList() {
  return (
    <View style={styles.container}>
      <NoPlayers />
    </View>
  );
}
