const fs = require("fs");

const path = require("path");

const filePath = path.join(__dirname, "../data/book.json");

const addBook = (ISBN, name, author, genre, copies, publication, fine) => {
  console.log(ISBN);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Error al leer el archivo JSON" });
    }
    let books = JSON.parse(data);
    const newId = ISBN;
    const newBook = {
      name,
      author,
      genre,
      copies,
      publication,
      fine,
    };

    books[newId] = newBook;
    fs.writeFile(filePath, JSON.stringify(books), (err) => {
      if (err) {
        console.log(err);
        return false;
      }

      console.log("OK");
      return true;
    });
  });
};

module.exports = { addBook };
