import React, {useContext} from 'react';
import {View, Text, Modal, TouchableOpacity, TextInput} from 'react-native';
import SVGIcons from '../../atoms/SVGIcons';
import CloseSVG from '../../../assets/images/+.svg';
import styles from './styles';
import EventImage from '../../atoms/EventImage';
import {UIContext} from '../../../context';

export default function AddEventModal() {
  const {isModal2Open, modalAddEvent} = useContext(UIContext);

  return (
    <Modal visible={isModal2Open} transparent={true} animationType="fade">
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <TouchableOpacity style={styles.closeButton} onPress={modalAddEvent}>
            <SVGIcons IconProp={CloseSVG} styles={styles.iconButton} />
          </TouchableOpacity>
          <EventImage />
          <Text style={styles.title}>Nombre Evento</Text>
          <Text style={styles.description}>
            Guarda la lista de jugadores para el futuro
          </Text>
          <TextInput placeholder="Escribir nombre" style={styles.input} />
          <TouchableOpacity style={styles.btnPlay}>
            <Text style={styles.textPlay}>A Jugar!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
