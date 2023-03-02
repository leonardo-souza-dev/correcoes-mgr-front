import { View } from "./view.js";
export class CorrecoesView extends View {
    template(model) {
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
                    `;
        }).join('')}
                </tbody>
            </table>
        </div>
        `;
    }
    formatar(data) {
        return new Intl.DateTimeFormat().format(new Date(data));
    }
    formatarResposta(data) {
        return data.split("\n\n\n\n").join("<br /><br />").split("\n\n").join("<br />");
    }
}
