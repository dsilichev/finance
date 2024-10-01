module.exports = function (user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    imagePath: user.imagePath,
    accounts: user.accounts,
  };
};
