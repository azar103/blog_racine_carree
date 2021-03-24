const Book = require("../models/book");

exports.getAllBooks = async (req, res, next) => {
  try {
    const users = await Book.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send({ error });
  }
};
exports.createBook = async (req, res, next) => {
  const { title, price, author, category, description, img } = req.body;
  let book;
  try {
    book = await Book.findOne({ title });
    if (book) {
      return res.status(400).send({ msg: "book already exist!" });
    } else {
      book = new Book({ title, price, author, category, description, img });
      await book.save();
      res.status(200).send({ book });
    }
  } catch (error) {
    console.dir(error);
    res.status(400).send({ error });
  }
};
exports.updateBook = async (req, res, next) => {
  const { _id } = req.params;
  try {
    await Book.updateOne({ _id, $set: { ...req.body } });
    res.status(200).send({ msg: "book updated" });
  } catch (error) {
    res.status(200).send({ error });
  }
};
exports.deleteBook = (req, res, next) => {};
exports.getOneBook = (req, res, next) => {};
