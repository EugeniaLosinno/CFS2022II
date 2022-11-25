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
var Inmuebles_1 = require("./Inmuebles");
var Casa = /** @class */ (function (_super) {
    __extends(Casa, _super);
    function Casa(techo, cantidadHabitacion, cantidadBanio, jardinMetros) {
        var _this = _super.call(this, techo, cantidadHabitacion, cantidadBanio) || this;
        _this.jardinMetros = jardinMetros;
        return _this;
    }
    Casa.prototype.getJardinMetros = function () {
        return (this.jardinMetros);
    };
    Casa.prototype.setJardinMetros = function (newMetrosJardin) {
        this.jardinMetros = newMetrosJardin;
    };
    return Casa;
}(Inmuebles_1["default"]));
exports["default"] = Casa;
