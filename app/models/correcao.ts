export class Correcao {

    constructor(public readonly data: Date, 
                public readonly curso: string, 
                public readonly nomeAluno: string, 
                public readonly numModulo: number, 
                public readonly tipo: string, 
                public readonly resposta: string, 
                public readonly valor: number, 
                public readonly observacao: string) {
        }

    public static criaDe(dataString: string, 
                         cursoString: string, 
                         nomeAlunoString: string, 
                         numModuloString: string, 
                         tipoString: string, 
                         respostaString: string, 
                         valorString: string, 
                         observacaoString: string): Correcao {
        const data = new Date(dataString.replace(/-/g, ','))
        const valor = parseInt(valorString)
        const numModulo = parseFloat(numModuloString)
        
        return new Correcao(data, cursoString, nomeAlunoString, numModulo,
             tipoString, respostaString, valor, observacaoString)
    }
}