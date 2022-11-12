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
var InmueblesAbstracto = /** @class */ (function () {
    function InmueblesAbstracto() {
    }
    InmueblesAbstracto.prototype.imprimeCantidadHabitacion = function () {
        console.log("La cantidad de habitabiones son ".concat(this.getCantidadHabitacion));
    };
    InmueblesAbstracto.prototype.imprimeCantidadBanios = function () {
        console.log("La cantidad de ba\u00F1os son ".concat(this.getCantidadBanio));
    };
    return InmueblesAbstracto;
}());
var Inmueble1Abstracto = /** @class */ (function (_super) {
    __extends(Inmueble1Abstracto, _super);
    function Inmueble1Abstracto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Inmueble1Abstracto.prototype.getCantidadBanio = function () {
        return (2);
    };
    Inmueble1Abstracto.prototype.getCantidadHabitacion = function () {
        return (4);
    };
    return Inmueble1Abstracto;
}(InmueblesAbstracto));
