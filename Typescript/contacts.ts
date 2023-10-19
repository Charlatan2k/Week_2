import { Person } from "./person";

export class Contacts{
  public lista: Person[];

  constructor(){
    this.lista = [];
  }

  public printCalendar():string{
    let resultado;
    for (let i = 0; i < Person.length; i++){
      resultado[i] = this.lista[i]
    }
    return resultado
    }
  }