const Transaction = require("../models/Transaction");
const User = require("../models/User");

// add

async function addTransaction(transaction) {
  const newTransaction = await Transaction.create(transaction);

  return newTransaction;
}

//delete

async function deleteTransaction(transactionId) {
  await Transaction.deleteOne({ _id: transactionId });
}

//edit

async function editTransaction(id, tranaction) {
  const newAccount = await Transaction.findByIdAndUpdate(id, transaction, {
    returnDocument: "after",
  });

  return newTransaction;
}

//get Transactions
async function getTransactions(account, limit = 10, page = 1) {
  const [transactions, count] = await Promise.all([
    Transaction.find(account ? { account: account } : null)
      .limit(limit)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 }),
      Transaction.countDocuments(account ? { account: account } : null),
  ]);

  return {
    transactions,
    lastPage: Math.ceil(count / limit),
  }
}

module.exports = {
  addTransaction,
  deleteTransaction,
  editTransaction,
  getTransactions,
};
