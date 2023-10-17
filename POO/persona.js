class Person{

  constructor(nombre, edad, altura, peso, yearOfBirth, nacionalidad){
    this.nombre = nombre;
    this.altura = altura
    this.edad = edad;
    this.peso = peso;
    this.yearOfBirth = yearOfBirth;
    this.nacionalidad = nacionalidad;
    
  }


  calcularIMC(peso, altura){
    this.peso = peso;
    this.altura = altura;
    let resultado = peso / (altura * altura) * 10000;
    return resultado;
  }

  calcEdad(año){
    let resultado;
    this.yearOfBirth = año;
    resultado = 2023 - año;
    return resultado;
  }

  printAll(){
    for (let atr in this){
        console.log(`La propiedad ${atr} - ${this[atr]}`);
    }
  }

}



module.exports = {Person};