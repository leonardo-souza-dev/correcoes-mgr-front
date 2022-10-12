import { CorrecaoValor } from "./correcaoValor.js";

export class CorrecoesValor {
    private correcoesvalor: CorrecaoValor[] = []

    public adiciona(correcao: CorrecaoValor){
        this.correcoesvalor.push(correcao)
    }

    lista(): readonly CorrecaoValor[]{
        return this.correcoesvalor
    }
}