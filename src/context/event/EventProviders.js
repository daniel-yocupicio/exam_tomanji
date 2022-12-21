import React, {useReducer} from 'react';
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

  const editEventPlayer = (index, player) => {};
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

  return (
    <EventContext.Provider
      value={{
        ...state,
        addEvent,
        selectEvent,
        editEventPlayer,
        deleteEventPlayer,
        selectPlayerEvent,
      }}>
      {children}
    </EventContext.Provider>
  );
};
