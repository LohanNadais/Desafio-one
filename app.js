// Array para armazenar os nomes dos amigos
let listaAmigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    // 1. Validar se o campo está vazio
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // 2. Validar se o nome contém apenas letras e espaços
    const regex = /^[A-Za-zÀ-ú\s]+$/; // Aceita letras (incluindo acentuadas) e espaços
    if (!regex.test(nomeAmigo)) {
        alert('Por favor, insira apenas letras e espaços. Números e caracteres especiais não são permitidos.');
        return;
    }

    // 3. Normalizar o nome (converter para minúsculas)
    const nomeNormalizado = nomeAmigo.toLowerCase();

    // 4. Validar se o nome já existe na lista (ignorando maiúsculas/minúsculas)
    const nomeJaExiste = listaAmigos.some((nome) => nome.toLowerCase() === nomeNormalizado);
    if (nomeJaExiste) {
        alert('Este nome já foi adicionado. Insira um nome diferente.');
        return;
    }

    // 5. Adicionar o nome ao array e atualizar a lista
    listaAmigos.push(nomeAmigo); // Adiciona o nome original (não normalizado)
    inputAmigo.value = ''; // Limpar o campo de entrada
    atualizarListaAmigos(); // Atualizar a lista na interface
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

// Função para sortear um amigo
function sortearAmigo() {
    // 1. Validar que há amigos disponíveis
    if (listaAmigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }

    // 2. Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

    // 3. Obter o nome sorteado
    const nomeSorteado = listaAmigos[indiceAleatorio];

    // 4. Remover o nome sorteado da lista
    listaAmigos.splice(indiceAleatorio, 1); // Remove o nome sorteado do array

    // 5. Atualizar a lista de nomes na interface
    atualizarListaAmigos();

    // 6. Mostrar o resultado
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `Amigo sorteado: <strong>${nomeSorteado}</strong>`;
}