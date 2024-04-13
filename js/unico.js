function addproduto(nome, preco ,imagem, sinopse) {

    sessionStorage.setItem('produto_nome', nome);
    sessionStorage.setItem('produto_preco', preco);
    sessionStorage.setItem('produto_imagem', imagem);
    sessionStorage.setItem('produto_sinopse', sinopse);

    window.location.href = 'unico.html';

}

const nome = sessionStorage.getItem('produto_nome');
const preco = sessionStorage.getItem('produto_preco');
const imagem = sessionStorage.getItem('produto_imagem');
const sinopse = sessionStorage.getItem('produto_sinopse');


document.querySelector('.produto-detalhes .product-name').innerText = nome;
document.querySelector('.produto-detalhes .product-price').innerText = `R$${preco}`;
document.querySelector('.produto-detalhes .imagem-produto').src = imagem;
document.querySelector('.produto-detalhes .product-sinopse').innerText = sinopse;


/*
function adicionarProduto(nome, preco ,imagem) {

    sessionStorage.setItem('produto_nome', nome);
    sessionStorage.setItem('produto_preco', preco);
    sessionStorage.setItem('produto_imagem', imagem);

    window.location.href = 'unico.html';
}


const nome = sessionStorage.getItem('produto_nome');
const preco = sessionStorage.getItem('produto_preco');
const imagem = sessionStorage.getItem('produto_imagem');

document.querySelector('.produto-detalhes .product-name').innerText = nome;
document.querySelector('.produto-detalhes .product-price').innerText = `R$${preco}`;
document.querySelector('.produto-detalhes .imagem-produto').src = imagem;
*/