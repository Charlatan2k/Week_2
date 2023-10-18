export class Book{

  constructor(private title: string, private nPages: number, private isbn: string, private author: string, private editorial: string){
    this.title = title;
    this.nPages = nPages;
    this.isbn = isbn;
    this.author = author;
    this.editorial = editorial;
  }


  // Getters

  public getTitle():string{
    return this.title
  }

  public getNpages():number{
    return this.nPages;
  }

  public getIsbn():string{
    return this.isbn;
  }

  public getAuthor():string{
    return this.author;
  }

  public getEditorial():string{
    return this.editorial;
  }


  // Setters

  public setTitle(title:string){
    this.title = title;
  }

  public setNpages(npages:number){
    this.nPages = npages;
  }

  public setIsbn(isbn:string){
    this.isbn = isbn;
  }

  public setAuthor(author:string){
    this.author = author;
  }

  public setEditorial(editorial:string){
    this.editorial = editorial;
  }


  public toString():void{
    console.log(
     `
      Title: ${this.getTitle()}
      Number of Pages: ${this.getNpages()}
      ISBN: ${this.getIsbn()}
      Author: ${this.getAuthor()}
      Editorial: ${this.getEditorial()}
    `);

  }
  
}


