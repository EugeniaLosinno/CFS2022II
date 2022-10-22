import Animal from "./Animal";

export default
class AnimalDeAire extends Animal{
    protected tamanoAlas : number;
    protected alturaVuelo : number;

    constructor(especie:string, nombre:string, comoNacen:string, queComen:string, cobertura:string, vidaSocial:string, cantidadPatas:number, tamanoAlas:number, alturaVuelo:number) {
        super(especie, nombre, comoNacen, queComen, cobertura, vidaSocial, cantidadPatas);
        this.tamanoAlas = tamanoAlas;
        this.alturaVuelo = alturaVuelo;
    }
    
    desplazar():void {
        console.log (`El/la ${this.nombre} se desplaza volando`);  
    }
    
    volarAltura():void {
        console.log (`El/la ${this.nombre} vuela a ${this.alturaVuelo} metros`);  
    }
}