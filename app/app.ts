import { CorrecaoController } from "./controllers/correcao-controller.js";

const controller = new CorrecaoController()

const form = document.querySelector('.form')
if (form) {
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault()
        controller.adiciona()
    })
}

const botaoHoje = document.querySelector('#hoje')
if (botaoHoje) {
    botaoHoje.addEventListener('click', (event: Event) => {
        event.preventDefault()
        controller.atualizaDataComHoje()
    })
}

const botaoAgora = document.querySelector('#agora')
if (botaoAgora) {
    botaoAgora.addEventListener('click', (event: Event) => {
        event.preventDefault()
        controller.atualizaHorarioComAgora()
    })
}

const comboCurso = document.querySelector('#curso')
if (comboCurso) {
    comboCurso.addEventListener('change', (event: Event) => {
        analisaComboCurso()
    })
    comboCurso.addEventListener('click', (event: Event) => {
        analisaComboCurso()
    })
}

function analisaComboCurso(){
    if (controller.atualizaComboCursoObrigatoriedade()){
        (<HTMLElement>document.querySelector('#curso')).style.borderColor = '#FF0000'
    } else {
        (<HTMLElement>document.querySelector('#curso')).style.borderColor = '#ced4da'
    }
}

controller.obterCorrecoes()