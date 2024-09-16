const mongoose = require("mongoose");
const currency = require("../constants/currency");

const AccountSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      default: currency.RUB,
    },
    type: {
      type: String,
    },
    balance: {
      type: mongoose.Schema.Types.Decimal128,
      default: 0,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Account = mongoose.model("Account", AccountSchema);

module.exports = Account;
