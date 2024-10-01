const Category = require("../models/Category");
const User = require("../models/User");

// add

async function addCategory(userId, category) {
  const newCategory = await Category.create(category);

  await User.findByIdAndUpdate(userId, { $push: { categories: newCategory } });

  return newCategory;
}

//delete

async function deleteCategory(userId, categoryId) {
  await Category.deleteOne({ _id: categoryId });
  await User.findByIdAndUpdate(userId, { $pull: { categories: categoryId } });
}

//edit

async function editCategory(id, category) {
  const newCategory = await Category.findByIdAndUpdate(id, category, {
    returnDocument: "after",
  });

  return newCategory;
}

//get Income Categories
async function getIncomeCategories(userId) {
  return Category.find({owner: userId}, {isIncome: true});
}

//get Expenses Categories
async function getExpensesCategories(userId) {
  return Category.find({owner: userId}, {isIncome: false});
}

module.exports = {
  addCategory,
  deleteCategory,
  editCategory,
  getIncomeCategories,
  getExpensesCategories,
};
