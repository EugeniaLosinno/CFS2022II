export default abstract class AutoAbstracto {
    
    abstract getCantidadAsiento(): number;
    abstract getCantidadPuerta() : number;
    abstract acelerar () : void;
    abstract getVelocidad(): number;

    imprimeCantidadAsiento(){
        console.log(`La cantidad de asiento son ${this.getCantidadAsiento()}`);
    }

    imprimeCantidadPuerta(){
        console.log(`La cantidad de puerta son ${this.getCantidadPuerta()}`);
    }

    imprimeVelocidad(){
        console.log(`La velocidad es ${this.getVelocidad()}`);
    }
}

