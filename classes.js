export class Categoria {
    #nome;
    #valor;

    constructor(nome, valorInicial = 0) {
        this.#nome = nome;
        this.#valor = Number(valorInicial) || 0;
    }

    get valor() {
        return this.#valor;
    }

    get nome() {
        return this.#nome;
    }

    adicionarValor(valor) {
        const v = parseFloat(String(valor).replace(',', '.'));
        if (!Number.isNaN(v)) {
        this.#valor += v;
        }
    }
    }

export class ListaDeGastosPorCategoria {
    #categorias;

    constructor(...categorias) {
        this.#categorias = categorias;
    }

    obterCategoriaPorNome(nome) {
        return this.#categorias.find((c) => c.nome === nome);
    }

    obterCategorias() {
        return [...this.#categorias];
    }

    obterTotal() {
        return this.#categorias.reduce((total, c) => total + c.valor, 0);
    }
    }