const URL = "https://animated-space-lamp-96jvg9vgvw4j2r6p-3000.app.github.dev/";

async function carregarProdutos() {
    const resposta = await fetch(`${URL}/`);
    const produtos = await resposta.json();
    
    console.log(produtos);

    const listaProdutos = document.getElementById("lista-produtos");

    produtos.forEach(produto => {
        const card = `
            <div class="card">
                <h2>${produto.nome}</h2>
                <p>Categoria: ${produto.categoria}</p>
                <p>Preço: R$ ${produto.preco}</p>
            </div>
        `;

        listaProdutos.innerHTML += card;
    });
}

carregarProdutos();