import { Categoria, ListaDeGastosPorCategoria } from "./classes.js";
import { formatarMoeda, obterElemento, valorNegativo, limparCampos, normalizarId } from "./utils.js";

const gastosPorCategoria = new ListaDeGastosPorCategoria(
    new Categoria("Alimentação"),
    new Categoria("Transporte"),
    new Categoria("Lazer"),
    new Categoria("Outros")
    );

const formulario = document.querySelector('form');
    formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

const valorInformado = obterValorInformado();

const categoriaInformada = obterCategoriaInformada();

    if (Number.isNaN(valorInformado) || valorNegativo(valorInformado)) {
        alert("Valor informado inválido. Use números positivos (ex.: 5,00).");
        return;
    }

const categoria = gastosPorCategoria.obterCategoriaPorNome(categoriaInformada);
    if (!categoria) {
        alert("Categoria inválida.");
        return;
    }

categoria.adicionarValor(valorInformado);
    atualizarInterface();
    limparCampos();
    });

    const obterValorInformado = () =>
    parseFloat(obterElemento('valor').value.replace(',', '.'));

    const obterCategoriaInformada = () => obterElemento('categoria').value;

    const atualizarInterface = () => {

    gastosPorCategoria.obterCategorias().forEach((cat) => {
        const id = normalizarId(cat.nome); 
        const elemento = obterElemento(id);
        if (elemento) {
        elemento.textContent = `${cat.nome}: R$ ${formatarMoeda(cat.valor)}`;
        }
    });

const total = gastosPorCategoria.obterTotal();
const elementoTotal = obterElemento('total');
    if (elementoTotal) {
        elementoTotal.textContent = `Total: R$ ${formatarMoeda(total)}`;
    }
    };

    atualizarInterface();