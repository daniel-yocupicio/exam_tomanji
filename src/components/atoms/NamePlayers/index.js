import React from 'react';
import {View, Text} from 'react-native';
import SVGIcons from '../SVGIcons';
import styles from './styles';
import DeleteSVG from '../../../assets/images/x.svg';

export default function NamePlayers() {
  return (
    <View style={styles.playerContainer}>
      <View style={styles.player}>
        <Text style={styles.playerText}>Harley Queen</Text>
        <SVGIcons IconProp={DeleteSVG} styles={styles.playerIcon} />
      </View>
      <View style={styles.player}>
        <Text style={styles.playerText}>Edo Caroe</Text>
        <SVGIcons IconProp={DeleteSVG} styles={styles.playerIcon} />
      </View>
      <View style={styles.player}>
        <Text style={styles.playerText}>Tomás</Text>
        <SVGIcons IconProp={DeleteSVG} styles={styles.playerIcon} />
      </View>
      <View style={styles.player}>
        <Text style={styles.playerText}>Pedro Pascal</Text>
        <SVGIcons IconProp={DeleteSVG} styles={styles.playerIcon} />
      </View>
    </View>
  );
}
