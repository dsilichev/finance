module.exports = function (user) {
  return {
    id: user.id,
    email: user.email,
    imagePath: user.imagePath,
    accounts: user.accounts,
  };
};
