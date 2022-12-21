import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function EventCard({data, navigation, index}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.playersC}>
          {data.players.length} Jugador{data.players.length === 1 ? '' : 'es'}
        </Text>
        <Text style={styles.date}>{data.dateEvent}</Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('history2', {data, index})}>
        <Text style={styles.textbtn}>Ver</Text>
      </TouchableOpacity>
    </View>
  );
}
