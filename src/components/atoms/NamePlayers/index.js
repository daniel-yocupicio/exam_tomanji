import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import SVGIcons from '../SVGIcons';
import styles from './styles';
import DeleteSVG from '../../../assets/images/x.svg';

export default function NamePlayers({newPlayers, deletePlayer}) {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.playerContainer}>
        {newPlayers.map((player, index) => (
          <TouchableOpacity
            key={index}
            style={styles.player}
            onPress={() => deletePlayer(index)}>
            <Text style={styles.playerText}>{player}</Text>
            <SVGIcons IconProp={DeleteSVG} styles={styles.playerIcon} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
