const bookController = require("../controllers/bookController");

const getBookData = async (req, res) => {
  try {
    await bookController.getBookData().then((books) => {
      res.status(200).json({ books: books });
    });
  } catch (error) {
    res.status(500).json({ error: "Error getting book data" });
  }
};

const createBook = async (req, res) => {
  try {
    const { ISBN, name, author, genre, copies, publication, fine } = req.body;
    console.log("HOLA " + ISBN);
    await bookController.addBook(
      ISBN,
      name,
      author,
      genre,
      copies,
      publication,
      fine
    );

    res.status(200).json({ message: "Book registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error registering book" });
  }
};
const deleteBook = async (req, res) => {
  try {
    await bookController.deleteBook(req.params.id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting the register" });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id, name, author, genre, copies, date, fine } = req.body;
    
    await bookController.updateBook(
      id,
      name,
      author,
      genre,
      copies,
      date,
      fine
    );
    res.status(200).json({ message: "Book updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error updating book" });
  }
};

module.exports = {
  getBookData,
  createBook,
  deleteBook,
  updateBook,
};
