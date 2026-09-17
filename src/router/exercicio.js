import express from "express"
import ControllerExercicio from '../controller/exercicio.js'

const router = express.Router()

router.post("/api/somar",  ControllerExercicio.Somar)


//Exercício 02
//http://localhost:3000/api/salario/2/3

// router.get("/api/salario/:valor/:hora", (req, res) => {
//     const valorGanho = Number(req.params.valor)
//     const horasTrabalhadas = Number(req.params.hora)

//     const resultado = ValorGanho * horasTrabalhadas
//     res.send({message: resultado})
// } )

router.post("/api/salario", ControllerExercicio.Salario )

//Exercício 03
//http://localhost:3000/api/pesoMedio?peso1=10&peso2=20&peso3=30&peso4=40&peso5=50

// router.get("/api/pesoMedio", (req, res) => {
//     const peso1 = Number(req.query.peso1)
//     const peso2 = Number(req.query.peso2)
//     const peso3 = Number(req.query.peso3)
//     const peso4 = Number(req.query.peso4)
//     const peso5 = Number(req.query.peso5)

//     const resultado = (peso1+peso2+peso3+peso4+peso5)/5
//     res.send({message: resultado})
// })

router.post("/api/pesoMedio", ControllerExercicio.PesoMedio )

//Exercício 04
//http://localhost:3000/api/temperatura/10

// router.get("/api/temperatura/:celsius", (req, res) => {
//     const celsius = Number(req.params.fahrenheit)

//     const resultado = (9 * celsius + 160) / 5
//     res.send({message: resultado})
// })

router.post("/api/temperatura", ControllerExercicio.Temperatura )

//Exercício 05
//http://localhost:3000/api/distancia?quilometro=10

// router.get("/api/distancia", (req, res) => {
//     const milhas = Number(req.query.milhas)

//     const resultado = (milhas * 1.60934)
//     res.send({message: resultado})
// })

//Exercício 06
//

router.post("/api/duracao", ControllerExercicio.Duracao )


export default router