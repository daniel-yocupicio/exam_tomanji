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

  return (
    <EventContext.Provider
      value={{
        ...state,
        addEvent,
      }}>
      {children}
    </EventContext.Provider>
  );
};
