import AutoAbstracto from "./AutoAbstracto";

export default class AutoCiudad extends AutoAbstracto{

    getCantidadAsiento(): number {
        return(3);
    }

    getVelocidad(): number {
        return(120);
    }

    getCantidadPuerta(): number {
        return(5);
    }

    acelerar(): number {
        return (10);
    }
}

