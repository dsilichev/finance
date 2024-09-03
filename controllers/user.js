const bcrypt = require("bcrypt");
const User = require("../models/User");
const { generate } = require("../helpers/token");

//register

async function register(email, password) {
  if (!password) {
    throw new Error("Password is empty");
  }
  const passwordHash = await bcrypt.hash(password, 10);

  const user = await User.create({ email, password: passwordHash });
  const token = generate({ id: user.id });

  return { user, token };
}

//login

async function login(email, password) {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordMatch = bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw new Error("Wrong password");
  }

  const token = generate({ id: user.id });

  return { user, token };
}

function getUser(id) {
  return User.findById(id);
}

//delete

function deleteUser(id) {
  return User.deleteOne({ _id: id });
}

// edit (image, password)

function updateUser(id, userData) {
  return User.findByIdAndUpdate(id, userData, { returnDocument: "after" });
}

module.exports = {
  register,
  login,
  getUser,
  deleteUser,
  updateUser,
};
