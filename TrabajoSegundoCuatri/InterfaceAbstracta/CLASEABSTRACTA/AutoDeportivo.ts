import AutoAbstracto from "./AutoAbstracto";

export default class AutoDeportivo extends AutoAbstracto{

    getCantidadAsiento(): number {
        return(2);
    }

    getVelocidad(): number {
        return(150);
    }

    getCantidadPuerta(): number {
        return(2);
    }

    acelerar(): number {
        return (30);
    }
}

