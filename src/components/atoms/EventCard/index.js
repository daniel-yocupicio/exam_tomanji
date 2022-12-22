import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {EventContext} from '../../../context';
import styles from './styles';

export default function EventCard({data, navigation, index}) {
  const {events} = useContext(EventContext);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.playersC}>
          {events[index].players?.length} Jugador
          {events[index].players?.length === 1 ? '' : 'es'}
        </Text>
        <Text style={styles.date}>{data.dateEvent}</Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('history2', {index})}>
        <Text style={styles.textbtn}>Ver</Text>
      </TouchableOpacity>
    </View>
  );
}
