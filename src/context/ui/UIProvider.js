import React, {useReducer} from 'react';
import {UIContext, uiReducer} from './';

const UI_INITIAL_STATE = {
  isModal1Open: false,
  isModal2Open: false,
  isModal3Open: false,
};

export const UIProvider = ({children}) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  function modalAddPlayers() {
    dispatch({type: '[Modal 1] - change state'});
  }

  function modalEditPlayers() {
    dispatch({type: '[Modal 3] - change state'});
  }

  function modalAddEvent() {
    dispatch({type: '[Modal 2] - change state'});
  }

  return (
    <UIContext.Provider
      value={{...state, modalAddPlayers, modalEditPlayers, modalAddEvent}}>
      {children}
    </UIContext.Provider>
  );
};
