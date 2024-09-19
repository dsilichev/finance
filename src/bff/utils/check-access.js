import { sessions } from '../sessions';

export const checkAccess = (userSession, userRoleId) => {
  const user = sessions.list[userSession];

  return !!user && accessRoles.includes(user.roleId);
};
