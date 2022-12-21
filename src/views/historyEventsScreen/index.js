import React from 'react';
import {View, Text} from 'react-native';
import Background from '../../components/atoms/Background';
import LayOutGoBack from '../../components/atoms/LayOutGoBack';

export default function HistoryEvents({navigation}) {
  return (
    <LayOutGoBack navigation={navigation}>
      <Background />
      <Text>Historial</Text>
    </LayOutGoBack>
  );
}
