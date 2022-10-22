export default
class Auto {
    protected marca : string;
    protected modelo : string;
    protected velocidadActual : number;
    protected motor : string;
    protected cantidadCambios : number;
    protected cambioActual : number;
    protected tipoCombustible : string;
    protected estaPrendido : boolean;

    constructor(marca:string, modelo:string, velocidadActual:number, motor:string, cantidadCambios:number, cambioActual:number, tipoCombustible:string, estaPrendido:boolean) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadActual = velocidadActual;
        this.motor = motor;
        this.cantidadCambios = cantidadCambios;
        this.cambioActual = cambioActual;
        this.tipoCombustible = tipoCombustible;
        this.estaPrendido = estaPrendido;
    }
    
    acelerar():void {
        if (this.estaPrendido) {
           if(this.velocidadActual < 240){
              this.velocidadActual += 10;
            } else {
                console.log("Está al limite, no se puede acelerar más")   
            }
        } else {
            console.log ("El auto esta apagado");
        }    
    }
    
    desacelerar():void {
        if (this.estaPrendido){
           if(this.velocidadActual = 10){
              this.velocidadActual = 0;
              console.log ("El auto se frena");
            } else {if(this.velocidadActual < 10) {
                       console.log("Está al limite, no se puede desacelerar más")
                    } else {
                        this.velocidadActual -= 10;
                    }     
            }
        } else {
            console.log ("El auto esta apagado");
        }    
    }
    
    frenar ():void {
        if(this.estaPrendido){
          this.velocidadActual = 0;
        } else {
            console.log ("El auto esta apagado");
        }  
    }

    arrancarApagar():void{
        if(this.estaPrendido){
            this.estaPrendido = false;
        } else {
            this.estaPrendido = true;
        }
    }
    pasarCambiosParaArriba():void{
        if(this.cantidadCambios == this.cambioActual){
            console.log("No se puede subir otro cambio");
        } else {
            this.cambioActual += 1;
        }
    }

    pasarCambiosParaAbajo():void{
        if(this.cambioActual == 1){
            console.log("No se puede bajar otro cambio");
        } else {
            this.cambioActual -= 1;
        }
    }

}