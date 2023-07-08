const bookController = require("../controllers/bookController");

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
    res.redirect("/dashBoard/bookManagement");
  } else {
    res.redirect("/dashBoard/bookManagement");
  }
};

module.exports = {
  createBook,
};
