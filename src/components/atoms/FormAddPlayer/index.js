import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import SVGIcons from '../SVGIcons';
import AddSVG from '../../../assets/images/add.svg';
import AlertSVG from '../../../assets/images/alert.svg';
import styles from './styles';

export default function FormAddPlayer({handlePlayers, addNewPlayers}) {
  const [name, setName] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  const handleName = () => {
    if (name.length > 0) {
      setShowWarning(false);
      handlePlayers(name);
      setName('');
    } else {
      setShowWarning(true);
    }
  };

  return (
    <View>
      <View style={styles().container}>
        <View style={styles(showWarning).warning}>
          <SVGIcons IconProp={AlertSVG} styles={{}} />
          <Text style={styles().warningText}>Ingrese un nombre</Text>
        </View>

        <View style={styles().addPlayerContainer}>
          <TextInput
            style={styles().input}
            value={name}
            placeholder="Escribir nombre"
            onChange={e => setName(e.nativeEvent.text)}
          />
          <TouchableOpacity
            style={styles(name.length === 0).addPlayerButton}
            onPress={handleName}>
            <SVGIcons IconProp={AddSVG} styles={{}} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles().btnConf} onPress={addNewPlayers}>
        <Text style={styles().textConf}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}
