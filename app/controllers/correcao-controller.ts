import { DiasDaSemana } from "../enums/dias-da-semana.js"
import { Correcao } from "../models/correcao.js"
import { Correcoes } from "../models/correcoes.js"
import { MensagemView } from "../views/mensagem-view.js"
import { CorrecoesView } from "../views/correcoes-view.js"
import { CorrecoesService } from "../services/correcoes-service.js"

export class CorrecaoController {
    private inputData: HTMLInputElement
    private inputCurso: HTMLInputElement
    private inputNomeAluno: HTMLInputElement
    private inputNumModulo: HTMLInputElement
    private inputTipo: HTMLInputElement
    private inputResposta: HTMLInputElement
    private inputValor: HTMLInputElement
    private inputObservacao: HTMLInputElement

    private correcoes = new Correcoes()
    private correcoesView = new CorrecoesView('#correcoesView', true)
    private mensagemView = new MensagemView('#mensagemView')

    private correcaoService = new CorrecoesService()

    constructor(){
        this.inputData = <HTMLInputElement>document.querySelector('#data')
        this.inputCurso = <HTMLInputElement>document.querySelector('#curso')
        this.inputNomeAluno = <HTMLInputElement>document.querySelector('#nome-aluno')
        this.inputNumModulo = <HTMLInputElement>document.querySelector('#num-modulo')
        this.inputTipo = <HTMLInputElement>document.querySelector('#tipo')
        this.inputResposta = <HTMLInputElement>document.querySelector('#resposta')
        this.inputValor = <HTMLInputElement>document.querySelector('#valor')
        this.inputObservacao = <HTMLInputElement>document.querySelector('#observacao')

        this.correcoesView.update(this.correcoes)
    }

    public adiciona(): void{
        const correcao = Correcao.criaDe(this.inputData.value, 
                                         this.inputCurso.value, 
                                         this.inputNomeAluno.value, 
                                         this.inputNumModulo.value, 
                                         this.inputTipo.value, 
                                         this.inputResposta.value, 
                                         this.inputValor.value, 
                                         this.inputObservacao.value)

        this.correcaoService.inserir(correcao)
            .then(correcaoInserida  => { 
                console.log(correcaoInserida)
                const correcaoInseridaType = <Correcao>correcaoInserida 
                this.correcoes.adiciona(correcaoInseridaType)
                this.limparFormulario()    
                this.atualizaView()
            })


    }

    public obterCorrecoes(): void {
        this.correcaoService.obterTodas()
            .then(correcoes => {
                for (let c of correcoes){
                    this.correcoes.adiciona(c)
                }
                this.correcoesView.update(this.correcoes)
            })
    }

    public atualizaDataComHoje(): void {
        var dataHoje = new Date()
        var ano = dataHoje.getFullYear()
        var mes = (dataHoje.getMonth() + 1)
        var mesFix = mes.toString().length == 1 ? `0${mes}` : mes
        var dia = (dataHoje.getDate())
        var diaFix = dia.toString().length == 1 ? `0${dia}` : dia
        var dataHojeStr = `${ano}-${mesFix}-${diaFix}`

        console.log(dataHojeStr)
        this.inputData.value = dataHojeStr
    }

    private ehDiaUtil(data: Date){
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO
    }

    private limparFormulario(): void {
        this.inputData.value = ''
        this.inputNomeAluno.value = ''
        this.inputCurso.value = ''
        this.inputNumModulo.value = ''
        this.inputTipo.value = ''
        this.inputValor.value = ''
        this.inputResposta.value = ''
        this.inputObservacao.value = ''

        this.inputData.focus()
    }

    private atualizaView(): void {
        this.correcoesView.update(this.correcoes)
        this.mensagemView.update("Correção adicionada com sucesso!")
    }
}