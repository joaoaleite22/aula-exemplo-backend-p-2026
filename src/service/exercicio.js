class ServiceExercicio {

    Somar(num1, num2) {
        if(isNaN(num1) || isNaN(num2)) {
            throw new Error("Favor informar somente números")
        }
        return num1 + num2
    }

    Salario(valorGanho, horasTrabalhadas) {
        if(isNaN(valorGanho) || isNaN(horasTrabalhadas)) {
            throw new Erros("Favor informar somente números")
        }
        return valorGanho * horasTrabalhadas
    }
    
}

export default new ServiceExercicio ()