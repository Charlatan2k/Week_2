"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    // Getters
    Library.prototype.getBooks = function () {
        return this.books;
    };
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    // Setters
    Library.prototype.setBooks = function (books) {
        this.books = books;
    };
    Library.prototype.setAddress = function (address) {
        this.address = address;
    };
    Library.prototype.setManager = function (manager) {
        this.manager = manager;
    };
    Library.prototype.toString = function () {
        for (var i = 0; i < this.books.length; i++) {
            if (i + 1 <= this.books.length) {
                console.log("Book ".concat(i + 1));
                this.books[i].toString();
            }
        }
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        var matchingBooks = [];
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].getAuthor() === author) {
                matchingBooks.push(this.books[i]);
            }
        }
        return matchingBooks;
    };
    return Library;
}());
exports.Library = Library;
