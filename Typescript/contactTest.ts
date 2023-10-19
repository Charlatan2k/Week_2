import { Person } from "./person"
import { Contacts } from "./contacts"

let contacto1 = new Contacts()
let persona1 = new Person("David", 18, "Calle Juan");
let persona2 = new Person("Maria", 24, "Calle Dr Pepe");
let persona3 = new Person("Luis", 21, "Iglesia");

console.log(contacto1.lista = [persona1, persona2, persona3]);
