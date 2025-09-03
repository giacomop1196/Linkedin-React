// src/redux/profileSlice.js

// Action Types (opzionale ma consigliato per evitare errori di battitura)
const SET_PROFILE_DATA = 'profile/setProfileData';

// Action Creator
export const setProfileData = (profileData) => ({
  type: SET_PROFILE_DATA,
  payload: profileData,
});

// Initial State
const initialState = {
  data: null,
};

// Reducer
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;