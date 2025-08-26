export const obterElemento = (id) => document.getElementById(id);

export const valorNegativo = (valor) => valor < 0;

export const limparCampos = () => {
  obterElemento('valor').value = '';

}

export const formatarMoeda = (valor) => valor.toFixed(2).replace('.', ',');

export const normalizarId = (texto) =>
  texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');