import React, {useContext, useState} from 'react';
import {Image, TouchableOpacity, Text} from 'react-native';
import LayOutGoBack from '../../components/atoms/LayOutGoBack';
import Background from '../../components/atoms/Background';
import PlayersList from '../../components/molecules/PlayersList';
import AddPlayerModal from '../../components/molecules/AddPlayerModal';
import styles from './styles';
import AddEventModal from '../../components/molecules/AddEventModal';
import EditPlayerModal from '../../components/molecules/EditPlayerModal';
import {PlayersContext, UIContext} from '../../context';

export default function Players({navigation}) {
  const {modalAddEvent} = useContext(UIContext);
  const {players} = useContext(PlayersContext);

  const checkPlayers = () => {
    if (players.length > 0) {
      modalAddEvent();
    }
  };

  return (
    <LayOutGoBack navigation={navigation}>
      <Background />
      <AddPlayerModal />
      <AddEventModal />
      <EditPlayerModal />
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
      <PlayersList players={players} navigation={navigation} />
      <TouchableOpacity
        style={
          players.length === 0 ? styles.confirmButton : styles.confirmButton2
        }
        onPress={checkPlayers}>
        <Text style={styles.confirmText}>CONFIRMAR</Text>
      </TouchableOpacity>
    </LayOutGoBack>
  );
}
