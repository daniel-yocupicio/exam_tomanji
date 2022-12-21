export const eventReducer = (state, action) => {
  switch (action.type) {
    case '[Events] - add event':
      return {...state, events: [...state.events, action.payload]};
    case '[Events] - select event':
      return {...state, event: action.payload};
    case '[Event] - select player':
      return {...state, selectPlayer: action.payload};
    case '[Events] - delete player':
      return {...state, event: action.payload};

    default:
      return state;
  }
};
