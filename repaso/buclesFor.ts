// Función todos los numeros impares hasta el parametro introducido

function evenNumbers(n:number):number[]{
  let resultado:number[] = [];
  for (let i = 1; i < n; i++){
    if (i % 3 === 0){
      resultado.push(i)
      
    }
       
  }
  return resultado;
}

// console.log(evenNumbers(10));


// Función de array al revés
function myRevert(myarr:string[]):string[]{
  let result:string[] = [];
  for(let i = myarr.length - 1; i >= 0; i--){
    result.push(myarr[i]);
    
    
  }

  return result;
}

let arr1 = ["hola", "que", "tal", "estás"] 

// console.log(myRevert(arr1));

// Función de imprimir el color que si está en el arcoiris
function isRainbow(colors:string[]):string[]{
  let rainbow: string[] = ["rojo", "naranja", "amarillo", "verde", "azul", "violeta", "morado"];
  let colorEs: string[] =  []
  for (let i = 0; i < colors.length; i++){
    const check = rainbow.some(color => color === colors[i])
  if (check){
    colorEs.push(colors[i])
    
  }
  

}
return colorEs;
}

let colores = ["verde", "gris", "negro"];

// console.log(isRainbow(colores));


// Función de dar la suma de todos los caracteres de todas las palabras en un array
export function add(myWords:string[]):number{
  let result: number = 0;
  for(let palabras of myWords){
    
    for ( let i = 0; i < palabras.length; i++){
      result += palabras[i].length
    }
  }
  return result;
}

let pal = ["Rodrigo", "cocina"]

// console.log(add(pal));
