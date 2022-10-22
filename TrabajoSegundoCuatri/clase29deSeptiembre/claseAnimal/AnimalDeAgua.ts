import Animal from "./Animal";

export default
class AnimalDeAgua extends Animal{
        
    protected velocidad : number;
    protected cantidadBranqueas : number;
    
    constructor(especie:string, nombre:string, comoNacen:string, queComen:string, cobertura:string, vidaSocial:string, cantidadPatas:number, velocidad:number, cantidadBranqueas:number) {
        super(especie, nombre, comoNacen, queComen, cobertura, vidaSocial, cantidadPatas);
        this.velocidad = velocidad;
        this.cantidadBranqueas = cantidadBranqueas;
    }
    
    desplazar():void {
        console.log (`El/la ${this.nombre} se desplaza nadando`);  
    }

    moverVelocidad():void {
        console.log (`El/la ${this.nombre} se desplaza a ${this.velocidad} kilómetros`);  
    }
    
}