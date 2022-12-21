import React from 'react';
import {View, Text} from 'react-native';
import LayOutGoBack from '../../components/atoms/LayOutGoBack';
import Background from '../../components/atoms/Background';

export default function HistoryPlayers({navigation}) {
  return (
    <LayOutGoBack navigation={navigation}>
      <Background />
    </LayOutGoBack>
  );
}
