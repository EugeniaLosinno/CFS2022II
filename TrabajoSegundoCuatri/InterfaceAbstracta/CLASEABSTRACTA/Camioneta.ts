import AutoAbstracto from "./AutoAbstracto";

export default class Camioneta extends AutoAbstracto{

    getCantidadAsiento(): number {
        return(1);
    }

    getVelocidad(): number {
        return(80);
    }

    getCantidadPuerta(): number {
        return(2);
    }

    acelerar(): number {
        return (8);
    }
}

