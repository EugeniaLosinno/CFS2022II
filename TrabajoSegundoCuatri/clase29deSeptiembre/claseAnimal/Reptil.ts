import AnimalDeTierra from "./AnimalDeTierra";

export default
class Reptiles extends AnimalDeTierra{
        
    constructor(especie:string, nombre:string, comoNacen:string, queComen:string, cobertura:string, vidaSocial:string, cantidadPatas:number, velocidad:number) {
        super(especie, nombre, comoNacen, queComen, cobertura, vidaSocial, cantidadPatas, velocidad);
    }
    
    desplazar():void {
        console.log (`El/la ${this.nombre} se desplaza arrastandose`);
    }    
    
}