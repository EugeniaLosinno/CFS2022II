import Inmuebles from './CLASES/Inmuebles';
import Techo from './CLASES/Techo';
import Casa from './CLASES/Casa';
import Inmueble1Abstracto from './CLASEABSTRACTA/Inmueble1Abstracta';
import { darDeAltaInmueble, darDeAltaCasa } from './CLASES/funciones';
import Inmueble from './CLASEINTERFACE/IInmueble';

//Clases - Objeto - Herencia - Composición (Carpeta CLASES)
console.log("Trabajo Clase, Objeto, Herencia y Composición");
let conjuntoInmuebles: Array <Inmuebles> = [];
darDeAltaInmueble(conjuntoInmuebles);
console.log("Los inmuebles ingresados son: ");
console.log(conjuntoInmuebles);

let conjuntoCasas: Array <Casa> = [];
darDeAltaCasa(conjuntoCasas);
console.log("Las casas ingresadas son: ");
console.log(conjuntoCasas);

//Abstracción (carpeta CLASEABSTRACTA)
console.log("");
console.log("Trabajo Abstracción");
const inmuebleSanTelmo = new Inmueble1Abstracto();
inmuebleSanTelmo.imprimeCantidadHabitacion();
inmuebleSanTelmo.imprimeCantidadBanios();

//Interface (carpeta CLASEINTERFACE)
console.log("");
console.log("Trabajo Interface");
let inmueble1 = new Inmueble(2,3);
console.log("El inmueble ingresado es: ");
console.log(inmueble1);

