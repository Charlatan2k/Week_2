// Función zodiacal
function zodiac(dia, mes) {
    if (dia >= 21 && mes == 3 || dia <= 19 && mes == 4) {
        console.log("Tu signo zodiacal es Aries");
    }
    else if (dia >= 20 && mes == 4 || dia <= 20 && mes == 5) {
        console.log("Tu signo zodiacal es Tauro");
    }
    else if (dia >= 21 && mes == 5 || dia <= 20 && mes == 6) {
        console.log("Tu signo zodiacal es Géminis");
    }
    else if (dia >= 21 && mes == 6 || dia <= 22 && mes == 7) {
        console.log("Tu signo zodiacal es Cáncer");
    }
    else if (dia >= 23 && mes == 7 || dia <= 22 && mes == 8) {
        console.log("Tu signo zodiacal es Leo");
    }
    else if (dia >= 23 && mes == 8 || dia <= 22 && mes == 9) {
        console.log("Tu signo zodiacal es Virgo");
    }
    else if (dia >= 23 && mes == 9 || dia <= 22 && mes == 10) {
        console.log("Tu signo zodiacal es Libra");
    }
    else if (dia >= 23 && mes == 10 || dia <= 22 && mes == 11) {
        console.log("Tu signo zodiacal es Escorpio");
    }
    else if (dia >= 22 && mes == 11 || dia <= 19 && mes == 12) {
        console.log("Tu signo zodiacal es Sagitario");
    }
    else if (dia >= 22 && mes == 12 || dia <= 19 && mes == 1) {
        console.log("Tu signo zodiacal es Capricornio");
    }
    else if (dia >= 20 && mes == 1 || dia <= 18 && mes == 2) {
        console.log("Tu signo zodiacal es Acuario");
    }
    else if (dia >= 19 && mes == 2 || dia <= 20 && mes == 3) {
        console.log("Tu signo zodiacal es Pisces");
    }
}
// Llamando a la función con sus parametros
zodiac(24, 2);
// Función de continente
function continent(country) {
    if (country == "España" || country == "Francia" || country == "Noruega") {
        console.log("Estás en Europa");
    }
    else if (country == "Argentina" || country == "EU" || country == "Chile") {
        console.log("Estás en Sud America");
    }
    else if (country == "EU" || country == "Canada") {
        console.log("Estás en Norte America");
    }
    else if (country == "China" || country == "Tailandia" || country == "Japon") {
        console.log("Estás en Asia");
    }
    else if (country == "Australia" || country == "Fiji" || country == "Nueva Zelanda") {
        console.log("Estás en Australia");
    }
    else if (country == "Kenya" || country == "Uganda" || country == "Egipto") {
        console.log("Estás en Africa");
    }
    else {
        console.log("No reconozco este país");
    }
}
continent("España");
function isEven(n) {
    n % 2 == 0 ? console.log("El numero es par") : "No es par";
}
isEven(2);
