const express = require("express");
const {
  addAccount,
  deleteAccount,
  editAccount,
} = require("../controllers/account");

const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {});

router.get("/:id", async (req, res) => {});

router.post("/", async (req, res) => {
  await addAccount({
    owner: req.user.id,
    title: req.body.title,
    currency: req.body.currency,
  });
});

router.post("/:id", async (req, res) => {});

router.delete("/:id", async (req, res) => {});

module.exports = router;
