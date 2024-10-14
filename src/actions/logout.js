import { ACTION_TYPE } from './action-type';
import { request } from '../utils';

export const logout = () => {
  sessionStorage.removeItem('userData');
  request('/api/logout', 'POST');
  return {
    type: ACTION_TYPE.LOGOUT,
  };
};
