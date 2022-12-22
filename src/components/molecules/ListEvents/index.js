import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import {EventContext} from '../../../context/event/EventContext';
import EventCard from '../../atoms/EventCard';
import styles from './styles';

export default function ListEvents({navigation}) {
  const {events} = useContext(EventContext);
  
  return (
    <FlatList
      data={events}
      renderItem={({item, index}) => (
        <EventCard data={item} navigation={navigation} index={index} />
      )}
      style={styles.container}
    />
  );
}
