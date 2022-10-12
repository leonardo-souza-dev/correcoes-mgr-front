import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Correcao } from "../models/correcao.js";
import { CorrecoesValor } from "../models/correcoesValor.js";
import { MensagemView } from "../views/mensagem-view.js";
import { CorrecoesView } from "../views/correcoes-view.js";
import { CorrecoesService } from "../services/correcoes-service.js";
export class CorrecaoController {
    constructor() {
        this.correcoesValor = new CorrecoesValor();
        this.correcoesView = new CorrecoesView('#correcoesView', true);
        this.mensagemView = new MensagemView('#mensagemView');
        this.correcaoService = new CorrecoesService();
        this.inputData = document.querySelector('#data');
        this.inputCurso = document.querySelector('#curso');
        this.inputNomeAluno = document.querySelector('#nome-aluno');
        this.inputNumModulo = document.querySelector('#num-modulo');
        this.inputTipo = document.querySelector('#tipo');
        this.inputResposta = document.querySelector('#resposta');
        this.inputValor = document.querySelector('#valor');
        this.inputObservacao = document.querySelector('#observacao');
        this.correcoesView.update(this.correcoesValor);
    }
    adiciona() {
        const correcao = Correcao.criaDe(this.inputData.value, this.inputCurso.value, this.inputNomeAluno.value, this.inputNumModulo.value, this.inputTipo.value, this.inputResposta.value, this.inputObservacao.value);
        this.correcaoService.inserir(correcao)
            .then(correcaoInserida => {
            console.log(correcaoInserida);
            const correcaoInseridaType = correcaoInserida;
            this.correcoesValor.adiciona(correcaoInseridaType);
            this.limparFormulario();
            this.atualizaView();
        });
    }
    obterCorrecoes() {
        this.correcaoService.obterTodas()
            .then(correcoes => {
            for (let c of correcoes) {
                this.correcoesValor.adiciona(c);
            }
            this.correcoesView.update(this.correcoesValor);
        });
    }
    atualizaDataComHoje() {
        var dataHoje = new Date();
        var ano = dataHoje.getFullYear();
        var mes = (dataHoje.getMonth() + 1);
        var mesFix = mes.toString().length == 1 ? `0${mes}` : mes;
        var dia = (dataHoje.getDate());
        var diaFix = dia.toString().length == 1 ? `0${dia}` : dia;
        var dataHojeStr = `${ano}-${mesFix}-${diaFix}`;
        console.log(dataHojeStr);
        this.inputData.value = dataHojeStr;
    }
    ehDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputNomeAluno.value = '';
        this.inputCurso.value = '';
        this.inputNumModulo.value = '';
        this.inputTipo.value = '';
        this.inputResposta.value = '';
        this.inputObservacao.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.correcoesView.update(this.correcoesValor);
        this.mensagemView.update("Correção adicionada com sucesso!");
    }
}
