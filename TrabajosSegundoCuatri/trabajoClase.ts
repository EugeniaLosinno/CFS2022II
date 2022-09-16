class Minicomponente {
    estaPrendido : string;
    volumen : number;
    color : string;
    peso : number;
    parlantesIntegrados : string;
    cantidadParlante : number;
    radio : string;

    constructor(estaPrendida:string, volumne:number, color:string, peso:number, parlantesIntegrados:string, cantidadParlantes:number, radio:string){
        this.estaPrendido = estaPrendida;
        this.volumen = volumne;
        this.color = color;
        this.peso = peso;
        this.parlantesIntegrados = parlantesIntegrados;
        this.cantidadParlante = cantidadParlantes;
        this.radio = radio;
    }
     
    let readlineSync = require('readline-sync');
    let estaPrendido = readlineSync.question("Se encuentra prendido el Minicomponente S/N: ");
    let volumen = readlineSync.question("En que volumen esta, indique entre 0 y 120: ");
    let color = readlineSync.question("Que color es: ");
    let peso = readlineSync.question("Que peso tiene: ");
    let parlantesIntegrados = readlineSync.question("Tiene parlantes integrados el Minicomponente S/N: ");
    let cantidadParlante = readlineSync.question("Indique la cantidad de parlantes: ");
    let radio = readlineSync.question("Radio AM o FM ");

    let minicomponenteJVC = new Minicomponente (estaPrendido, volumen, color, peso, parlantesIntegrados, cantidadParlante, radio);
    console.log(minicomponenteJVC);