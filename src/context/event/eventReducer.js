export const eventReducer = (state, action) => {
  switch (action.type) {
    case '[Events] - add event':
      return {...state, events: [...state.events, action.payload]};

    default:
      return state;
  }
};
