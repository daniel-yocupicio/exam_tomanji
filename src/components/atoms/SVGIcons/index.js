import React from 'react';
import {View} from 'react-native';

export default function SVGIcons({IconProp, styles}) {
  return (
    <View style={styles}>
      <IconProp />
    </View>
  );
}
