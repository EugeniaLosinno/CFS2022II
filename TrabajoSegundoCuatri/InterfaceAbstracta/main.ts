import AutoCarrera from "./CLASEINTERFACE/Auto";
import Camioneta from './CLASEABSTRACTA/Camioneta';
import AutoDeportivo from './CLASEABSTRACTA/AutoDeportivo';
import AutoCiudad from './CLASEABSTRACTA/AutoCiudad';

//Clase con interface
let autoCarrera = new AutoCarrera(120,2,2,6,true);
console.log(autoCarrera);
autoCarrera.acelerar();
console.log(autoCarrera);

//Clase Abstrata
let camioneta1 = new Camioneta()
let autoDeportivo1 = new AutoDeportivo();
let autoCiudad1 = new AutoCiudad();

console.log();
console.log("Camioneta:");
camioneta1.imprimeVelocidad();
camioneta1.imprimeCantidadPuerta();
camioneta1.imprimeCantidadPuerta();

console.log();
console.log("Auto de la Ciudad:");
autoCiudad1.imprimeVelocidad();
autoCiudad1.imprimeCantidadPuerta();
autoCiudad1.imprimeCantidadPuerta();

console.log();
console.log("Auto Deportiva:");
autoDeportivo1.imprimeVelocidad();
autoDeportivo1.imprimeCantidadPuerta();
autoDeportivo1.imprimeCantidadPuerta();