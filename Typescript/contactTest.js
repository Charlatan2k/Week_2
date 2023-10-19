"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var contacts_1 = require("./contacts");
var contacto1 = new contacts_1.Contacts();
var persona1 = new person_1.Person("David", 18, "Calle Juan");
var persona2 = new person_1.Person("Maria", 24, "Calle Dr Pepe");
var persona3 = new person_1.Person("Luis", 21, "Iglesia");
console.log(contacto1.lista = [persona1, persona2, persona3]);
