import React from 'react';
import {Text} from 'react-native';
import Background from '../../components/atoms/Background';
import LayOutGoBack from '../../components/atoms/LayOutGoBack';
import ListEvents from '../../components/molecules/ListEvents';
import styles from './styles';

export default function HistoryEvents({navigation}) {
  return (
    <LayOutGoBack navigation={navigation}>
      <Background />
      <Text style={styles.title}>Historial</Text>
      <ListEvents navigation={navigation} />
    </LayOutGoBack>
  );
}
