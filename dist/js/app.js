import { CorrecaoController } from "./controllers/correcao-controller.js";
const controller = new CorrecaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        controller.adiciona();
    });
}
const botaoHoje = document.querySelector('#hoje');
if (botaoHoje) {
    botaoHoje.addEventListener('click', (event) => {
        event.preventDefault();
        controller.atualizaDataComHoje();
    });
}
const botaoAgora = document.querySelector('#agora');
if (botaoAgora) {
    botaoAgora.addEventListener('click', (event) => {
        event.preventDefault();
        controller.atualizaHorarioComAgora();
    });
}
const comboCurso = document.querySelector('#curso');
if (comboCurso) {
    comboCurso.addEventListener('change', (event) => {
        analisaComboCurso();
    });
    comboCurso.addEventListener('click', (event) => {
        analisaComboCurso();
    });
}
function analisaComboCurso() {
    if (controller.atualizaComboCursoObrigatoriedade()) {
        document.querySelector('#curso').style.borderColor = '#FF0000';
    }
    else {
        document.querySelector('#curso').style.borderColor = '#ced4da';
    }
}
controller.obterCorrecoes();
