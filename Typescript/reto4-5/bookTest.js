"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("./book");
var book1 = new book_1.Book("Intro a js", 220, "233444-BC2444", "Pepe", "Edicion especial");
book1.setAuthor("Carlos");
console.log(book1.toString());
