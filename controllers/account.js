const Account = require("../models/Account");
const User = require("../models/User");

// add

async function addAccount(userId, account) {
  const newAccount = await Account.create(account);

  await User.findByIdAndUpdate(userId, { $push: { accounts: newAccount } });

  return newAccount;
}

//delete

async function deleteAccount(userId, accountId) {
  await Account.deleteOne({ _id: accountId });
  await User.findByIdAndUpdate(userId, { $pull: { accounts: accountId } });
}

//edit

async function editAccount(id, account) {
  const newAccount = await Account.findByIdAndUpdate(id, account, {
    returnDocument: "after",
  });
}

//get Accounts
async function getAccounts(userId) {
  return Account.findById();
}

//get Account
async function getAccount(id) {
  return Account.findById(id);
}

module.exports = {
  addAccount,
  deleteAccount,
  editAccount,
};
