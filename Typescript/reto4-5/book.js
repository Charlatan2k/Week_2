"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    // Getters
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getNpages = function () {
        return this.nPages;
    };
    Book.prototype.getIsbn = function () {
        return this.isbn;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    // Setters
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.setNpages = function (npages) {
        this.nPages = npages;
    };
    Book.prototype.setIsbn = function (isbn) {
        this.isbn = isbn;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Book.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    Book.prototype.toString = function () {
        console.log("\n      Title: ".concat(this.getTitle(), "\n      Number of Pages: ").concat(this.getNpages(), "\n      ISBN: ").concat(this.getIsbn(), "\n      Author: ").concat(this.getAuthor(), "\n      Editorial: ").concat(this.getEditorial(), "\n    "));
    };
    return Book;
}());
exports.Book = Book;
