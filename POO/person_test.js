const myLib = require('./persona');

let persona1 = new myLib.Person("David", 18, 180, 70, 2004, "España", ["correr", "programar", "nadar"]);

console.log(persona1.printHobbies());


