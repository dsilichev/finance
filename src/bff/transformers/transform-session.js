export const transformSession = (dbSession) => ({
  id: dbSession.id,
  user: dbSession.user,
  hash: dbSession.hash,
});
