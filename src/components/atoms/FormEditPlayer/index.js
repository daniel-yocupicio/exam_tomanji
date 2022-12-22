import React, {useContext, useState} from 'react';
import {View, TextInput, Image, Text, TouchableOpacity} from 'react-native';
import EditSVG from '../../../assets/images/edit.svg';
import AlertSVG from '../../../assets/images/alert.svg';
import LibrarySVG from '../../../assets/images/library.svg';
import ShowImage from '../ShowImage';
import SVGIcons from '../SVGIcons';
import styles from './styles';
import {EventContext, PlayersContext, UIContext} from '../../../context';
import {getUrl} from '../../../utils';

export default function FormEditPlayer({edit = false}) {
  const {selectPlayer, updateSelectPlayer, saveSelectPlayer} =
    useContext(EventContext);
  const {playerSelected, updatePlayerSelected, savePlayer} =
    useContext(PlayersContext);
  const {modalEditPlayers} = useContext(UIContext);
  console.log(selectPlayer);

  const [name, setName] = useState(
    edit ? selectPlayer?.player[0]?.name || '' : playerSelected.player[0].name,
  );
  const [image, setImage] = useState(
    edit
      ? selectPlayer?.player[0]?.image || '1'
      : playerSelected.player[0].image,
  );
  const [openTooltip, setOpenTooltip] = useState(false);

  const updatePlayerValues = (value1, value2) => {
    setName(value1);
    setImage(value2);
    if (edit) {
      updateSelectPlayer(name, image);
    } else {
      updatePlayerSelected(name, image);
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
        />
        <TextInput
          style={styles().input}
          placeholder="Escribe nombre"
          value={name}
          onChange={e => updatePlayerValues(e.nativeEvent.text, image)}
        />
      </View>

      <TouchableOpacity style={styles().btn} onPress={saveNewPlayerValues}>
        <Text style={styles().textbtn}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}

const ImagePicker = ({openTooltip, name, updatePlayerValues}) => {
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
        <TouchableOpacity style={styles().openPhotos}>
          <SVGIcons IconProp={LibrarySVG} styles={{}} />
          <Text style={styles().openPhotoText}>Abrir fotos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
