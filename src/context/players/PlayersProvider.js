import React, {useReducer} from 'react';
import {getRandom} from '../../utils';
import {PlayersContext} from './PlayersContext';
import {playersReducer} from './playersReducer';

const PLAYERS_INITIAL_STATE = {
  players: [],
};

export const PlayersProvider = ({children}) => {
  const [state, dispatch] = useReducer(playersReducer, PLAYERS_INITIAL_STATE);

  const addPlayers = arrayPlayers => {
    const newArray = arrayPlayers.map(player => ({
      name: player,
      image: getRandom(1, 9).toString(),
    }));
    console.log(newArray);
    dispatch({type: '[Players] - add players', payload: newArray});
  };

  return (
    <PlayersContext.Provider value={{...state, addPlayers}}>
      {children}
    </PlayersContext.Provider>
  );
};
