export default
class Animal {
    protected especie : string;
    protected nombre : string;
    protected comoNacen : string;
    protected queComen : string;
    protected cobertura : string;
    protected vidaSocial : string;
    protected cantidadPatas : number;
    
    constructor(especie:string, nombre:string, comoNacen:string, queComen:string, cobertura:string, vidaSocial:string, cantidadPatas:number) {
        this.especie = especie;
        this.nombre = nombre;
        this.comoNacen = comoNacen;
        this.queComen = queComen;
        this.cobertura = cobertura;
        this.vidaSocial = vidaSocial;
        this.cantidadPatas = cantidadPatas;
    }
    
    comer():void {
        console.log (`El ${this.nombre} se animenta a ${this.queComen}`);  
    }
    
    nacer():void {
        console.log (`El ${this.nombre} nace por a ${this.comoNacen}`);  
    }

    recubrir():void {
        console.log (`El ${this.nombre} nace por a ${this.cobertura}`);  
    }

}