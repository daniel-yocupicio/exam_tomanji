import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import SVGIcons from '../../atoms/SVGIcons';
import FormEditPlayer from '../../atoms/FormEditPlayer';
import CloseSVG from '../../../assets/images/+.svg';
import styles from './styles';

export default function EditPlayerModal({show}) {
  return (
    <Modal visible={show} transparent={true} animationType="fade">
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <TouchableOpacity style={styles.closeButton}>
            <SVGIcons IconProp={CloseSVG} styles={styles.iconButton} />
          </TouchableOpacity>
          <Text style={styles.title}>Editar nombre</Text>
          <Text style={styles.description}>
            Elige una imagen o cambia el nombre de la persona.
          </Text>
          <FormEditPlayer />
        </View>
      </View>
    </Modal>
  );
}
