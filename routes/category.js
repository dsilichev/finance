const express = require("express");
const {
  addCategory,
  deleteCategory,
  editCategory,
  getIncomeCategories,
  getExpensesCategories,
} = require("../controllers/category");
const authenticated = require("../middlewares/authenticated");

const router = express.Router({ mergeParams: true });

//router.get("/", async (req, res) => {});

//router.get("/:id", async (req, res) => {});

router.post("/", authenticated, async (req, res) => {
  const newCategory = await addCategory(req.user.id, {
    owner: req.user.id,
    title: req.body.title,
    isIncome: req.body.isIncome,
  });

  res.send({ data: newCategory });
});

router.patch("/:id", authenticated, async (req, res) => {
  const updatedCategory = await editCategory(req.params.id, {
    title: req.body.title,
  });

  res.send({ data: updatedCategory });
});

router.delete("/:id", authenticated, async (req, res) => {
  await deleteCategory(req.user.id, req.params.id);

  res.send({ error: null });
});

module.exports = router;
