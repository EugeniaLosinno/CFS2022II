import InmueblesAbstracto from "./InmueblesAbstracto";

export default class Inmueble1Abstracto extends InmueblesAbstracto{

    getCantidadBanio(): number {
        return(2);
    }

    getCantidadHabitacion(): number {
        return(4);
    }
}

