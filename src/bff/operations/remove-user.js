import { setUserRole } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const removeUser = async (hash, userId) => {
  const accessRoles = [ROLE.ADMIN];

  const access = await sessions.access(hash, accessRoles);

  if (!access) {
    return {
      error: 'Доступ запрещен',
      res: null,
    };
  }

  setUserRole(userId);

  return {
    error: null,
    res: true,
  };
};
