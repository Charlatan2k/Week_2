export class Person{

  constructor(public name: string, public age: number, private address: string){
    this.name = name;
    this.age = age;
    this.address = address;
  }

  public printName(){
    console.log(this.name);
    
  }

   public yearOfBirth(currentYear: number):number{
    let resultado = currentYear - this.age;
    return resultado;
  }

  public setAddress(address:string):void{
    this.address = address;
  }

   public getAddress():string{
    return this.address;
  }
}
