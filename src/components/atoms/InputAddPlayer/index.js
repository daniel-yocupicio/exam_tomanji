import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import SVGIcons from '../SVGIcons';
import AddSVG from '../../../assets/images/add.svg';
import AlertSVG from '../../../assets/images/alert.svg';
import styles from './styles';

export default function InputAddPlayer() {
  return (
    <View style={styles().container}>
      <View style={styles(true).warning}>
        <SVGIcons IconProp={AlertSVG} styles={{}} />
        <Text style={styles().warningText}>Ingrese un nombre</Text>
      </View>

      <View style={styles().addPlayerContainer}>
        <TextInput style={styles().input} placeholder="Escribir nombre" />
        <TouchableOpacity style={styles().addPlayerButton}>
          <SVGIcons IconProp={AddSVG} styles={{}} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
