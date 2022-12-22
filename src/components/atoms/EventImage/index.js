import React from 'react';
import {View, Text, TouchableOpacity, Alert, Image} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {request, PERMISSIONS, check, RESULTS} from 'react-native-permissions';
import storage from '@react-native-firebase/storage';
import SVGIcons from '../SVGIcons';
import EventSVG from '../../../assets/images/event.svg';
import CamaraSVG from '../../../assets/images/camera.svg';
import styles from './styles';

const setImage = async (result, handleData, handleDisabled) => {
  if (result.didCancel === true) {
    Alert.alert('Error al cargar la imagen', '', [{text: 'OK'}]);
  } else {
    handleDisabled(true);
    const nameImage = result.assets[0].uri.substring(
      result.assets[0].uri.lastIndexOf('/') + 1,
    );
    const reference = storage().ref(nameImage);
    await reference.putFile(result.assets[0].uri);
    await reference.getDownloadURL().then(urlFirebase => {
      handleData(urlFirebase);
      handleDisabled(false);
    });
  }
};

const launchCamera = async (handleData, handleDisabled) => {
  const result = await ImagePicker.launchCamera();
  setImage(result, handleData, handleDisabled);
};

const getPermissions = (handleData, handleDisabled) => {
  request(PERMISSIONS.ANDROID.CAMERA)
    .then(result2 => {
      if (result2 === RESULTS.GRANTED) {
        launchCamera(handleData, handleDisabled);
      } else {
        Alert.alert(
          'Se requieren permisos',
          '' + 'Tiene que aceptar los permisos para usar la cámara.',
          [{text: 'OK'}],
        );
      }
    })
    .catch(error => Alert.alert('Error', '' + error, [{text: 'OK'}]));
};

const checkPermissions = (handleData, handleDisabled) => {
  check(PERMISSIONS.ANDROID.CAMERA)
    .then(result => {
      if (result === RESULTS.GRANTED) {
        launchCamera(handleData, handleDisabled);
      } else {
        getPermissions(handleData, handleDisabled);
      }
    })
    .catch(error => Alert.alert('Error', '' + error, [{text: 'OK'}]));
};

export default function EventImage({handleData, url, handleDisabled}) {
  return (
    <View style={styles.container}>
      {url === '' ? (
        <SVGIcons IconProp={EventSVG} styles={{}} />
      ) : (
        <Image source={{uri: url}} style={styles.img} />
      )}

      <TouchableOpacity
        style={styles.btn}
        onPress={() => checkPermissions(handleData, handleDisabled)}>
        <SVGIcons IconProp={CamaraSVG} styles={{}} />
        <Text style={styles.text}>Agregar foto</Text>
      </TouchableOpacity>
    </View>
  );
}
