var Minicomponente = /** @class */ (function () {
    function Minicomponente(estaPrendida, volumne, color, peso, parlantesIntegrados, cantidadParlantes, radio) {
        this.estaPrendido = estaPrendida;
        this.volumen = volumne;
        this.color = color;
        this.peso = peso;
        this.parlantesIntegrados = parlantesIntegrados;
        this.cantidadParlante = cantidadParlantes;
        this.radio = radio;
    }
    return Minicomponente;
}());
var readlineSync = require('readline-sync');
var estaPrendido = readlineSync.question("Se encuentra prendido el Minicomponente S/N: ");
var volumen = readlineSync.question("En que volumen esta, indique entre 0 y 120: ");
var color = readlineSync.question("Que color es: ");
var peso = readlineSync.question("Que peso tiene: ");
var parlantesIntegrados = readlineSync.question("Tiene parlantes integrados el Minicomponente S/N: ");
var cantidadParlante = readlineSync.question("Indique la cantidad de parlantes: ");
var radio = readlineSync.question("Radio AM o FM ");
var minicomponenteJVC = new Minicomponente(estaPrendido, volumen, color, peso, parlantesIntegrados, cantidadParlante, radio);
console.log(minicomponenteJVC);
