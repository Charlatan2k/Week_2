class Person{

  constructor(nombre, edad){
    this.nombre = nombre;
    this.altura;
    this.edad = edad;
    this.peso;
    this.yearOfBirth;
    this.nacionalidad;
    
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

}

let persona1 = new Person("David", 18);

console.log(`Tienes ${persona1.calcEdad(2004)} años`);