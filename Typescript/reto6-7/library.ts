import { Book } from "../reto4-5/book"


export class Library{
  private books: Book[];
  private address: string;
  private manager: string;

  constructor(books:Book[], address, manager){
    this.books = books;
    this.address = address;
    this.manager = manager;
  }


  // Getters

  public getBooks():Book[]{
    return this.books;
  }

  public getAddress():string{
    return this.address;
  }

  public getManager():string{
    return this.manager;
  }

  // Setters

  public setBooks(books:Book[]){
    this.books = books;
  }

  public setAddress(address:string){
    this.address = address;
  }

  public setManager(manager:string){
    this.manager = manager;
  }

  public toString(): void {
    for (let i = 0; i < this.books.length; i++) {
      if (i + 1 <= this.books.length) {
        console.log(`Book ${i + 1}`);
        this.books[i].toString();
      }
    }
  }
  

  public getNumberOfBooks():number{
    return this.books.length;
  }

  public findByAuthor(author: string): Book[] {
    const matchingBooks: Book[] = [];

    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].getAuthor() === author) {
        matchingBooks.push(this.books[i]);
      }
    }

    return matchingBooks;
  }
}