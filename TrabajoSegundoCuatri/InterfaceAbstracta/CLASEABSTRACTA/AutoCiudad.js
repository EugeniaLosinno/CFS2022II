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
var AutoAbstracto_1 = require("./AutoAbstracto");
var AutoCiudad = /** @class */ (function (_super) {
    __extends(AutoCiudad, _super);
    function AutoCiudad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoCiudad.prototype.getCantidadAsiento = function () {
        return (3);
    };
    AutoCiudad.prototype.getVelocidad = function () {
        return (120);
    };
    AutoCiudad.prototype.getCantidadPuerta = function () {
        return (5);
    };
    AutoCiudad.prototype.acelerar = function () {
        return (10);
    };
    return AutoCiudad;
}(AutoAbstracto_1["default"]));
exports["default"] = AutoCiudad;
