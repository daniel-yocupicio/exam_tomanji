import React, {useContext} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import NamePlayers from '../../atoms/NamePlayers';
import CloseSVG from '../../../assets/images/+.svg';
import SVGIcons from '../../atoms/SVGIcons';
import styles from './styles';
import FormAddPlayer from '../../atoms/FormAddPlayer';
import {UIContext} from '../../../context';

export default function AddPlayerModal() {
  const {isModal1Open, modalAddPlayers} = useContext(UIContext);

  return (
    <Modal visible={isModal1Open} transparent={true} animationType="fade">
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={modalAddPlayers}>
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
