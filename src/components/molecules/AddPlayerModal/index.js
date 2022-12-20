import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import NamePlayers from '../../atoms/NamePlayers';
import CloseSVG from '../../../assets/images/+.svg';
import SVGIcons from '../../atoms/SVGIcons';
import styles from './styles';
import FormAddPlayer from '../../atoms/FormAddPlayer';

export default function AddPlayerModal({show}) {
  return (
    <Modal visible={show} transparent={true} animationType="fade">
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <TouchableOpacity style={styles.closeButton}>
            <SVGIcons IconProp={CloseSVG} styles={styles.iconButton} />
          </TouchableOpacity>
          <Text style={styles.title}>Agregar jugadores</Text>
          <NamePlayers />
          <FormAddPlayer />
        </View>
      </View>
    </Modal>
  );
}