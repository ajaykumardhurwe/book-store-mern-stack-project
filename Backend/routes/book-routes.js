const express = require('express');
const Book = require('../model/Book');
const booksController = require("../controllers/books-controller");
const router = express.Router();
// import book product
const Product = require("../model/Book")
router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);
router.get("/:id", booksController.getById);
router.put("/:id",booksController.updateBook);
router.delete("/:id", booksController.deleteBook);
module.exports = router;