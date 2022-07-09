import { Correcao } from "./correcao.js";

export class Correcoes {
    private correcoes: Correcao[] = []

    public adiciona(correcao: Correcao){
        this.correcoes.push(correcao)
    }

    lista(): readonly Correcao[]{
        return this.correcoes
    }
}