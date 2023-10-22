"use strict";
// Función todos los numeros impares hasta el parametro introducido
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
function evenNumbers(n) {
    var resultado = [];
    for (var i = 1; i < n; i++) {
        if (i % 3 === 0) {
            resultado.push(i);
        }
    }
    return resultado;
}
// console.log(evenNumbers(10));
// Función de array al revés
function myRevert(myarr) {
    var result = [];
    for (var i = myarr.length - 1; i >= 0; i--) {
        result.push(myarr[i]);
    }
    return result;
}
var arr1 = ["hola", "que", "tal", "estás"];
// console.log(myRevert(arr1));
// Función de imprimir el color que si está en el arcoiris
function isRainbow(colors) {
    var rainbow = ["rojo", "naranja", "amarillo", "verde", "azul", "violeta", "morado"];
    var colorEs = [];
    var _loop_1 = function (i) {
        var check = rainbow.some(function (color) { return color === colors[i]; });
        if (check) {
            colorEs.push(colors[i]);
        }
    };
    for (var i = 0; i < colors.length; i++) {
        _loop_1(i);
    }
    return colorEs;
}
var colores = ["verde", "gris", "negro"];
// console.log(isRainbow(colores));
// Función de dar la suma de todos los caracteres de todas las palabras en un array
function add(myWords) {
    var result = 0;
    for (var _i = 0, myWords_1 = myWords; _i < myWords_1.length; _i++) {
        var palabras = myWords_1[_i];
        for (var i = 0; i < palabras.length; i++) {
            result += palabras[i].length;
        }
    }
    return result;
}
exports.add = add;
var pal = ["Rodrigo", "cocina"];
// console.log(add(pal));
