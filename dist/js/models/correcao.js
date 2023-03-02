export class Correcao {
    constructor(data, curso, nomeAluno, numModulo, tipo, resposta, observacao) {
        this.data = data;
        this.curso = curso;
        this.nomeAluno = nomeAluno;
        this.numModulo = numModulo;
        this.tipo = tipo;
        this.resposta = resposta;
        this.observacao = observacao;
    }
    static criaDe(dataString, horarioString, cursoString, nomeAlunoString, numModuloString, tipoString, respostaString, observacaoString) {
        const data = new Date(dataString.replace(/-/g, ','));
        const hora = horarioString.split(':')[0];
        const minuto = horarioString.split(':')[1];
        data.setHours(Number(hora));
        data.setMinutes(Number(minuto));
        const numModulo = parseFloat(numModuloString);
        return new Correcao(data, cursoString, nomeAlunoString, numModulo, tipoString, respostaString, observacaoString);
    }
}
