import Auto from "./Auto";
export default
class AutoCarrera extends Auto {
    protected modeloJaula : string;
    protected modeloComputadora : string;

    constructor(marca:string, modelo:string, velocidadActual:number, motor:string, cantidadCambios:number, cambioActual:number, tipoCombustible:string, estaPrendido:boolean, modeloJaula:string, modeloComputadora:string){
        super(marca, modelo, velocidadActual, motor, cantidadCambios, cambioActual, tipoCombustible, estaPrendido);
        this.modeloJaula = modeloJaula;
        this.modeloComputadora = modeloComputadora;
    }

    acelerar():void {
        if(this.velocidadActual < 350){
           this.velocidadActual += 30;
        } else {
            console.log("Está al limite, no se puede acelerar más")   
        }
    }
    
    desacelerar():void {
        if(this.velocidadActual = 30){
           this.velocidadActual = 0;
           console.log ("El auto se frena");
        } else {if(this.velocidadActual < 30){
                   console.log("Está al limite, no se puede desacelerar más")
                } else {
                        this.velocidadActual -= 30;
                }     
        }
    }

    rebajes(cambioFinal:number):void{
        if (cambioFinal < this.cambioActual && cambioFinal > 0){
            this.cambioActual = cambioFinal;
        } else {
            console.log("No se puede hacer el rebaje");
        }
    }

}