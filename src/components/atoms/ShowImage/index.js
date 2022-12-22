import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

export default function ShowImage({image, isWeb, style = {}}) {
  if (!isWeb) {
    switch (image) {
      case '1':
        return (
          <Image
            style={style}
            source={require('../../../assets/images/avatar1.png')}
          />
        );
      case '2':
        return (
          <Image
            style={style}
            source={require('../../../assets/images/avatar2.png')}
          />
        );
      case '3':
        return (
          <Image
            style={style}
            source={require('../../../assets/images/avatar3.png')}
          />
        );
      case '4':
        return (
          <Image
            style={style}
            source={require('../../../assets/images/avatar4.png')}
          />
        );
      case '5':
        return (
          <Image
            style={style}
            source={require('../../../assets/images/avatar5.png')}
          />
        );
      case '6':
        return (
          <Image
            style={style}
            source={require('../../../assets/images/avatar6.png')}
          />
        );
      case '7':
        return (
          <Image
            style={style}
            source={require('../../../assets/images/avatar7.png')}
          />
        );
      case '8':
        return (
          <Image
            style={style}
            source={require('../../../assets/images/avatar8.png')}
          />
        );
      case '9':
        return (
          <Image
            style={style}
            source={require('../../../assets/images/avatar9.png')}
          />
        );
    }
  }

  return (
    <Image
      style={styles.img}
      source={{
        uri: image,
      }}
    />
  );
}
