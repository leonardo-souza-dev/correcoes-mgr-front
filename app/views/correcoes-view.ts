import { Correcoes } from "../models/correcoes.js"
import { View } from "./view.js"

export class CorrecoesView extends View<Correcoes> {

    protected template(model: Correcoes): string {
        return `
        <div class="table-responsive-sm">
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Data</th><th>Curso</th><th>Nome do Aluno</th><th>Número do Módulo</th><th>Tipo</th><th>Resposta</th><th>Valor</th>
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
                                <td>${correcao.resposta}</td>
                                <td>${correcao.valor}</td>
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
}