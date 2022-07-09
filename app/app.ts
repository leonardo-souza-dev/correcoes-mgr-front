import { CorrecaoController } from "./controllers/correcao-controller.js";

const controller = new CorrecaoController()

const form = document.querySelector('.form')
if (form) {
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault()
        controller.adiciona();
    })
}

const botaoHoje = document.querySelector('#hoje')
if (botaoHoje) {
    botaoHoje.addEventListener('click', (event: Event) => {
        event.preventDefault()
        controller.atualizaDataComHoje();
    })
}

controller.obterCorrecoes();
