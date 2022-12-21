import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import NoPlayersSVG from '../../../assets/images/noplayers.svg';
import HistorySVG from '../../../assets/images/history.svg';
import SVGIcons from '../SVGIcons';
import styles from './styles';
import {UIContext} from '../../../context';

export default function NoPlayers() {
  const {modalAddPlayers} = useContext(UIContext);

  return (
    <View style={styles.container}>
      <SVGIcons IconProp={NoPlayersSVG} styles={styles.icon} />
      <Text style={styles.textNoPlayers}>No hay jugadores aún</Text>
      <TouchableOpacity onPress={modalAddPlayers}>
        <Text style={styles.textAddPlayer}>+ Agregar jugador</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.historyButton}>
        <SVGIcons IconProp={HistorySVG} styles={styles.historyIcon} />
        <Text style={styles.historyText}>Historial Jugadores</Text>
      </TouchableOpacity>
    </View>
  );
}
