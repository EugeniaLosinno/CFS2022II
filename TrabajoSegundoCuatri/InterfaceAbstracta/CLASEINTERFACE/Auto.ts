interface IAuto {
    velocidad: number;
    cantidadAsiento : number;
    cantidadPuerta : number;
    cantidadCambios : number;
    prendidoApagado : boolean;

    getVelocidad ():number 

    getCantidadAsiento ():number 

    getCantidadPuerta ():number 

    getCantidadCambios ():number 

    prenderApagar():boolean;
    
    acelerar():void;
}

export default class AutoCarrera implements IAuto{
    velocidad: number;
    cantidadAsiento : number;
    cantidadPuerta : number;
    cantidadCambios : number;
    prendidoApagado : boolean;

    constructor (velocidad:number,cantidadAsiento:number, cantidadPuerta:number, cantidadCambios:number, prendidoApagado:boolean ){
        this.velocidad = velocidad;
        this.cantidadAsiento = cantidadAsiento;
        this.cantidadPuerta = cantidadPuerta;
        this.cantidadCambios = cantidadCambios;
        this.prendidoApagado = prendidoApagado;
    
    }

    public getVelocidad ():number {
        return (this.velocidad);
    }

    public getCantidadAsiento ():number {
        return this.cantidadAsiento;
    }

    public getCantidadPuerta ():number {
        return this.cantidadPuerta;
    }

    public getCantidadCambios ():number {
        return this.cantidadCambios;
    }
 
    public acelerar (): void {
        this.velocidad = this.velocidad + 30;
    }

    public prenderApagar():boolean{
        if (this.prendidoApagado){
            return(false);
        } else{
            return (true);
        }
    }
}