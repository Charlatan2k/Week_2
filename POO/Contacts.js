const myLib = require("./persona")

class Contacts{

  constructor(){
    this.lista = [];

  }

  printPersons(){
    console.log(this.lista);
  }
}

module.exports = {Contacts}