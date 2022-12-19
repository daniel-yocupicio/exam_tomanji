import React from 'react';
import {View, Image, Dimensions, TouchableOpacity, Text} from 'react-native';
import Background from '../../components/atoms/Background';
import PlayersList from '../../components/molecules/PlayersList';
// import SVGIcons from '../../components/SVGIcons';
// import LogoSVG from '../../assets/images/logo.svg';
import styles from './styles';

export default function Players() {
  console.log(Dimensions.get('window').height);
  return (
    <View style={styles.screenSize}>
      <Background />
      {/* <SVGIcons IconProp={LogoSVG} styles={styles.logo} /> */}
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
      <PlayersList />
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmText}>CONFIRMAR</Text>
      </TouchableOpacity>
    </View>
  );
}
