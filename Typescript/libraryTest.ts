import { Book } from "./book";
import { Library } from "./library";

let book1 = new Book("Intro a js", 220, "233444-BC2444", "Pepe", "Edicion especial");
let book2 = new Book("Intro a C", 1600, "532444-BC2444", "Luis", "Edicion primera");
let book3 = new Book("Intro a python", 180, "621444-BC2444", "Carlos", "Edicion navidad");


let bookArray: Book[] = [];

bookArray.push(book1, book2, book3);

let library1 = new Library(bookArray,"Calle 2", "Luis");


console.log(library1.findByAuthor("Carlos"));

