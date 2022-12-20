import React from 'react';
import {View, TextInput, Image, Text, TouchableOpacity} from 'react-native';
// import Tooltip from 'rn-tooltip';
import EditSVG from '../../../assets/images/edit.svg';
import AlertSVG from '../../../assets/images/alert.svg';
import LibrarySVG from '../../../assets/images/library.svg';
import SVGIcons from '../SVGIcons';
import styles from './styles';

export default function FormEditPlayer() {
  return (
    <View style={styles().container}>
      <View style={styles(true).warning}>
        <SVGIcons IconProp={AlertSVG} styles={{}} />
        <Text style={styles().warningText}>Ingrese un nombre</Text>
      </View>
      <View style={styles().imageInput}>
        <View>
          <SVGIcons IconProp={EditSVG} styles={styles().edit} />
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles().img}
          />
        </View>
        <ImagePicker />
        <TextInput style={styles().input} placeholder="Escribe nombre" />
      </View>

      <TouchableOpacity style={styles().btn}>
        <Text style={styles().textbtn}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}

const ImagePicker = () => {
  return (
    <View elevation={10} style={styles().tooltip}>
      <View style={styles().triangle} />
      <View style={styles().tooltipContainer}>
        <Text style={styles().title}>Elige una imagen</Text>
        <View style={styles().images}>
          <View style={styles().imagesRow}>
            <Image source={require('../../../assets/images/avatar1.png')} />
            <Image source={require('../../../assets/images/avatar2.png')} />
            <Image source={require('../../../assets/images/avatar3.png')} />
          </View>
          <View style={styles().imagesRow}>
            <Image source={require('../../../assets/images/avatar4.png')} />
            <Image source={require('../../../assets/images/avatar5.png')} />
            <Image source={require('../../../assets/images/avatar6.png')} />
          </View>
          <View style={styles().imagesRow}>
            <Image source={require('../../../assets/images/avatar7.png')} />
            <Image source={require('../../../assets/images/avatar8.png')} />
            <Image source={require('../../../assets/images/avatar9.png')} />
          </View>
        </View>
        <TouchableOpacity style={styles().openPhotos}>
          <SVGIcons IconProp={LibrarySVG} styles={{}} />
          <Text style={styles().openPhotoText}>Abrir fotos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

/**
 *

      <View style={styles().imagepickerContainer}>
        <View style={styles().pointpopover} />
        <Text style={styles().title}>Elige una Imagen</Text>
        <View>
          <Text>IMGS</Text>
        </View>
        <View>
          <Text>Abrir fotos</Text>
        </View>
      </View>

 */
