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
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Camioneta.prototype.getCantidadAsiento = function () {
        return (1);
    };
    Camioneta.prototype.getVelocidad = function () {
        return (80);
    };
    Camioneta.prototype.getCantidadPuerta = function () {
        return (2);
    };
    Camioneta.prototype.acelerar = function () {
        return (8);
    };
    return Camioneta;
}(AutoAbstracto_1["default"]));
exports["default"] = Camioneta;
