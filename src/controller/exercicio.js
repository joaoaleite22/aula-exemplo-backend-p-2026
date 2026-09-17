import ServiceExercicio from '../service/exercicio.js'

class ControllerExercicio {

    Somar(req, res) {
    try {
        const num1 = req.body.num1
        const num2 = req.body.num2
        const soma = ServiceExercicio.Somar(num1, num2)

        res.send({ soma })
        
    } catch (error) {
        res.send({ message: error.message})
        
    }    


    }

    Salario(req, res) {
    const valorGanho = req.body.valor
    const horasTrabalhadas = req.body.hora

    const resultado = valorGanho * horasTrabalhadas
    res.send({ resultado })
}

    PesoMedio(req, res) {
    const peso1 = req.body.peso1
    const peso2 = req.body.peso2
    const peso3 = req.body.peso3
    const peso4 = req.body.peso4
    const peso5 = req.body.peso5

    const resultado = (peso1+peso2+peso3+peso4+peso5)/5
    res.send({message: resultado})

}

    Temperatura(req, res) {
    const celsius = req.body.fahrenheit

    const resultado = (9 * celsius + 160) / 5
    res.send({message: resultado})
}

    Duracao(req, res) {
    const segundos = req.body.segundos

    const horas = segundos / 3600
    const minutos = (segundos % 3600) / 60//3600%3600=1/60 
    
    const seg = segundos % 60

    res.send({message: horas + "horas " + minutos + "minutos " + seg + "segundos"})
}



}

export default new ControllerExercicio()