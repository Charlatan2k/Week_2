export class Person{

  constructor(public name: string, public age: number, private address: string){
    this.name = name;
    this.age = age;
    this.address = address;
  }

  printName(){
    console.log(this.name);
    
  }

  yearOfBirth(currentYear: number):number{
    let resultado = currentYear - this.age;
    return resultado;
  }

  setAddress(address:string):void{
    this.address = address;
  }

  getAddress():string{
    return this.address;
  }
}
