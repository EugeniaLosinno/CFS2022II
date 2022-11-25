export default class Techo {
   private perfil : string;
   private cubierta : string;

   constructor (perfil:string, cubierta:string){
      this.perfil = perfil;
      this.cubierta = cubierta;  
   }

   public getCubierta():string{
      return(this.cubierta);
   }

   public getPerfiles():string{
      return(this.perfil);
   }

   public gsetCubierta(newCubierta:string):void{
      this.cubierta = newCubierta;
   }

   public setPerfil(newPerfil:string):void{
      this.perfil = newPerfil;
   }
}