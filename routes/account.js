const express = require("express");
const {
  addAccount,
  deleteAccount,
  editAccount,
} = require("../controllers/account");
const authenticated = require("../middlewares/authenticated");

const router = express.Router({ mergeParams: true });

//router.get("/", async (req, res) => {});

//router.get("/:id", async (req, res) => {});

router.post("/", authenticated, async (req, res) => {
  const newAccount = await addAccount(req.user.id, {
    owner: req.user.id,
    title: req.body.title,
    currency: req.body.currency,
  });

  res.send({ data: newAccount });
});

router.patch("/:id", async (req, res) => {
  const updatedAccount = await editAccount(req.params.id, {
    title: req.body.title,
    currency: req.body.currency,
  });
});

router.delete("/:id", authenticated, async (req, res) => {
  await deleteAccount(req.user.id, req.params.id);

  res.send({ error: null })
});

module.exports = router;
