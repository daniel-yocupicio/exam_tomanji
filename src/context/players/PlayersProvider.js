import React, {useReducer} from 'react';
import {getRandom} from '../../utils';
import {PlayersContext} from './PlayersContext';
import {playersReducer} from './playersReducer';

const PLAYERS_INITIAL_STATE = {
  players: [],
  playerSelected: null,
};

export const PlayersProvider = ({children}) => {
  const [state, dispatch] = useReducer(playersReducer, PLAYERS_INITIAL_STATE);

  const addPlayers = arrayPlayers => {
    const newArray = arrayPlayers.map(player => ({
      name: player,
      image: getRandom(1, 9).toString(),
    }));
    dispatch({type: '[Players] - add players', payload: newArray});
  };

  const deletePlayer = index => {
    const newArray = state.players.filter((_, index2) => index !== index2);
    dispatch({type: '[Players] - delete player', payload: newArray});
  };

  const selectPlayer = index => {
    const player = state.players.filter((_, index2) => index === index2);
    dispatch({type: '[Players] - select player', payload: {player, index}});
  };

  const updatePlayerSelected = (name, image) => {
    const payload = {
      index: state.playerSelected.index,
      player: [{name, image}],
    };
    dispatch({type: '[Players] - select player', payload});
  };

  const savePlayer = (name, image) => {
    const newArray = state.players;
    newArray[state.playerSelected.index] = {name, image};
    dispatch({type: '[Players] - update player', payload: newArray});
  };

  const resetPlayers = () => {
    dispatch({type: '[Players] - reset players'});
  };

  return (
    <PlayersContext.Provider
      value={{
        ...state,
        addPlayers,
        deletePlayer,
        selectPlayer,
        updatePlayerSelected,
        savePlayer,
        resetPlayers,
      }}>
      {children}
    </PlayersContext.Provider>
  );
};
