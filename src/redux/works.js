export const UPDATE_WORKS= 'UPDATE_WORKS';

export const updateWorks= works => ({
  type: UPDATE_WORKS,
  works,
});


const initialState = {
  works: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_WORKS:
      return {
        ...state,
        works: action.works,
      };
    default:
      return state;
  }
};
