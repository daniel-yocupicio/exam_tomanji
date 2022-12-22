export const playersReducer = (state, action) => {
  switch (action.type) {
    case '[Players] - add players':
      return {...state, players: [...state.players, ...action.payload]};
    case '[Players] - delete player':
      return {...state, players: action.payload};
    case '[Players] - select player':
      return {...state, playerSelected: action.payload};
    case '[Players] - unselect player':
      return {...state, playerSelected: null};
    case '[Players] - update player':
      return {...state, players: action.payload};
    case '[Players] - reset players':
      return {...state, players: []};
    case '[Events] - load players':
      return {...state, players: action.payload};

    default:
      return state;
  }
};
