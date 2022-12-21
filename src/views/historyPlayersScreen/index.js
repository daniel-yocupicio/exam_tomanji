import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import LayOutGoBack from '../../components/atoms/LayOutGoBack';
import Background from '../../components/atoms/Background';
import styles from './styles';

export default function HistoryPlayers({navigation, route}) {
  const {dateEvent, nameEvent, photoEvent, players} = route.params.data;

  return (
    <LayOutGoBack navigation={navigation}>
      <Background />
      <View style={styles.headerContainer}>
        {photoEvent !== '' && (
          <Image
            source={{
              uri: photoEvent,
            }}
            style={photoEvent !== '' ? styles.img : styles.img2}
          />
        )}
        <Text style={styles.nameEvent}>{nameEvent}</Text>
      </View>
      <View style={styles.listHeaders}>
        <Text style={styles.players}>Jugadores</Text>
        <Text style={styles.date}>{dateEvent}</Text>
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          data={players}
          style={photoEvent !== '' ? styles.flatList40 : styles.flatList47}
          renderItem={({item, index}) => (
            <View style={styles.playerContainer}>
              <Text style={styles.number}>{index + 1}.</Text>
              <Text style={styles.name}>{item.name}</Text>
            </View>
          )}
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('resume')}>
        <Text style={styles.textbtn}>Seleccionar</Text>
      </TouchableOpacity>
    </LayOutGoBack>
  );
}
