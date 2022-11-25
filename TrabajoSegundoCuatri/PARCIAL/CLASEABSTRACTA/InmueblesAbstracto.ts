export default abstract class InmueblesAbstracto {
    
    abstract getCantidadBanio(): number;
    abstract getCantidadHabitacion() : number;

    imprimeCantidadHabitacion(){
        console.log(`La cantidad de habitabiones son ${this.getCantidadHabitacion()}`);
    }

    imprimeCantidadBanios(){
        console.log(`La cantidad de baños son ${this.getCantidadBanio()}`);
    }
}

