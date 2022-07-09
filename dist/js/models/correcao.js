export class Correcao {
    constructor(data, curso, nomeAluno, numModulo, tipo, resposta, valor, observacao) {
        this.data = data;
        this.curso = curso;
        this.nomeAluno = nomeAluno;
        this.numModulo = numModulo;
        this.tipo = tipo;
        this.resposta = resposta;
        this.valor = valor;
        this.observacao = observacao;
    }
    static criaDe(dataString, cursoString, nomeAlunoString, numModuloString, tipoString, respostaString, valorString, observacaoString) {
        const data = new Date(dataString.replace(/-/g, ','));
        const valor = parseInt(valorString);
        const numModulo = parseFloat(numModuloString);
        return new Correcao(data, cursoString, nomeAlunoString, numModulo, tipoString, respostaString, valor, observacaoString);
    }
}
