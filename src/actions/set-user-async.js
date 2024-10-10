import { setUser } from './set-user';
import { request } from '../utils';

export const setUserAsync = () => (dispatch) =>
  request(`/api`).then((userData) => {
    if (userData.data) {
      dispatch(setUser(userData.data.user));
    }

    return userData;
  });
