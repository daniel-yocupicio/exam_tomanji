import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function PlayerCard({player, count}) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.w1}>
        <Text style={styles.number}>{count}.</Text>
      </View>
      <View style={styles.w2}>
        <Image source={require('../../../assets/images/avatar7.png')} />
        <Text style={styles.name}>{player.name}</Text>
      </View>
      <View style={styles.w3}>
        <TouchableOpacity>
          <Text style={styles.x}>x</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
