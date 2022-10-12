import { Correcao } from "../models/correcao.js"
import { CorrecaoValor } from "../models/correcaoValor.js"

export class CorrecoesService {
    
    public async inserir(correcao: Correcao):Promise<CorrecaoValor> {

        console.log(correcao)

        const headers = new Headers();
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('content-type',"application/json");
        headers.set('accept', "*/*")

        const init: RequestInit = { 
            headers: headers,    
            body: JSON.stringify(correcao), 
            method: 'PUT', 
            mode: "cors",
            credentials: "include"
        }

        const res = await fetch('https://localhost:7223/inserir-correcao', init);
        
        const correcaoValorInserida = await res.json();

        return correcaoValorInserida;
    }

    public async obterTodas():Promise<CorrecaoValor[]> {

        const headers = new Headers();
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('content-type',"application/json");
        headers.set('accept', "*/*")

        const init: RequestInit = { 
            headers: headers,    
            method: 'GET', 
            mode: "cors"
        }

        const res = await fetch('https://localhost:7223/correcoes', init);
        const dados = await res.json() as CorrecaoValor[];
        return dados.map(dado => {
            return new CorrecaoValor(new Date(dado.data),
                                dado.curso,
                                dado.nomeAluno,
                                dado.numModulo,
                                dado.tipo,
                                dado.resposta,
                                dado.observacao,
                                dado.valor);
        });
    }
}