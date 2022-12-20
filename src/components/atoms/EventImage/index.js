import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import SVGIcons from '../SVGIcons';
import EventSVG from '../../../assets/images/event.svg';
import CamaraSVG from '../../../assets/images/camera.svg';
import styles from './styles';

export default function EventImage() {
  return (
    <View style={styles.container}>
      <SVGIcons IconProp={EventSVG} styles={{}} />
      <TouchableOpacity style={styles.btn}>
        <SVGIcons IconProp={CamaraSVG} styles={{}} />
        <Text style={styles.text}>Agregar foto</Text>
      </TouchableOpacity>
    </View>
  );
}
