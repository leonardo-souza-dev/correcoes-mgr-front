export class Correcao {

    constructor(public readonly data: Date, 
        public readonly curso: string, 
        public readonly nomeAluno: string, 
        public readonly numModulo: number, 
        public readonly tipo: string, 
        public readonly resposta: string, 
        public readonly observacao: string) {
        }

    public static criaDe(dataString: string, 
        horarioString: string, 
        cursoString: string, 
        nomeAlunoString: string, 
        numModuloString: string, 
        tipoString: string, 
        respostaString: string, 
        observacaoString: string): Correcao {
            const data = new Date(dataString.replace(/-/g, ','))
            const hora = horarioString.split(':')[0]
            const minuto = horarioString.split(':')[1]
            data.setHours(Number(hora))
            data.setMinutes(Number(minuto))
            const numModulo = parseFloat(numModuloString)
        
        return new Correcao(data, 
                            cursoString, 
                            nomeAlunoString, 
                            numModulo,
                            tipoString, 
                            respostaString, 
                            observacaoString)
    }
}