const Account = require("../models/Account");

// add

async function addAccount(account) {
  const newAccount = await Account.create(account);

  return newAccount;
}

//delete

async function deleteAccount(id) {
  return Account.deleteOne({ _id: id });
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
  editAccount
}