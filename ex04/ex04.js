var data = [
    {
        estado: "SP",
        valor: 67.83643,
        percentual: 0
    },
    {
        estado: "RJ",
        valor: 36.67866,
        percentual: 0

    },
    {
        estado: "MG",
        valor: 29.22988,
        percentual: 0

    },
    {
        estado: "ES",
        valor: 27.16548,
        percentual: 0
    },
    {
        estado: "Outros",
        valor: 19.84953,
        percentual: 0

    },

]

var valorTotal = 0

for(item in data){
    valorTotal = valorTotal + data[item].valor
}

for(item in data){

    var percente = (data[item].valor * 100) / valorTotal
    data[item].percentual = Math.round(percente) + "%"

}


console.log(data)