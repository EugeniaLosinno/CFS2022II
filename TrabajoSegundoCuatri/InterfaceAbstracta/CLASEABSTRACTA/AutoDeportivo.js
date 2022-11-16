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
var AutoDeportivo = /** @class */ (function (_super) {
    __extends(AutoDeportivo, _super);
    function AutoDeportivo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoDeportivo.prototype.getCantidadAsiento = function () {
        return (2);
    };
    AutoDeportivo.prototype.getVelocidad = function () {
        return (150);
    };
    AutoDeportivo.prototype.getCantidadPuerta = function () {
        return (2);
    };
    AutoDeportivo.prototype.acelerar = function () {
        return (30);
    };
    return AutoDeportivo;
}(AutoAbstracto_1["default"]));
exports["default"] = AutoDeportivo;
