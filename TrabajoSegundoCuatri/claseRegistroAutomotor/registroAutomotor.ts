//import { SpawnSyncOptionsWithBufferEncoding } from "child_process";
import * as fs from 'fs';

//class Motor {
//   private tipo : string;
//   public constructor (tipo : string) {
//     this.tipo = tipo;
//   }
//}

class Auto {
    private titular : string;
    private patente : string;
    private marca : string;
    private modelo : string;
    private motor : string;
    private cantRuedas : number;
    private cantPuertas : number;
    private estaPrendido : boolean;
    private velocidad : number;
    private anio : number;

    public constructor (titular : string, patente : string, marca : string, modelo : string, motor : string, cantRuedas : number, cantPuertas : number, estaPrendido : boolean, velocidad : number, anio? : number){
        this.titular = titular;
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
        this.cantRuedas = cantRuedas;
        this.cantPuertas = cantPuertas;
        this.estaPrendido = estaPrendido;
        this.velocidad = velocidad;
        if (anio == undefined) {
           this.anio = -1;
        } else {
        this.anio = anio;
        }
    }

    public getTitular() : string {
        return (this.titular);
    };

    public getPatente() : string {
        return (this.patente);
    };

    public getModelo() : string {
        return (this.modelo);
    };

    public getMarca() : string {
        return (this.marca);
    };

    public getanio() : number {
        return (this.anio);
    };

    prenderAuto () : void {
        this.estaPrendido = true;
    }

    apagarAuto () : void {
        this.estaPrendido = false;
    }

    acelerarAuto() : void {
        if (this.estaPrendido){
            if (this.velocidad < 200) {
                this.velocidad = this.velocidad + 50
            }else {
                console.log("No se puede acelerar lleva una velocidad superior a 200 km por hs");
            }
        }else {
            console.log("El auto esta apagado no se puede acelerar");
        }
    }

    desacelerarAuto() : void {
        if (this.estaPrendido){
            if (this.velocidad > 50) {
                this.velocidad = this.velocidad - 50
            }else {
                console.log("No se puede desacelerar lleva una velocidad menor a 50 km por hs");
            }
        }else {
            console.log("El auto esta apagado no se puede desacelerar");
        }
    }

    public frenarAuto() : void {
        this.velocidad = 0;
        console.log ("El auto se freno");
    }

    public setTitular (titular : string) : void {
        this.titular = titular;
    }

    public setPatente (patente : string) : void {
        this.patente = patente;
    }

    public imprimirTituloAuto() : void {
        console.log(this);
    }
}

// creamos un gestor que nos permite leer un archivo de texto
class GestorDeArchivos {

    private arregloString: string[];

    constructor(txtFileLocation: string) {

        let archivoTxt: string = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';');  //vamos a tener nuestro "objetos" separados por ;
    }

    public mostrarAutos(): void {
        console.log(this.arregloString);
    }

    public getArregloAutos() {
        return this.arregloString;
    }
}

//funcion para crear un objeto auto 

function crearAuto(registroAuto: string, arregloAuto: Array<Auto>): void {

    //transformo el elemento de tipo string en un objeto de tipo Auto
    let vehiculo = registroAuto.split(',');
    let titular : string = vehiculo[0];
    let patente : string = vehiculo[1];
    let marca : string = vehiculo[2];
    let modelo : string = vehiculo[3];
    let motor : string = vehiculo[4];
    let cantRuedas : number = Number(vehiculo[5]);
    let cantPuertas : number = Number(vehiculo[6]);
    let estadoAuto : string = vehiculo[7];
    let estaPrendido : boolean;
    if (estadoAuto === "true") {
        estaPrendido = true;
    } else {
        estaPrendido = false;
    }
    let velocidad : number = Number(vehiculo[8]);
    let anio : number = Number(vehiculo[9]);
    let nuevoAuto : Auto = new Auto(titular,patente,marca,modelo,motor,cantRuedas,cantPuertas,estaPrendido,velocidad,anio);

    //inserto el elemento de tipo Profesor en el arreglo recibido
    arregloAuto.push(nuevoAuto);
}

function borrarrAuto (arregloAuto: Array<Auto>, posicion : number): void {
    //let patente: string = readlineSync.question("Ingrese la patente que desea borrar: ");
    //let posicion : number = -1;
    //patente = patente.toLowerCase()
    //for (let i : number = 0; i < arregloAuto.length; i++) {
    //    if (arregloAuto[i].setPatente == patente) {
    //        posicion = i;
    //    }
    //}

    if ((posicion-1) < 0 && (posicion-1) > arregloAuto.length){
        console.log ("La patente ingresada para borra se encuentra fuera de rango");
    } else {
        delete arregloAuto[(posicion-1)];
    }
}

function agregarAuto(arregloAuto: Array<Auto>, auto : Auto) : void {
    arregloAuto.push (auto);
}

//Inicio programa

//let motor : Motor = new Motor (`Nafta`);
//let primerAuto : Auto = new Auto (`Losinno Maria Eugenia`, `AB123KL`, `Ford`,`Mondeo`, motor, 4, 5, false, 0);
let baseAutos : GestorDeArchivos = new GestorDeArchivos('archivo.txt');
let arregloAuto: Array<Auto> = [];

//creo arreglo de los objetos que estan en el txt

for (let i: number = 0; i < baseAutos.getArregloAutos().length; i++) {
     crearAuto(baseAutos.getArregloAutos()[i], arregloAuto);
}
console.log(arregloAuto);

let primerAuto : Auto = new Auto (`Cabreton Estela`, `AA123KL`, `Audi`,`F6`, `Gas- oil`, 4, 2, false, 0,2022);
agregarAuto(arregloAuto,primerAuto);
console.log(arregloAuto);

borrarrAuto(arregloAuto,2);
console.log(arregloAuto);