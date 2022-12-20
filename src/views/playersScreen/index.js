import React from 'react';
import {Image, TouchableOpacity, Text} from 'react-native';
import LayOutGoBack from '../../components/atoms/LayOutGoBack';
import Background from '../../components/atoms/Background';
import PlayersList from '../../components/molecules/PlayersList';
import AddPlayerModal from '../../components/molecules/AddPlayerModal';
import styles from './styles';
import AddEventModal from '../../components/molecules/AddEventModal';

export default function Players() {
  return (
    <LayOutGoBack>
      <Background />
      <AddPlayerModal show={false} />
      <AddEventModal show={true} />
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
      <PlayersList />
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmText}>CONFIRMAR</Text>
      </TouchableOpacity>
    </LayOutGoBack>
  );
}
