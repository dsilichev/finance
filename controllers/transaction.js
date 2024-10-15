const Transaction = require("../models/Transaction");
const User = require("../models/User");

// add

async function addTransaction(transaction) {
  const newTransaction = await Transaction.create(transaction);
  await newTransaction.populate("category");
  await newTransaction.populate("account");
  return newTransaction;
}

//delete

async function deleteTransaction(transactionId) {
  await Transaction.deleteOne({ _id: transactionId });
}

//edit

async function editTransaction(id, transaction) {
  const newTransaction = await Transaction.findByIdAndUpdate(id, transaction, {
    returnDocument: "after",
  });

  return newTransaction;
}

//get Transactions
async function getTransactions(
  userId,
  accountId,
  categoryId,
  limit = 10,
  page = 1
) {
  console.log(userId);
  const [transactions, count] = await Promise.all([
    Transaction.find(
      accountId ? { account: accountId } : { owner: userId },
      categoryId
        ? {
            category: categoryId,
          }
        : null
    )
      .limit(limit)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 }),
    Transaction.countDocuments(
      accountId ? { account: accountId } : { owner: userId },
      categoryId
        ? {
            category: categoryId,
          }
        : null
    ),
  ]);

  return {
    transactions,
    lastPage: Math.ceil(count / limit),
  };
}

module.exports = {
  addTransaction,
  deleteTransaction,
  editTransaction,
  getTransactions,
};
