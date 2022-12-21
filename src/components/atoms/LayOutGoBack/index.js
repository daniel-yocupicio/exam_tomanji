import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import GoBackSVG from '../../../assets/images/back.svg';
import SVGIcons from '../SVGIcons';
import styles from './styles';

export default function LayOutGoBack({children, navigation}) {
  return (
    <View style={styles.screenSize}>
      <TouchableOpacity
        style={styles.goback}
        onPress={() => navigation.goBack()}>
        <SVGIcons IconProp={GoBackSVG} styles={{}} />
      </TouchableOpacity>
      {children}
    </View>
  );
}
