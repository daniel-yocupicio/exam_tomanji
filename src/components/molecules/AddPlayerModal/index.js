import React, {useContext, useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import NamePlayers from '../../atoms/NamePlayers';
import CloseSVG from '../../../assets/images/+.svg';
import SVGIcons from '../../atoms/SVGIcons';
import styles from './styles';
import FormAddPlayer from '../../atoms/FormAddPlayer';
import {EventContext, PlayersContext, UIContext} from '../../../context';

export default function AddPlayerModal({edit}) {
  const {isModal1Open, modalAddPlayers} = useContext(UIContext);
  const {addPlayersToEvent} = useContext(EventContext);
  const {addPlayers} = useContext(PlayersContext);
  const [newPlayers, setNewPlayers] = useState([]);

  const handlePlayers = player => {
    setNewPlayers([...newPlayers, player]);
  };

  const deletePlayer = index => {
    setNewPlayers(newPlayers.filter((_, index2) => index !== index2));
  };

  const addNewPlayers = inputValue => {
    let array = newPlayers;
    if (inputValue !== '') {
      array = [...array, inputValue];
    }
    if (edit) {
      addPlayersToEvent(array);
    } else {
      addPlayers(array);
    }
    modalAddPlayers();
    setNewPlayers([]);
  };

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
          <NamePlayers newPlayers={newPlayers} deletePlayer={deletePlayer} />
          <FormAddPlayer
            handlePlayers={handlePlayers}
            addNewPlayers={addNewPlayers}
            active={newPlayers.length > 0}
          />
        </View>
      </View>
    </Modal>
  );
}
