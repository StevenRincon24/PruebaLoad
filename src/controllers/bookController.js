const data = require("../data/book.json");
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../data/book.json");

const getBookData = () => {
  const books = Object.keys(data).map((bookId) => {
    return {
      id: bookId,
      ...data[bookId],
    };
  });
  return books;
};

const addBook = (ISBN, name, author, genre, copies, publication, fine) => {
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

const deleteBook = (isbn) => {
  return new Promise((resolve, reject) => {
    if (data.hasOwnProperty(isbn)) {
      delete data[isbn];
      const newContent = JSON.stringify(data, null, 2);
      fs.writeFile(filePath, newContent, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    } else {
      reject(new Error("El libro no existe"));
    }
  });
};

const updateBook = (id, name, author, genre, copies, date, fine) => {
  console.log(id);
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      let books = JSON.parse(data);

      if (books.hasOwnProperty(id)) {
        books[id] = {
          name,
          author,
          genre,
          copies,
          date,
          fine,
        };

        const newContent = JSON.stringify(books, null, 2);

        fs.writeFile(filePath, newContent, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(books[id]);
          }
        });
      } else {
        reject(new Error("El libro no existe"));
      }
    });
  });
};

module.exports = {
  getBookData,
  addBook,
  deleteBook,
  updateBook,
};
