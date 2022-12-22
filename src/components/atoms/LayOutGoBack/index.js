import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import GoBackSVG from '../../../assets/images/back.svg';
import SVGIcons from '../SVGIcons';
import styles from './styles';

export default function LayOutGoBack({children, navigation}) {
  const canGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.screenSize}>
      <TouchableOpacity style={styles.goback} onPress={() => canGoBack()}>
        <SVGIcons IconProp={GoBackSVG} styles={{}} />
      </TouchableOpacity>
      {children}
    </View>
  );
}
