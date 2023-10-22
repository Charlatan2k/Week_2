"use strict";
// Función zodiacal
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEven = void 0;
function zodiac(dia, mes) {
    var zodiacal;
    if (dia >= 21 && mes == 3 || dia <= 19 && mes == 4) {
        zodiacal = "Aries";
    }
    else if (dia >= 20 && mes == 4 || dia <= 20 && mes == 5) {
        zodiacal = "Tauro";
    }
    else if (dia >= 21 && mes == 5 || dia <= 20 && mes == 6) {
        zodiacal = "Géminis";
    }
    else if (dia >= 21 && mes == 6 || dia <= 22 && mes == 7) {
        zodiacal = "Cáncer";
    }
    else if (dia >= 23 && mes == 7 || dia <= 22 && mes == 8) {
        zodiacal = "Leo";
    }
    else if (dia >= 23 && mes == 8 || dia <= 22 && mes == 9) {
        zodiacal = "Virgo";
    }
    else if (dia >= 23 && mes == 9 || dia <= 22 && mes == 10) {
        zodiacal = "Libra";
    }
    else if (dia >= 23 && mes == 10 || dia <= 22 && mes == 11) {
        zodiacal = "Escorpio";
    }
    else if (dia >= 22 && mes == 11 || dia <= 19 && mes == 12) {
        zodiacal = "Sagitario";
    }
    else if (dia >= 22 && mes == 12 || dia <= 19 && mes == 1) {
        zodiacal = "Capricornio";
    }
    else if (dia >= 20 && mes == 1 || dia <= 18 && mes == 2) {
        zodiacal = "Acuario";
    }
    else if (dia >= 19 && mes == 2 || dia <= 20 && mes == 3) {
        zodiacal = "Pisces";
    }
    return "Tu signo zodiacal es ".concat(zodiacal);
}
// Llamando a la función con sus parametros
// console.log(zodiac(24, 2));
// Función de continente
function continent(country) {
    var continente;
    if (country == "España" || country == "Francia" || country == "Noruega") {
        continente = "Europa";
    }
    else if (country == "Argentina" || country == "EU" || country == "Chile") {
        continente = "Sud America";
    }
    else if (country == "EU" || country == "Canada") {
        continente = "Norte America";
    }
    else if (country == "China" || country == "Tailandia" || country == "Japon") {
        continente = "Asia";
    }
    else if (country == "Australia" || country == "Fiji" || country == "Nueva Zelanda") {
        continente = "Australia";
    }
    else if (country == "Kenya" || country == "Uganda" || country == "Egipto") {
        continente = "Africa";
    }
    else {
        console.log("No reconozco este país");
    }
    return "Est\u00E1s en ".concat(continente);
}
// console.log(continent("España"));
//Función de numeros pares
function isEven(n) {
    if (n % 2 === 0) {
        console.log("El numero ".concat(n, " es par"));
    }
    else {
        console.log("El n\u00FAmero ".concat(n, " es impar"));
    }
}
exports.isEven = isEven;
// isEven(2);
