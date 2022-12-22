import React, {useEffect, useReducer, useState} from 'react';
import {getRandom} from '../../utils';
import {getNormalDate} from '../../utils/date';
import {EventContext} from './EventContext';
import {eventReducer} from './eventReducer';
import {setFunction, getFunction} from '../../services';
import {Alert} from 'react-native';

const EVENT_INITIAL_STATE = {
  // {
  //  nameEvent: '',
  //  dateEvent: 'date', /show 16 marzo 2021
  //  players: [{name: '', image: ''}],
  //  photoEvent: '',
  // }
  events: [],
  event: null,
  selectPlayer: {player: [{name: '', image: '1'}]},
};

export const EventProvider = ({children}) => {
  const [state, dispatch] = useReducer(eventReducer, EVENT_INITIAL_STATE);

  useEffect(() => {
    try {
      getFunction('events').then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          dispatch({
            type: '[Events] - loan events',
            payload: documentSnapshot.data().data,
          });
        });
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  const addEvent = (players, name, image) => {
    const payload = {
      nameEvent: name,
      dateEvent: getNormalDate(),
      players: players,
      photoEvent: image,
    };
    dispatch({type: '[Events] - add event', payload: payload});
    setFunction('events', '1', {data: [...state.events, payload]});
  };

  const selectEvent = event => {
    dispatch({type: '[Events] - select event', payload: event});
  };

  const deleteEventPlayer = index => {
    const newArray = state.event.players.filter(
      (_, index2) => index !== index2,
    );
    const payload = {...state.event, players: newArray};
    dispatch({type: '[Events] - delete player', payload});
  };

  const selectPlayerEvent = index => {
    const player = state.event.players.filter((_, index2) => index === index2);
    dispatch({type: '[Event] - select player', payload: {player, index}});
  };

  const updateSelectPlayer = (name, image) => {
    const payload = {
      index: state.selectPlayer.index,
      player: [{name, image}],
    };
    dispatch({type: '[Event] - update select player', payload});
  };

  const saveSelectPlayer = (name, image) => {
    const newArray = state.event.players;
    newArray[state.selectPlayer.index] = {name, image};
    console.log(newArray);
    dispatch({type: '[Event] - update event player', payload: newArray});
  };

  const addPlayersToEvent = arrayPlayers => {
    const newArray = arrayPlayers.map(player => ({
      name: player,
      image: getRandom(1, 9).toString(),
    }));
    dispatch({type: '[Event] - add players to event', payload: newArray});
  };

  const saveUpdatedEvent = () => {
    const allEvents = state.events;
    allEvents[state.event.index].players = state.event.players;
    dispatch({type: '[Event] - update players in event', payload: allEvents});
    setFunction('events', '1', {data: allEvents});
  };

  return (
    <EventContext.Provider
      value={{
        ...state,
        addEvent,
        selectEvent,
        deleteEventPlayer,
        selectPlayerEvent,
        updateSelectPlayer,
        saveSelectPlayer,
        addPlayersToEvent,
        saveUpdatedEvent,
      }}>
      {children}
    </EventContext.Provider>
  );
};
