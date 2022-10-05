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
var estaPrendido = readlineSync.question("Se encuentra prendido el Minicomponente S/N: ").toUpperCase();
while (estaPrendido != "S" && estaPrendido != "N") {
    estaPrendido = readlineSync.question("Debe Ingresar S/N: ").toUpperCase();
}
var volumen = readlineSync.questionInt("En que volumen esta, indique entre 0 y 120: ");
while (volumen > 120) {
    volumen = readlineSync.questionInt("Debe ingresar un numero menor a 121: ");
}
var color = readlineSync.question("Que color es: ");
var peso = readlineSync.questionInt("Que peso tiene: ");
var parlantesIntegrados = readlineSync.question("Tiene parlantes integrados el Minicomponente S/N: ").toUpperCase();
while (parlantesIntegrados != "S" && parlantesIntegrados != "N") {
    parlantesIntegrados = readlineSync.question("Debe ingresar S/N: ").toUpperCase();
}
var cantidadParlante = readlineSync.questionInt("Indique la cantidad de parlantes: ");
var radio = readlineSync.question("Radio AM o FM ").toUpperCase();
while (radio != "AM" && radio != "FM") {
    radio = readlineSync.question("Debe ingresar AM o FM: ").toUpperCase();
}
var minicomponenteJVC = new Minicomponente(estaPrendido, volumen, color, peso, parlantesIntegrados, cantidadParlante, radio);
console.log(minicomponenteJVC);
