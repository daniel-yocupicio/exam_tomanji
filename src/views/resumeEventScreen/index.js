import React, {useContext} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Background from '../../components/atoms/Background';
import AddPlayerModal from '../../components/molecules/AddPlayerModal';
import EditPlayerModal from '../../components/molecules/EditPlayerModal';
import PlayersList from '../../components/molecules/PlayersList';
import {EventContext} from '../../context';
import styles from './styles';

export default function ResumeEventScreen({navigation, route}) {
  const {event, saveUpdatedEvent} = useContext(EventContext);

  return (
    <View style={styles.screenContainer}>
      <Background />
      <EditPlayerModal edit={true} />
      <AddPlayerModal edit={true} />
      <View style={styles.flatListContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.img}
        />
        <View style={styles.backFlatList}>
          <View style={styles.marginTop}>
            <PlayersList
              players={event.players}
              navigation={navigation}
              edit={true}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.btn1} onPress={() => navigation.goBack()}>
        <Text style={styles.textbtn1}>PARTIDAS ANTERIORES</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn2} onPress={saveUpdatedEvent}>
        <Text style={styles.textbtn2}>CONFIRMAR</Text>
      </TouchableOpacity>
    </View>
  );
}
