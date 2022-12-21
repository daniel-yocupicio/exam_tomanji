import React from 'react';
import {Image, TouchableOpacity, Text} from 'react-native';
import LayOutGoBack from '../../components/atoms/LayOutGoBack';
import Background from '../../components/atoms/Background';
import PlayersList from '../../components/molecules/PlayersList';
import AddPlayerModal from '../../components/molecules/AddPlayerModal';
import styles from './styles';
import AddEventModal from '../../components/molecules/AddEventModal';
import EditPlayerModal from '../../components/molecules/EditPlayerModal';

const players = [
  {name: 'Ariana Grande', image: '1'},
  {name: 'Penny', image: '1'},
  {name: 'Papa Juan', image: '1'},
  {name: 'Robin Sherbatsky', image: '1'},
  {name: 'Hayley Williams', image: '1'},
  {name: 'Denise Rosenthal', image: '1'},
  {name: 'Okoye', image: '1'},
  {name: 'Ni Tan Zorro', image: '1'},
  {name: 'xD', image: '1'},
];

export default function Players() {
  return (
    <LayOutGoBack>
      <Background />
      <AddPlayerModal show={false} />
      <AddEventModal show={false} />
      <EditPlayerModal show={false} />
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
      <PlayersList players={players} />
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmText}>CONFIRMAR</Text>
      </TouchableOpacity>
    </LayOutGoBack>
  );
}
