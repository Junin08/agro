function mudarCenario(tipo, titulo) {
    const imgPrincipal = document.getElementById('imagem-principal');
    const tituloCenario = document.getElementById('titulo-cenario');
    const descricaoCenario = document.getElementById('descricao-cenario');

    // Atualiza o título
    tituloCenario.innerText = "Cenário: " + titulo;

    // Lógica de troca de imagens e descrições (Baseado no MapBiomas)
    switch(tipo) {
        case 'mineracao':
            imgPrincipal.src = 'imagens/cenario-mineracao.jpg';
            descricaoCenario.innerText = "A mineração industrial e o garimpo transformam o relevo e o solo. O desafio é o licenciamento e a recuperação pós-extração [6].";
            break;
        case 'desmatamento':
            imgPrincipal.src = 'imagens/cenario-desmatamento.jpg';
            descricaoCenario.innerText = "O desmatamento remove a cobertura vegetal original para novos usos da terra, impactando a biodiversidade [7].";
            break;
        case 'queimada':
            imgPrincipal.src = 'imagens/cenario-queimada.jpg';
            descricaoCenario.innerText = "O fogo altera a dinâmica do ecossistema. O monitoramento mensal ajuda a combater cicatrizes de queimadas [6].";
            break;
        case 'reflorestamento':
            imgPrincipal.src = 'imagens/cenario-reflorestamento.jpg';
            descricaoCenario.innerText = "O plantio de árvores ajuda a restabelecer o equilíbrio e sequestrar carbono do solo [8].";
            break;
        case 'biocombustiveis':
            imgPrincipal.src = 'imagens/cenario-biocombustivel.jpg';
            descricaoCenario.innerText = "O uso de culturas agrícolas para energia reduz a dependência de fósseis e fortalece o agro [7].";
            break;
        case 'mata-ciliar':
            imgPrincipal.src = 'imagens/cenario-mataciliar.jpg';
            descricaoCenario.innerText = "A mata ciliar protege os corpos d'água contra o assoreamento e preserva a rede hidrográfica [8, 9].";
            break;
        case 'regeneracao':
            imgPrincipal.src = 'imagens/cenario-regeneracao.jpg';
            descricaoCenario.innerText = "A vegetação secundária mostra a recuperação natural da floresta em áreas antes degradadas [7].";
            break;
        default:
            imgPrincipal.src = 'imagens/base-natural.jpg';
            descricaoCenario.innerText = "Paisagem natural em equilíbrio.";
    }
}