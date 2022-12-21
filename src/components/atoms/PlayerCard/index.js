import React, {useContext, useMemo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {EventContext, PlayersContext, UIContext} from '../../../context';
import ShowImage from '../ShowImage';
import {getUrl} from '../../../utils';
import styles from './styles';

export default function PlayerCard({player, count, edit = false}) {
  const {modalEditPlayers} = useContext(UIContext);
  const {deletePlayer, selectPlayer} = useContext(PlayersContext);
  const {editEventPlayer, deleteEventPlayer, selectPlayerEvent} = useContext(EventContext);
  const url = useMemo(() => getUrl(player.image), [player.image]);

  const selectPlayerToUpdate = () => {
    if (edit) {
      modalEditPlayers();
      selectPlayerEvent(count - 1);
    } else {
      modalEditPlayers();
      selectPlayer(count - 1);
    }
  };

  const deleteData = () => {
    if (edit) {
      deleteEventPlayer(count - 1);
    } else {
      deletePlayer(count - 1);
    }
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
        <TouchableOpacity onPress={() => deleteData()}>
          <Text style={styles.x}>x</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
