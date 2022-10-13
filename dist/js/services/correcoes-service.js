var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Correcao } from "../models/correcao.js";
export class CorrecoesService {
    inserir(correcao) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(correcao);
            const headers = new Headers();
            headers.set('Access-Control-Allow-Origin', '*');
            headers.set('content-type', "application/json");
            headers.set('accept', "*/*");
            const init = {
                headers: headers,
                body: JSON.stringify(correcao),
                method: 'PUT',
                mode: "cors",
                credentials: "include"
            };
            const res = yield fetch('https://localhost:7223/inserir-correcao', init);
            const correcaoValorInserida = yield res.json();
            return correcaoValorInserida;
        });
    }
    obterTodas() {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = new Headers();
            headers.set('Access-Control-Allow-Origin', '*');
            headers.set('content-type', "application/json");
            headers.set('accept', "*/*");
            const init = {
                headers: headers,
                method: 'GET',
                mode: "cors"
            };
            const res = yield fetch('https://localhost:7223/correcoes', init);
            const dados = yield res.json();
            return dados.map(dado => {
                return new Correcao(new Date(dado.data), dado.curso, dado.nomeAluno, dado.numModulo, dado.tipo, dado.resposta, dado.observacao);
            });
        });
    }
}
