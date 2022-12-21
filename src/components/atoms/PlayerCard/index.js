import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {UIContext} from '../../../context';
import styles from './styles';

export default function PlayerCard({player, count}) {
  const {modalEditPlayers} = useContext(UIContext);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.w1}>
        <Text style={styles.number}>{count}.</Text>
      </View>
      <TouchableOpacity style={styles.w2} onPress={modalEditPlayers}>
        <Image source={require('../../../assets/images/avatar7.png')} />
        <Text style={styles.name}>{player.name}</Text>
      </TouchableOpacity>
      <View style={styles.w3}>
        <TouchableOpacity>
          <Text style={styles.x}>x</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
