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
    console.log("book true");
    res.redirect("/dashBoard/bookManagement");
  } else {
    console.log("book false");
    res.redirect("/dashBoard/createBookManagement");
  }
};
const deleteBook = (req, res) => {
  const ISBN = req.params.id;
  console.log(ISBN, " ISBN");
  bookController
    .deleteBook(ISBN)
    .then(() => {
      res.status(200).json({ message: "Register deleted successfully" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Error deleting the register" });
    });
};

const updateBook = (req, res) => {
  const { id, name, author, genre, copies, date, fine } = req.body;
  bookController
    .updateBook(id, name, author, genre, copies, date, fine)
    .then(() => {
      res.redirect("/dashboard/bookManagement");
    })
    .catch((err) => {
      console.error(err);
      res.redirect("/dashboard/bookManagement");
    });
};

module.exports = {
  getBookData,
  createBook,
  deleteBook,
  updateBook,
};
