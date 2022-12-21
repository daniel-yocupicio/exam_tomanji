import React, {useContext} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import {UIContext} from '../../../context';
import NoPlayers from '../../atoms/NoPlayers';
import PlayerCard from '../../atoms/PlayerCard';
import styles from './styles';

export default function PlayersList({players}) {
  const {modalAddPlayers} = useContext(UIContext);
  return (
    <View style={styles.container}>
      {players.length > 0 ? (
        <View style={styles.containerFlatList}>
          <FlatList
            data={players}
            renderItem={({item, index}) => (
              <PlayerCard count={index + 1} player={item} />
            )}
            style={styles.flatlistSize}
          />
          <TouchableOpacity style={styles.btn} onPress={modalAddPlayers}>
            <Text style={styles.addplayerText}>+ Agregar jugador</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <NoPlayers />
      )}
    </View>
  );
}
