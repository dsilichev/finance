const express = require("express");
const { register, login } = require("../controllers/user");
const authenticated = require("../middlewares/authenticated");
const mapUser = require("../helpers/mapUser");

const router = express.Router({ mergeParams: true });

router.get('/', authenticated, async (req, res) => {
  const user = req.user;
  res.send({ data: { user: mapUser(user) } });
})

router.post("/register", async (req, res) => {
  try {
    const { user, token } = await register(
      req.body.name,
      req.body.email,
      req.body.password
    );

    res
      .cookie("token", token, { httpOnly: true })
      .send({ error: null, user: mapUser(user) });
  } catch (e) {
    res.send({ error: e.message || "Unknown error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { user, token } = await login(req.body.email, req.body.password);

    res
      .cookie("token", token, { httpOnly: true })
      .send({ error: null, user: mapUser(user) });
  } catch (e) {
    res.send({ error: e.message || "Unknown error" });
  }
});

router.post("/logout", (req, res) => {
  res.cookie("token", "", { httpOnly: true }).send({});
});

module.exports = router;