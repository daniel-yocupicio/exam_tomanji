import React, {useContext} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import SVGIcons from '../../atoms/SVGIcons';
import FormEditPlayer from '../../atoms/FormEditPlayer';
import CloseSVG from '../../../assets/images/+.svg';
import styles from './styles';
import {UIContext} from '../../../context';

export default function EditPlayerModal({edit}) {
  const {isModal3Open, modalEditPlayers} = useContext(UIContext);

  return (
    <Modal visible={isModal3Open} transparent={true} animationType="fade">
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={modalEditPlayers}>
            <SVGIcons IconProp={CloseSVG} styles={styles.iconButton} />
          </TouchableOpacity>
          <Text style={styles.title}>Editar nombre</Text>
          <Text style={styles.description}>
            Elige una imagen o cambia el nombre de la persona.
          </Text>
          <FormEditPlayer edit={edit} />
        </View>
      </View>
    </Modal>
  );
}
