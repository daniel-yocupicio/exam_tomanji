import React, {useContext, useState} from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as ImagePickerSelecter from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import EditSVG from '../../../assets/images/edit.svg';
import AlertSVG from '../../../assets/images/alert.svg';
import LibrarySVG from '../../../assets/images/library.svg';
import ShowImage from '../ShowImage';
import SVGIcons from '../SVGIcons';
import styles from './styles';
import {EventContext, PlayersContext, UIContext} from '../../../context';
import {getUrl} from '../../../utils';

const setAvatarImage = async (result, handleData, handleDisabled) => {
  if (result.didCancel === true) {
    Alert.alert('Error al cargar la imagen', '', [{text: 'OK'}]);
  } else {
    console.log(1);
    handleDisabled(true);
    console.log(2);
    const nameImage = result.assets[0].uri.substring(
      result.assets[0].uri.lastIndexOf('/') + 1,
    );
    console.log(3);
    const reference = storage().ref(nameImage);
    console.log(4);
    await reference.putFile(result.assets[0].uri);
    console.log(5);
    console.log(handleData, handleDisabled);
    await reference.getDownloadURL().then(urlFirebase => {
      handleData(urlFirebase);
      handleDisabled(false);
    });
    console.log(6);
  }
};

const addImage = async (handleData, handleDisabled) => {
  const result = await ImagePickerSelecter.launchImageLibrary();
  setAvatarImage(result, handleData, handleDisabled).catch(e => console.log(e));
};

export default function FormEditPlayer({edit = false}) {
  const {selectPlayer, updateSelectPlayer, saveSelectPlayer} =
    useContext(EventContext);
  const {playerSelected, updatePlayerSelected, savePlayer} =
    useContext(PlayersContext);
  const {modalEditPlayers} = useContext(UIContext);

  const [name, setName] = useState(
    edit ? selectPlayer?.player[0]?.name || '' : playerSelected.player[0].name,
  );
  const [image, setImage] = useState(
    edit
      ? selectPlayer?.player[0]?.image || '1'
      : playerSelected.player[0].image,
  );
  const [openTooltip, setOpenTooltip] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const updatePlayerValues = (value1, value2) => {
    setName(value1);
    setImage(value2);
    if (edit) {
      updateSelectPlayer(value1, value2);
    } else {
      updatePlayerSelected(value1, value2);
    }
  };

  const saveNewPlayerValues = () => {
    if (edit) {
      saveSelectPlayer(name, image);
    } else {
      savePlayer(name, image);
    }
    setImage('');
    setName('');
    modalEditPlayers();
  };

  const handleImage = url => {
    setImage(url);
  };

  const handleDisabled = isdisabled => {
    setDisabled(isdisabled);
  };

  return (
    <View style={styles().container}>
      <View style={styles(name === '').warning}>
        <SVGIcons IconProp={AlertSVG} styles={{}} />
        <Text style={styles().warningText}>Ingrese un nombre</Text>
      </View>
      <View style={styles().imageInput}>
        <TouchableOpacity onPress={() => setOpenTooltip(!openTooltip)}>
          <SVGIcons IconProp={EditSVG} styles={styles().edit} />
          <ShowImage
            image={getUrl(image).url}
            isWeb={getUrl(image).isWeb}
            style={styles().img}
          />
        </TouchableOpacity>
        <ImagePicker
          openTooltip={openTooltip}
          name={name}
          updatePlayerValues={updatePlayerValues}
          handleData={handleImage}
          handleDisabled={handleDisabled}
        />
        <TextInput
          style={styles().input}
          placeholder="Escribe nombre"
          value={name}
          onChange={e => updatePlayerValues(e.nativeEvent.text, image)}
        />
      </View>

      <TouchableOpacity
        style={styles().btn}
        onPress={saveNewPlayerValues}
        disabled={disabled}>
        <Text style={styles().textbtn}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}

const ImagePicker = ({
  openTooltip,
  name,
  updatePlayerValues,
  handleData,
  handleDisabled,
}) => {
  return (
    <View elevation={10} style={styles(openTooltip).tooltip}>
      <View style={styles().triangle} />
      <View style={styles().tooltipContainer}>
        <Text style={styles().title}>Elige una imagen</Text>
        <View style={styles().images}>
          <View style={styles().imagesRow}>
            <TouchableOpacity onPress={() => updatePlayerValues(name, '1')}>
              <Image source={require('../../../assets/images/avatar1.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => updatePlayerValues(name, '2')}>
              <Image source={require('../../../assets/images/avatar2.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => updatePlayerValues(name, '3')}>
              <Image source={require('../../../assets/images/avatar3.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles().imagesRow}>
            <TouchableOpacity onPress={() => updatePlayerValues(name, '4')}>
              <Image source={require('../../../assets/images/avatar4.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => updatePlayerValues(name, '5')}>
              <Image source={require('../../../assets/images/avatar5.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => updatePlayerValues(name, '6')}>
              <Image source={require('../../../assets/images/avatar6.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles().imagesRow}>
            <TouchableOpacity onPress={() => updatePlayerValues(name, '7')}>
              <Image source={require('../../../assets/images/avatar7.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => updatePlayerValues(name, '8')}>
              <Image source={require('../../../assets/images/avatar8.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => updatePlayerValues(name, '9')}>
              <Image source={require('../../../assets/images/avatar9.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles().openPhotos}
          onPress={() => addImage(handleData, handleDisabled)}>
          <SVGIcons IconProp={LibrarySVG} styles={{}} />
          <Text style={styles().openPhotoText}>Abrir fotos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
