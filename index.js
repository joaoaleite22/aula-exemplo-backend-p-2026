import express from 'express' //TYPE MODULE
//const express = require("express") //TYPE COMMON JS

// inicializando o express = new
const app = express()
app.use(express.json())

app.post("/api/somar", (req, res) => {
    // const exemplo = 0
    // let aletarada = 0 
    const num1 = req.body.num1
    const num2 = req.body.num2

    res.send({message: num1 + num2 })
    
})


//Exercício 02
//http://localhost:3000/api/salario/2/3

app.get("/api/salario/:valor/:hora", (req, res) => {
    const valorGanho = Number(req.params.valor)
    const horasTrabalhadas = Number(req.params.hora)

    const resultado = ValorGanho * horasTrabalhadas
    res.send({message: resultado})
} )

app.post("/api/salario", (req, res) => {
    const valorGanho = req.body.valor
    const horasTrabalhadas = req.body.hora

    const resultado = valorGanho * horasTrabalhadas
    res.send({message: resultado})
})

//Exercício 03
//http://localhost:3000/api/pesoMedio?peso1=10&peso2=20&peso3=30&peso4=40&peso5=50

app.get("/api/pesoMedio", (req, res) => {
    const peso1 = Number(req.query.peso1)
    const peso2 = Number(req.query.peso2)
    const peso3 = Number(req.query.peso3)
    const peso4 = Number(req.query.peso4)
    const peso5 = Number(req.query.peso5)

    const resultado = (peso1+peso2+peso3+peso4+peso5)/5
    res.send({message: resultado})
})

app.post("/api/pesoMedio", (req, res) => {
    const peso1 = req.body.peso1
    const peso2 = req.body.peso2
    const peso3 = req.body.peso3
    const peso4 = req.body.peso4
    const peso5 = req.body.peso5

    const resultado = (peso1+peso2+peso3+peso4+peso5)/5
    res.send({message: resultado})

})

//Exercício 04
//http://localhost:3000/api/temperatura/10

app.get("/api/temperatura/:celsius", (req, res) => {
    const celsius = Number(req.params.fahrenheit)

    const resultado = (9 * celsius + 160) / 5
    res.send({message: resultado})
})

app.post("/api/temperatura", (req, res) => {
    const celsius = req.body.fahrenheit

    const resultado = (9 * celsius + 160) / 5
    res.send({message: resultado})
})

//Exercício 05
//http://localhost:3000/api/distancia?quilometro=10

app.get("/api/distancia", (req, res) => {
    const milhas = Number(req.query.milhas)

    const resultado = (milhas * 1.60934)
    res.send({message: resultado})
})

app.post("")

app.listen(3000, () => {
    console.log("Servidor na porta 3000")
}) 