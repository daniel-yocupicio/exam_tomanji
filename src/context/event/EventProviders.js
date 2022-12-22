import React, {useReducer} from 'react';
import {getRandom} from '../../utils';
import {getNormalDate} from '../../utils/date';
import {EventContext} from './EventContext';
import {eventReducer} from './eventReducer';

const EVENT_INITIAL_STATE = {
  // {
  //  nameEvent: '',
  //  dateEvent: 'date', /show 16 marzo 2021
  //  players: [{name: '', image: ''}],
  //  photoEvent: '',
  // }
  events: [],
  event: null,
  selectPlayer: null,
};

export const EventProvider = ({children}) => {
  const [state, dispatch] = useReducer(eventReducer, EVENT_INITIAL_STATE);

  const addEvent = (players, name, image) => {
    const payload = {
      nameEvent: name,
      dateEvent: getNormalDate(),
      players: players,
      photoEvent: image,
    };
    dispatch({type: '[Events] - add event', payload: payload});
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
    dispatch({type: '[Event] - update event player', payload: newArray});
  };

  const addPlayersToEvent = arrayPlayers => {
    const newArray = arrayPlayers.map(player => ({
      name: player,
      image: getRandom(1, 9).toString(),
    }));
    dispatch({type: '[Event] - add players to event', payload: newArray});
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
      }}>
      {children}
    </EventContext.Provider>
  );
};
