import React, {useContext} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import LayOutGoBack from '../../components/atoms/LayOutGoBack';
import Background from '../../components/atoms/Background';
import styles from './styles';
import {EventContext} from '../../context';

export default function HistoryPlayers({navigation, route}) {
  const {selectEvent, events} = useContext(EventContext);
  //const {players} = route.params.data;
  // nameEvent, photoEvent,

  const selectAEvent = () => {
    selectEvent({
      players: events[route.params.index].players,
      index: route.params.index,
    });
    navigation.navigate('resume');
  };

  return (
    <LayOutGoBack navigation={navigation}>
      <Background />
      <View style={styles.headerContainer}>
        {events[route.params.index].photoEvent !== '' && (
          <Image
            source={{
              uri: events[route.params.index].photoEvent,
            }}
            style={
              events[route.params.index].photoEvent !== ''
                ? styles.img
                : styles.img2
            }
          />
        )}
        <Text style={styles.nameEvent}>
          {events[route.params.index].nameEvent}
        </Text>
      </View>
      <View style={styles.listHeaders}>
        <Text style={styles.players}>Jugadores</Text>
        <Text style={styles.date}>{events[route.params.index].dateEvent}</Text>
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          data={events[route.params.index].players}
          style={
            events[route.params.index].photoEvent !== ''
              ? styles.flatList40
              : styles.flatList47
          }
          renderItem={({item, index}) => (
            <View style={styles.playerContainer}>
              <Text style={styles.number}>{index + 1}.</Text>
              <Text style={styles.name}>{item.name}</Text>
            </View>
          )}
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={selectAEvent}>
        <Text style={styles.textbtn}>Seleccionar</Text>
      </TouchableOpacity>
    </LayOutGoBack>
  );
}
