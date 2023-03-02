let palavra = "Ricardo Santos"
let arrayCaractere = palavra.split("")

for(i = 0; i < Math.floor(arrayCaractere.length / 2); i++){
  let controle =arrayCaractere[i]
  arrayCaractere[i]= arrayCaractere[arrayCaractere.length-1-i]
  arrayCaractere[arrayCaractere.length-1-i] = controle
}
palavra = arrayCaractere.join("")

console.log(palavra)