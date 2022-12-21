import React, {useContext, useMemo} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {PlayersContext, UIContext} from '../../../context';
import {getUrl} from '../../../utils';
import styles from './styles';

export default function PlayerCard({player, count}) {
  const {modalEditPlayers} = useContext(UIContext);
  const {deletePlayer} = useContext(PlayersContext);
  const url = useMemo(() => getUrl(player.image), [player.image]);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.w1}>
        <Text style={styles.number}>{count}.</Text>
      </View>
      <TouchableOpacity style={styles.w2} onPress={modalEditPlayers}>
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

const ShowImage = ({image, isWeb}) => {
  if (!isWeb) {
    switch (image) {
      case '1':
        return <Image source={require('../../../assets/images/avatar1.png')} />;
      case '2':
        return <Image source={require('../../../assets/images/avatar2.png')} />;
      case '3':
        return <Image source={require('../../../assets/images/avatar3.png')} />;
      case '4':
        return <Image source={require('../../../assets/images/avatar4.png')} />;
      case '5':
        return <Image source={require('../../../assets/images/avatar5.png')} />;
      case '6':
        return <Image source={require('../../../assets/images/avatar6.png')} />;
      case '7':
        return <Image source={require('../../../assets/images/avatar7.png')} />;
      case '8':
        return <Image source={require('../../../assets/images/avatar8.png')} />;
      case '9':
        return <Image source={require('../../../assets/images/avatar9.png')} />;
    }
  }

  return (
    <Image
      source={{
        uri: image,
      }}
    />
  );
};
