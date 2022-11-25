import Inmuebles from './Inmuebles';
import Techo from './Techo';
import Casa from './Casa';

//import * as ReadlineSync from `readline-sync`;

//funcion para dar de alta un objeto inmueble al arreglo de Inmuebles
export function darDeAltaInmueble (arregloInmueble: Array<Inmuebles>): void {
    
    //let perfilParaAlta: string = readlineSync.question("Ingrese el tipo de perfiles del techo: ");
    //let cubiertaParaAlta: string = readlineSync.question("Ingrese de que tipo es el techo: ");
    let perfilParaAlta : string = "Madera";
    let cubiertaParaAlta : string = " Chapa";
    let techoAlta : Techo = new Techo(perfilParaAlta,cubiertaParaAlta);

    //let banioInmuebleParaAlta: number = readlineSync.question("Ingrese la cantidad de baño/s para dar de alta: ");
    //let habitacionInmuebleParaAlta: number = readlineSync.question("Ingrese la cantidad de habitaciones para dar de alta: ");
    let banioInmuebleParaAlta : number = 1;
    let habitacionInmuebleParaAlta : number = 2;
    let inmuebleParaAltaObjeto : Inmuebles = new Inmuebles (techoAlta,banioInmuebleParaAlta,habitacionInmuebleParaAlta);
    arregloInmueble.push(inmuebleParaAltaObjeto);
}

//funcion para dar de alta un objeto casa al arreglo de Casas
export function darDeAltaCasa (arregloCasa: Array<Casa>): void {
    
    //let perfilParaAlta: string = readlineSync.question("Ingrese el tipo de perfiles del techo: ");
    //let cubiertaParaAlta: string = readlineSync.question("Ingrese de que tipo es el techo: ");
    let perfilParaAlta : string = "Madera";
    let cubiertaParaAlta : string = " Chapa";
    let techoAlta : Techo = new Techo(perfilParaAlta,cubiertaParaAlta);

    //let banioCasaParaAlta: number = readlineSync.question("Ingrese la cantidad de baño/s para dar de alta: ");
    //let habitacionCasaParaAlta: number = readlineSync.question("Ingrese la cantidad de habitaciones para dar de alta: ");
    let banioCasaParaAlta : number = 1;
    let habitacionCasaParaAlta : number = 2;

    //let metrosJardinCasaParaAlta: number = readlineSync.question("Ingrese la cantidad de metros cuadradpos del jardín para dar de alta: ");
    let metroJardinParaAlta : number = 20;
    let casaParaAltaObjeto : Casa = new Casa (techoAlta,banioCasaParaAlta,habitacionCasaParaAlta,metroJardinParaAlta);
    arregloCasa.push(casaParaAltaObjeto);
}
