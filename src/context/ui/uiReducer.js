export const uiReducer = (state, action) => {
  switch (action.type) {
    case '[Modal 1] - change state':
      return {...state, isModal1Open: !state.isModal1Open};

    case '[Modal 2] - change state':
      return {...state, isModal2Open: !state.isModal2Open};

    case '[Modal 3] - change state':
      return {...state, isModal3Open: !state.isModal3Open};

    default:
      return state;
  }
};
