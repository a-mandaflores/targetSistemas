const data = require('./dados.json')

var maiorVenda = 0
var dataMaiorVenda = ''

var menorVenda = 0
var dataMenorVenda = ''

var calcularTotal = 0
var calcMedia = 0

for(item in data){

    maiorVenda = data[item].valor > maiorVenda ? data[item].valor: maiorVenda
    dataMaiorVenda = maiorVenda == data[item].valor? data[item].dia: dataMaiorVenda;

    if(data[item].valor != 0) {
        menorVenda = menorVenda == 0 ? data[item].valor: menorVenda    
        menorVenda = data[item].valor < menorVenda ? data[item].valor: menorVenda
        dataMenorVenda = menorVenda == data[item].valor? data[item].dia: dataMenorVenda;
        

    }

    calcularTotal = calcularTotal + data[item].valor
    calcMedia = data[item].valor == 0 ? calcMedia + 0 : calcMedia + 1;


}

var media = calcularTotal / calcMedia

var diasMaiorMedia = data.filter(prev => prev.valor > media)

console.log(`Maior valor aconteceu dia ${dataMaiorVenda} e o valor foi de ${maiorVenda}`)
console.log(`Menor valor aconteceu dia ${dataMenorVenda} e o valor foi de ${menorVenda}`)
console.log(`Tiveram ${diasMaiorMedia.length} dias com o valor de venda maior que a media mensal`)
