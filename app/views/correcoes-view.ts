import { Correcoes } from "../models/correcoes.js"
import { View } from "./view.js"

export class CorrecoesView extends View<Correcoes> {

    protected template(model: Correcoes): string {
        return `
        <div class="table-responsive-sm">
            <div id="pageNavPosition" class="pager-nav"></div>
            <table class="table table-hover table-bordered" id="tabela">
                <thead>
                    <tr>
                        <th>Data</th><th>Curso</th><th>Nome do Aluno</th><th>Número do Módulo</th><th>Tipo</th><th>Resposta</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.lista().map(correcao => {
                    return `
                        <tr>
                            <td>${this.formatar(correcao.data)}</td>
                            <td>${correcao.curso}</td>
                            <td>${correcao.nomeAluno}</td>
                            <td>${correcao.numModulo}</td>
                            <td>${correcao.tipo}</td>
                            <td>${this.formatarResposta(correcao.resposta)}</td>
                        </tr>
                    `
                }).join('')}
                </tbody>
            </table>
        </div>
        `
    }

    private formatar(data: Date):string {
        return new Intl.DateTimeFormat().format(new Date(data))
    }
    private formatarResposta(data: String):string {
        return data.split("\n\n\n\n").join("<br /><br />").split("\n\n").join("<br />")
    }
}