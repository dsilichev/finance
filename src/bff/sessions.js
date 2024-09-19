import { getSession, addSession, deleteSession } from './api';

export const sessions = {
  list: {},
  create(user) {
    const hash = Math.random().toFixed(50);

    addSession(hash, user);
    //this.list[hash] = user;
    return hash;
  },
  async remove(hash) {
    // delete this.list[hash];
    const session = await getSession(hash);

    if (!session) {
      return;
    }
    deleteSession(session.id);
  },
  async access(hash, accessRoles) {
    const session = await getSession(hash);
    // const user = this.list[hash];
    return !!session?.user && accessRoles.includes(session.user.roleId);
  },
};
