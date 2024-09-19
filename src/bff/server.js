import {
  authorize,
  fetchRoles,
  fetchUsers,
  logout,
  register,
  updateUserRole,
  removeUser,
  fetchPost,
  addPostComment,
} from './operations';

export const server = {
  authorize,
  logout,
  register,
  fetchUsers,
  fetchRoles,
  updateUserRole,
  removeUser,
  fetchPost,
  addPostComment,
};
