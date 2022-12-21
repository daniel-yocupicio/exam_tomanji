import React, {useContext, useMemo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {PlayersContext, UIContext} from '../../../context';
import ShowImage from '../ShowImage';
import {getUrl} from '../../../utils';
import styles from './styles';

export default function PlayerCard({player, count}) {
  const {modalEditPlayers} = useContext(UIContext);
  const {deletePlayer, selectPlayer} = useContext(PlayersContext);
  const url = useMemo(() => getUrl(player.image), [player.image]);

  const selectPlayerToUpdate = () => {
    modalEditPlayers();
    selectPlayer(count - 1);
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.w1}>
        <Text style={styles.number}>{count}.</Text>
      </View>
      <TouchableOpacity style={styles.w2} onPress={selectPlayerToUpdate}>
        <ShowImage image={url.url} isWeb={url.isWeb} />
        <Text style={styles.name}>{player.name}</Text>
      </TouchableOpacity>
      <View style={styles.w3}>
        <TouchableOpacity onPress={() => deletePlayer(count - 1)}>
          <Text style={styles.x}>x</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
