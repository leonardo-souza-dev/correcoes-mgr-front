export class Correcoes {
    constructor() {
        this.correcoes = [];
    }
    adiciona(correcao) {
        this.correcoes.push(correcao);
    }
    lista() {
        return this.correcoes;
    }
}
