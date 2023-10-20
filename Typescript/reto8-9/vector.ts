export class Vector{
  private elements: number[];

  constructor(n: number, k: number){
    this.elements = [];
    for (let i = 0; i < n; i++){
      this.elements.push(Math.floor(Math.random() * (k + 1)));
    }

  }

  public print():number[]{
    return this.elements;
  }

  public add(v1:Vector):Vector {
    let resultado:Vector = new Vector(0, 0)
    if(v1.elements.length == this.elements.length){
    for (let i = 0; i < this.elements.length; i++){
      resultado.elements.push(v1.elements[i] + this.elements[i]);
      }
    }

      return resultado;

    }


    public getElements(){
      return this.elements;
    }



    public subs(v1:Vector):Vector {
      let resultado:Vector = new Vector(0, 0)
      if(v1.elements.length == this.elements.length){
      for (let i = 0; i < this.elements.length; i++){
        resultado.elements.push(v1.elements[i] - this.elements[i]);
        }
      }
        return resultado;
  
      }

      public mult(v1:Vector):Vector {
        let resultado:Vector = new Vector(0, 0)
        for (let i = 0; i < this.elements.length; i++){
          resultado.elements.push(v1.elements[i] * this.elements[i]);
          }
    
          return resultado;
    
        }

        public multNumber(n:number):Vector {
          let resultado:Vector = new Vector(0, 0)
          for (let i = 0; i < this.elements.length; i++){
            resultado.elements.push(n * this.elements[i]);
            }
      
            return resultado;
      
          }
}
