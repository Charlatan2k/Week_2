import { Person } from "../reto1-2/person";

export class Contacts{
  public people: Person[];

  constructor(){
    this.people = [];
  }

  public printCalendar():void{
    for (let i = 0; i < this.people.length; i++){
      console.log(this.people);
    }
  }
}