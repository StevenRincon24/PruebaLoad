const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  copies: {
    type: Number,
    required: true,
    min: 0
  },
  publication: {
    type: Date,
    required: true
  },
  fine: {
    type: Number,
    required: true,
    min: 0
  }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
