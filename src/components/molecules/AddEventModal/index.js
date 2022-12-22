import React, {useContext, useState} from 'react';
import {View, Text, Modal, TouchableOpacity, TextInput} from 'react-native';
import SVGIcons from '../../atoms/SVGIcons';
import CloseSVG from '../../../assets/images/+.svg';
import styles from './styles';
import EventImage from '../../atoms/EventImage';
import AlertSVG from '../../../assets/images/alert.svg';
import {EventContext, PlayersContext, UIContext} from '../../../context';

export default function AddEventModal() {
  const {isModal2Open, modalAddEvent} = useContext(UIContext);
  const {players, resetPlayers} = useContext(PlayersContext);
  const {addEvent} = useContext(EventContext);
  const [name, setName] = useState('');
  const [imageEvent, setImageEvent] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const saveEvent = () => {
    if (name !== '') {
      setShowWarning(false);
      addEvent(players, name, imageEvent);
      setName('');
      setImageEvent('');
      resetPlayers();
      modalAddEvent();
    } else {
      setShowWarning(true);
    }
  };

  const handleImage = url => {
    setImageEvent(url);
  };

  const handleDisabled = isdisabled => {
    setDisabled(isdisabled);
  };

  const closeModal = () => {
    setShowWarning(false);
    setName('');
    setImageEvent('');
    modalAddEvent();
  };

  return (
    <Modal visible={isModal2Open} transparent={true} animationType="fade">
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <SVGIcons IconProp={CloseSVG} styles={styles.iconButton} />
          </TouchableOpacity>
          <EventImage
            handleData={handleImage}
            url={imageEvent}
            handleDisabled={handleDisabled}
          />
          <Text style={styles.title}>Nombre Evento</Text>
          <Text style={styles.description}>
            Guarda la lista de jugadores para el futuro
          </Text>
          <View style={showWarning ? styles.warning : styles.none}>
            <SVGIcons IconProp={AlertSVG} styles={{}} />
            <Text style={styles.warningText}>Ingrese un nombre</Text>
          </View>
          <TextInput
            placeholder="Escribir nombre"
            style={styles.input}
            value={name}
            onChange={e => setName(e.nativeEvent.text)}
          />
          <TouchableOpacity
            style={styles.btnPlay}
            onPress={saveEvent}
            disabled={disabled}>
            <Text style={styles.textPlay}>A Jugar!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
