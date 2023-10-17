class Person{

  constructor(nombre, edad){
    this.nombre = nombre;
    this.altura;
    this.edad = edad;
    this.peso;
    this.anyo;
    this.nacionalidad;
    
  }


  calcularIMC(peso, altura){
    this.peso = peso;
    this.altura = altura;
    let resultado = peso / (altura * altura) * 10000;
    return resultado;
  }

}

let persona1 = new Person("David", 18);

console.log(persona1);