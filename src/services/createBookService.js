const bookController = require("../controllers/bookController");

const getBookData = () => {
  const bookData = bookController.getBookData();
  console.log(bookData);
  return bookData;
};

const createBook = (req, res) => {
  const { ISBN, name, author, genre, copies, publication, fine } = req.body;
  const book = bookController.addBook(
    ISBN,
    name,
    author,
    genre,
    copies,
    publication,
    fine
  );
  if (book) {
    res.redirect("/dashBoard/createBookManagement");
  } else {
    res.redirect("/dashBoard/createBookManagement");
  }
};

module.exports = {
  getBookData,
  createBook,
};
