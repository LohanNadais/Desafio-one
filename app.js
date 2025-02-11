//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// 1. Declarar uma variável do tipo array para armazenar os nomes dos amigos
let listaAmigos = [];

// 2. Função para adicionar amigos
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim(); // Remove espaços em branco no início e no fim

    // Validar a entrada
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.'); // Exibe um alerta se o campo estiver vazio
        return; // Interrompe a execução da função
    }

    // Atualizar o array de amigos
    listaAmigos.push(nomeAmigo); // Adiciona o nome ao array

    // Limpar o campo de entrada
    inputAmigo.value = '';

    // Atualizar a lista de nomes na interface
    atualizarListaAmigos();
}

// Função para atualizar a lista de nomes na interface
function atualizarListaAmigos() {
    const listaAmigosElemento = document.getElementById('listaAmigos');
    listaAmigosElemento.innerHTML = ''; // Limpa a lista atual

    // Adiciona cada nome do array à lista na interface
    listaAmigos.forEach((amigo) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigosElemento.appendChild(itemLista);
    });
}