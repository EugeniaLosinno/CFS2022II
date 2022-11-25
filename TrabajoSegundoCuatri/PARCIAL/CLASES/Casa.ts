import Inmuebles from "./Inmuebles";
import Techo from "./Techo";

export default class Casa extends Inmuebles {
    jardinMetros : number;
    
    constructor (techo:Techo, cantidadHabitacion:number,cantidadBanio:number,jardinMetros:number){
        super(techo,cantidadHabitacion,cantidadBanio);
        this.jardinMetros = jardinMetros;
    }
    public getJardinMetros ():number {
        return (this.jardinMetros);
    }

    public setJardinMetros (newMetrosJardin:number):void {
        this.jardinMetros = newMetrosJardin;
    }
}