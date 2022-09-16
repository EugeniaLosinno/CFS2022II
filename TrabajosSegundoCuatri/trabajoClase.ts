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
    let estaPrendido = readlineSync.question("Se encuentra prendido el Minicomponente S/N: ").toUpperCase();
    while (estaPrendido != "S" && estaPrendido!="N" ){
        estaPrendido = readlineSync.question("Debe Ingresar S/N: ").toUpperCase();
    }
    let volumen = readlineSync.questionInt("En que volumen esta, indique entre 0 y 120: ");
    while (volumen > 120){
        volumen = readlineSync.questionInt("Debe ingresar un numero menor a 121: ");
    }
    let color = readlineSync.question("Que color es: ");
    let peso = readlineSync.questionInt("Que peso tiene: ");
    let parlantesIntegrados = readlineSync.question("Tiene parlantes integrados el Minicomponente S/N: ").toUpperCase();
    while (parlantesIntegrados != "S" && parlantesIntegrados !="N" ){
        parlantesIntegrados = readlineSync.question("Debe ingresar S/N: ").toUpperCase();
    }
    let cantidadParlante = readlineSync.questionInt("Indique la cantidad de parlantes: ");
    let radio = readlineSync.question("Radio AM o FM ").toUpperCase();
    while (radio != "AM" && radio !="FM" ){
        radio = readlineSync.question("Debe ingresar AM o FM: ").toUpperCase();
    }

    let minicomponenteJVC = new Minicomponente (estaPrendido, volumen, color, peso, parlantesIntegrados, cantidadParlante, radio);
    console.log(minicomponenteJVC);