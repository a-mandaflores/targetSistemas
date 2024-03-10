var palavra = "amor"

var inverter = []

for(letra in palavra){
    inverter.unshift(palavra[letra])
}

console.log(inverter.join(''))