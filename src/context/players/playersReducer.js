export const playersReducer = (state, action) => {
  switch (action.type) {
    case '[Players] - add players':
      return {...state, players: [...state.players, ...action.payload]};
    default:
      return state;
  }
};
