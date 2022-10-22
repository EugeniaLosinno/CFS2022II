"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Auto_1 = require("./Auto");
var AutoCarrera = /** @class */ (function (_super) {
    __extends(AutoCarrera, _super);
    function AutoCarrera(marca, modelo, velocidadActual, motor, cantidadCambios, cambioActual, tipoCombustible, estaPrendido, modeloJaula, modeloComputadora) {
        var _this = _super.call(this, marca, modelo, velocidadActual, motor, cantidadCambios, cambioActual, tipoCombustible, estaPrendido) || this;
        _this.modeloJaula = modeloJaula;
        _this.modeloComputadora = modeloComputadora;
        return _this;
    }
    AutoCarrera.prototype.acelerar = function () {
        if (this.velocidadActual < 350) {
            this.velocidadActual += 30;
        }
        else {
            console.log("Está al limite, no se puede acelerar más");
        }
    };
    AutoCarrera.prototype.desacelerar = function () {
        if (this.velocidadActual = 30) {
            this.velocidadActual = 0;
            console.log("El auto se frena");
        }
        else {
            if (this.velocidadActual < 30) {
                console.log("Está al limite, no se puede desacelerar más");
            }
            else {
                this.velocidadActual -= 30;
            }
        }
    };
    AutoCarrera.prototype.rebajes = function (cambioFinal) {
        if (cambioFinal < this.cambioActual && cambioFinal > 0) {
            this.cambioActual = cambioFinal;
        }
        else {
            console.log("No se puede hacer el rebaje");
        }
    };
    return AutoCarrera;
}(Auto_1["default"]));
exports["default"] = AutoCarrera;
