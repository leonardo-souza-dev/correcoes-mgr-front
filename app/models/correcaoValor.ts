export class CorrecaoValor {

    constructor(public readonly data: Date, 
                public readonly curso: string, 
                public readonly nomeAluno: string, 
                public readonly numModulo: number, 
                public readonly tipo: string, 
                public readonly resposta: string, 
                public readonly observacao: string,
                public readonly valor: number) {
        }

    // public static criaDe(dataString: string, 
    //                      cursoString: string, 
    //                      nomeAlunoString: string, 
    //                      numModuloString: string, 
    //                      tipoString: string, 
    //                      respostaString: string, 
    //                      observacaoString: string): CorrecaoValor {
    //     const data = new Date(dataString.replace(/-/g, ','))
    //     const numModulo = parseFloat(numModuloString)
        
    //     return new CorrecaoValor(data, cursoString, nomeAlunoString, numModulo,
    //          tipoString, respostaString, observacaoString)
    // }
}