let numero = 4

let fibonacci1 = 0
let fibonacci2 = 1
let fibonacciAtual = 0

while(fibonacciAtual<numero){
  fibonacci1 = fibonacci2
  fibonacci2 =fibonacciAtual
  fibonacciAtual = fibonacci1+fibonacci2
}

if(fibonacciAtual === numero){
  console.log(`${numero} pertence a sequencia de Fibonacci.`)
}else{
  console.log(`${numero} não pertence a sequencia de Fibonacci.`)
}