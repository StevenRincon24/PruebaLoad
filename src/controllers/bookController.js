const Book = require('../models/Book')

const getBookData = async () => {
  try {
    return await Book.find();
  } catch (error) {
    throw error
  }
};
const addBook = async (name, author, genre, copies, publication, fine) => {
  try {
    await Book.create({
      name: name, 
      author: author, 
      genre: genre,
      copies: copies, 
      publication: publication, 
      fine:fine,
    })
  } catch (error) {
    throw error;
  }
};

const deleteBook = async (isbn) => {
  try {
    await Book.findByIdAndRemove(isbn)
  } catch (error) {
    throw error
  }
}

const updateBook = async (id, name, author, genre, copies, publication, fine) => {
  try {
    const book = await Book.findByIdAndUpdate(id, {
      name: name, 
      author: author, 
      genre: genre,
      copies: copies, 
      publication: publication, 
      fine:fine,
    })
  } catch (error) {
    throw error
  }
};

module.exports = {
  getBookData,
  addBook,
  deleteBook,
  updateBook,
};
