import { Person } from "../reto1-2/person";
import { Contacts } from "./contacts"

let contacto1 = new Contacts();
let persona1 = new Person("David", 18, "Calle Juan");
let persona2 = new Person("Maria", 24, "Calle Dr Pepe");
let persona3 = new Person("Luis", 21, "Iglesia");

contacto1.people = [persona1, persona2, persona3];

console.log(contacto1.printCalendar());

