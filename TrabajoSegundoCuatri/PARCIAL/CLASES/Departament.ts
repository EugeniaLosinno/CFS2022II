import Inmuebles from "./Inmuebles";
import Techo from "./Techo";

export default class Departamento extends Inmuebles {
    cantidadAscensor : number;
    tieneBalcon : boolean;

    constructor (techo:Techo, cantidadHabitacion:number,cantidadBanio:number,cantidadAscensor:number,tieneBalcon:boolean){
        super(techo,cantidadHabitacion,cantidadBanio);
        this.cantidadAscensor = cantidadAscensor;
        this.tieneBalcon = tieneBalcon;
    }
    public getCantidadAscensor ():number {
        return (this.cantidadAscensor);
    }

    public getTieneBalcon():boolean {
        return this.tieneBalcon;
    }

    public setCantidadAscensro (newAscensor:number):void {
        this.cantidadAscensor = newAscensor;
    }

    public setTieneBalcon (newBalcon:boolean):void {
        this.tieneBalcon = newBalcon;
    }
}