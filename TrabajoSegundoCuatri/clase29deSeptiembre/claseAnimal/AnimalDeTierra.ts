import Animal from "./Animal";

export default
class AnimalDeTierra extends Animal{
        
    protected velocidad : number;
    
    constructor(especie:string, nombre:string, comoNacen:string, queComen:string, cobertura:string, vidaSocial:string, cantidadPatas:number, velocidad:number) {
        super(especie, nombre, comoNacen, queComen, cobertura, vidaSocial, cantidadPatas);
        this.velocidad = velocidad;
    }
    
    desplazar():void {
        console.log (`El/la ${this.nombre} se desplaza caminando`);
    }    
    
    moverVelocidad():void {
        console.log (`El/la ${this.nombre} se desplaza a ${this.velocidad} kilómetros`);  
    }
}