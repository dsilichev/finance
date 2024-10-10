import { ACTION_TYPE } from '../actions';

const initialUserState = {
  id: null,
  name: null,
  email: null,
  accounts: [],
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_USER: {
      console.log('state', { ...state, ...action.payload });
      return {
        ...state,
        ...action.payload,
      };
    }
    case ACTION_TYPE.LOGOUT: {
      return initialUserState;
    }
    default:
      return state;
  }
};
