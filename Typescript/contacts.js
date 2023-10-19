"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacts = void 0;
var person_1 = require("./person");
var Contacts = /** @class */ (function () {
    function Contacts() {
        this.lista = [];
    }
    Contacts.prototype.printCalendar = function () {
        var resultado;
        for (var i = 0; i < person_1.Person.length; i++) {
            resultado[i] = this.lista[i];
        }
        return resultado;
    };
    return Contacts;
}());
exports.Contacts = Contacts;
