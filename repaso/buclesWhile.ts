// Función de devolver si hay numero par o no

function hasEven(myNums:number[]):boolean{
  let i:number = 0
  let result:boolean = false
  while (i < myNums.length){
    if(myNums[i] % 2 === 0){
      result = true
    }
    i++
  }
  return result;
}

let numArr: number[] = [2];

console.log(hasEven(numArr));


// Función para comprobar que todos los nombre del array empiezan por m
function startsWithM(myNames:string[]):boolean{
  let i:number = 0;
  let result: boolean = true;

  while (i < myNames.length){
    if (myNames[i][0].toLowerCase() !== "m"){
      result = false
    }
    i++
  }
  return result;
}

let mArr = ["Marta", "Manuel", "Manolo"]

console.log(startsWithM(mArr));
