var fibonacci = [0,1]
var numeroInformado = 12

for(var i = 0; i < 11; i++){
    soma = fibonacci[i] + fibonacci[i+1]
    fibonacci.push(soma) 
}
var find = fibonacci.filter(prev => prev == numeroInformado)

var sequencia = find.length == 0 ? 'Não pertence a sequencia Fibonacci': 'Pertence a sequencia Fibonacci';

console.log(sequencia)