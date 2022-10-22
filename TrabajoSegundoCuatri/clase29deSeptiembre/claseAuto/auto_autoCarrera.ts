import Auto from './Auto';
import AutoCarrera from './AutoCarrera';

let auto1 = new Auto ("Ford", "Mondeo", 0, "108HP", 7, 1,"Nafta", true);
console.log(auto1);
auto1.acelerar();
console.log(auto1);
let autoCarrera1 = new AutoCarrera ("Mercedes", "F105", 0, "258HP", 10, 1,"Nafta", true,"Full","CMW10");
console.log(autoCarrera1);
autoCarrera1.acelerar();
console.log(autoCarrera1);