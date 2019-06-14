const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  description: String, // changed name
  link: { type: String, required: true }, // added
  previewLink: { type: String, required: true }, // added
  thumbnail: { type: String, required: true }, // added
  date: { type: Date, default: Date.now }
  
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

// saved: { type: Boolean, default: false } // added