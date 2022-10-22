import AnimalDeTierra from "./AnimalDeTierra";
import Reptil from "./Reptil";

let animalTerrestre = new AnimalDeTierra ("Mamifero", "Oso Pardo", "Viviparo", "Omnívoro", "Pelo", "Manada", 2, 56);
console.log(animalTerrestre);
animalTerrestre.desplazar();
let serpiente = new Reptil ("Mamifero", "Boa", "Ovovivíparos", "Carnivoro", "Escamas", "Solitaria", 0, 13);
console.log(serpiente);
serpiente.desplazar();