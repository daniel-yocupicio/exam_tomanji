import React, {useContext} from 'react';
import {Image, TouchableOpacity, Text} from 'react-native';
import LayOutGoBack from '../../components/atoms/LayOutGoBack';
import Background from '../../components/atoms/Background';
import PlayersList from '../../components/molecules/PlayersList';
import AddPlayerModal from '../../components/molecules/AddPlayerModal';
import styles from './styles';
import AddEventModal from '../../components/molecules/AddEventModal';
import EditPlayerModal from '../../components/molecules/EditPlayerModal';
import {UIContext} from '../../context';

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
  const {modalAddEvent} = useContext(UIContext);

  return (
    <LayOutGoBack>
      <Background />
      <AddPlayerModal />
      <AddEventModal />
      <EditPlayerModal />
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
      <PlayersList players={players} />
      <TouchableOpacity style={styles.confirmButton} onPress={modalAddEvent}>
        <Text style={styles.confirmText}>CONFIRMAR</Text>
      </TouchableOpacity>
    </LayOutGoBack>
  );
}
