import React from 'react';
import {View} from 'react-native';
import BackgroundSVG from '../../../assets/images/background.svg';
import styles from './styles';

export default function Background() {
  return (
    <View style={styles.backgroundStyle}>
      <BackgroundSVG width={'100%'} height={'100%'} />
    </View>
  );
}
