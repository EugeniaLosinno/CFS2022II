interface IInmueble {
    cantidadBanio : number;
    cantidadHabitacion : number;

    getCantidadHabitacion ():number 

    getCantidadBanio ():number 

    inmuebleFamiliar():boolean;
    
    inmuebleBaniarLavarManos():boolean;
}

export default class Inmueble implements IInmueble{
    cantidadBanio : number;
    cantidadHabitacion : number;

    constructor (cantidadBanio:number, cantidadHabitacion:number ){
        this.cantidadBanio = cantidadBanio;
        this.cantidadHabitacion = cantidadHabitacion;
    }

    public getCantidadHabitacion ():number {
        return (this.cantidadHabitacion);
    }

    public getCantidadBanio ():number {
        return this.cantidadBanio;
    }

    public setHabitacion (newHabitacion:number):void {
        this.cantidadHabitacion = newHabitacion;
    }

    public setBanio (newBanio:number):void {
        if (newBanio > 0){
            this.cantidadBanio = newBanio;
        } else {
            console.log ("El inmueble no puede tener ningún baño");
        }
    }

    public inmuebleFamiliar():boolean{
        if (this.cantidadHabitacion > 3){
            return(true);
        } else {
            return(false);
        }
    }

    public inmuebleBaniarLavarManos():boolean {
        if (this.cantidadBanio > 1){
            return(true);
        } else {
            return(false);
        } 
    }
}