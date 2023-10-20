"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        this.elements = [];
        for (var i = 0; i < n; i++) {
            this.elements.push(Math.floor(Math.random() * (k + 1)));
        }
    }
    Vector.prototype.print = function () {
        console.log(Vector);
    };
    Vector.prototype.add = function (v1) {
        var resultado = new Vector(0, 0);
        for (var i = 0; i < this.elements.length; i++) {
            resultado.elements.push(v1.elements[i] + this.elements[i]);
        }
        return resultado;
    };
    Vector.prototype.getElements = function () {
        return this.elements;
    };
    Vector.prototype.subs = function (v1) {
        var resultado = new Vector(0, 0);
        for (var i = 0; i < this.elements.length; i++) {
            resultado.elements.push(v1.elements[i] - this.elements[i]);
        }
        return resultado;
    };
    Vector.prototype.mult = function (v1) {
        var resultado = new Vector(0, 0);
        for (var i = 0; i < this.elements.length; i++) {
            resultado.elements.push(v1.elements[i] * this.elements[i]);
        }
        return resultado;
    };
    Vector.prototype.multNumber = function (n) {
        var resultado = new Vector(0, 0);
        for (var i = 0; i < this.elements.length; i++) {
            resultado.elements.push(n * this.elements[i]);
        }
        return resultado;
    };
    return Vector;
}());
exports.Vector = Vector;
