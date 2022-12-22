import React, {useReducer, useEffect} from 'react';
import {Alert} from 'react-native';
import {getRandom} from '../../utils';
import {PlayersContext} from './PlayersContext';
import {playersReducer} from './playersReducer';
import {getFunction, setFunction} from '../../services';

const PLAYERS_INITIAL_STATE = {
  players: [],
  playerSelected: {player: [{name: '', image: '1'}]},
};

export const PlayersProvider = ({children}) => {
  const [state, dispatch] = useReducer(playersReducer, PLAYERS_INITIAL_STATE);

  useEffect(() => {
    try {
      getFunction('players').then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          dispatch({
            type: '[Events] - load players',
            payload: documentSnapshot.data().data,
          });
        });
      });
    } catch (e) {
      Alert.alert('Error al cargar los datos', '', [{text: 'OK'}]);
    }
  }, []);

  const addPlayers = arrayPlayers => {
    const newArray = arrayPlayers.map(player => ({
      name: player,
      image: getRandom(1, 9).toString(),
    }));
    setFunction('players', '1', {data: [...state.players, ...newArray]});
    dispatch({type: '[Players] - add players', payload: newArray});
  };

  const deletePlayer = index => {
    const newArray = state.players.filter((_, index2) => index !== index2);
    setFunction('players', '1', {data: newArray});
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
    setFunction('players', '1', {data: newArray});
    dispatch({type: '[Players] - update player', payload: newArray});
  };

  const resetPlayers = () => {
    setFunction('players', '1', {data: []});
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
