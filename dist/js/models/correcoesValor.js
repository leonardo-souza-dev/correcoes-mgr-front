export class CorrecoesValor {
    constructor() {
        this.correcoesvalor = [];
    }
    adiciona(correcao) {
        this.correcoesvalor.push(correcao);
    }
    lista() {
        return this.correcoesvalor;
    }
}
