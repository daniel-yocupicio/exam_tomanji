import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import NamePlayers from '../../atoms/NamePlayers';
import CloseSVG from '../../../assets/images/+.svg';
import SVGIcons from '../../atoms/SVGIcons';
import styles from './styles';
import InputAddPlayer from '../../atoms/InputAddPlayer';

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
          <InputAddPlayer />
          <TouchableOpacity style={styles.btnConf}>
            <Text style={styles.textConf}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
