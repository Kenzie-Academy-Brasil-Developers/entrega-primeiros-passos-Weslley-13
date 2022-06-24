const refrigerante=11.99
const macarrao=6.99
const ervilha=6.99
const arroz=22.99
const feijao=11.89
const vinho=70.00

let resultadoRefrigerante=refrigerante * 3
let resultadoMacarrao=macarrao * 3
let resultadoErvilha=ervilha * 3
let resultadoArroz=arroz * 3
let resultadoFeijao=feijao * 3
let resultadoVinho=vinho * 3

let resultadoTotal=resultadoRefrigerante + resultadoMacarrao + resultadoErvilha + resultadoArroz +resultadoFeijao +resultadoVinho
console.log(resultadoTotal)

console.log(`Deu Par:${resultadoTotal}`)

let divisaoMetade= resultadoTotal / 2
console.log(divisaoMetade)

console.log(`Esse é o valor ${divisaoMetade} que os dois irão pagar`)

prompt("Preço do refrigerante")
console.log(refrigerante)

prompt("Preço do macarrão")
console.log(macarrao)

prompt("Preço da ervilha")
console.log(ervilha)

prompt("Preço do arroz")
console.log(arroz)

prompt("Preço do feijão")
console.log(feijao)
prompt("Preço do vinho")
console.log(vinho)

window.alert("Valor toltal a ser pago: 392.55")







