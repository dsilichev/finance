const express = require("express");
const {
  addTransaction,
  deleteTransaction,
  editTransaction,
  getTransactions,
} = require("../controllers/transaction");
const authenticated = require("../middlewares/authenticated");

const router = express.Router({ mergeParams: true });

//router.get("/", async (req, res) => {});

//router.get("/:id", async (req, res) => {});

router.get("/", authenticated, async (req, res) => {
  try {
    const { transactions, lastPage } = await getTransactions(
      req.user.id,
      req.query.account,
      req.query.category,
      req.query.limit,
      req.query.page
    );
  
    res.send({ data: { lastPage, transactions } });
  } catch (e) {
    res.send({ error: e.message || "Not authenticated" });
  }
});

router.post("/", authenticated, async (req, res) => {
  const newTransaction = await addTransaction({
    owner: req.user.id,
    amount: req.body.amount,
    account: req.body.accountId,
    category: req.body.categoryId,
    isIncome: req.body.isIncome,
  });

  res.send({ data: newTransaction });
});

router.patch("/:id", authenticated, async (req, res) => {
  const updatedTransaction = await editTransaction(req.params.id, {
    amount: req.body.amount,
    account: req.body.accountId,
    isIncrease: req.body.isIncrease,
  });

  res.send({ data: updatedTransaction });
});

router.delete("/:id", authenticated, async (req, res) => {
  await deleteTransaction(req.params.id);

  res.send({ error: null });
});

module.exports = router;
