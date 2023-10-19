const myLib = require("./Contacts");
const myLib2 = require("./persona")


let contact1 = new myLib.Contacts();

let persona1 = new myLib2.Person("David", 18, 180, 70, 2004, "España", ["correr", "programar", "nadar"]);
let persona2 = new myLib2.Person("Luis", 22, 1650, 50, 2010, "Grecia", ["dibujar", "leer", "nadar"]);
let persona3 = new myLib2.Person("Maria", 19, 170, 60, 2007, "Mexico", ["comer", "programar", "nadar"]);

contact1.lista.push(persona1, persona2, persona3);

contact1.printPersons();