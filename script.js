// Função para exibir o e-mail de contato
function exibirContato() {
    alert("E-mail para contato: junior.roberto04@escola.pr.gov.br");
}

// Função para mudar o cenário com base no clique
function mudarCenario(tipo, titulo) {
    const imgPrincipal = document.getElementById('imagem-principal');
    const tituloCenario = document.getElementById('titulo-cenario');
    const descricaoCenario = document.getElementById('descricao-cenario');

    // Atualiza o título visível
    tituloCenario.innerText = "Cenário: " + titulo;

    // Define as imagens e descrições com os nomes solicitados
    switch(tipo) {
        case 'mineracao':
            imgPrincipal.src = "IMG/mineração.png";
            descricaoCenario.innerText = "Visualização de áreas de mineração industrial e garimpo.";
            break;
        case 'desmatamento':
            imgPrincipal.src = "IMG/desmatamento.png";
            descricaoCenario.innerText = "Monitoramento da supressão de vegetação nativa.";
            break;
        case 'queimada':
            imgPrincipal.src = "IMG/Queimada.png";
            descricaoCenario.innerText = "Mapeamento de cicatrizes de fogo e áreas queimadas.";
            break;
        case 'reflorestamento':
            imgPrincipal.src = "IMG/reflorestamento.png";
            descricaoCenario.innerText = "Ações de plantio e recuperação ambiental planejada.";
            break;
        case 'rocheiras':
            imgPrincipal.src = "IMG/rocheiras.png";
            descricaoCenario.innerText = "Preservação de afloramentos rochosos e refúgios vegetacionais.";
            break;
        case 'biocombustiveis':
            imgPrincipal.src = "IMG/biocombustivel.png";
            descricaoCenario.innerText = "Produção de energia renovável a partir do agronegócio.";
            break;
        case 'mata-ciliar':
            imgPrincipal.src = "IMG/Mata ciliar.png";
            descricaoCenario.innerText = "Proteção e recuperação das margens de corpos hídricos.";
            break;
        case 'regeneracao':
            imgPrincipal.src = "IMG/regeneração.png";
            descricaoCenario.innerText = "Crescimento de vegetação secundária e recuperação natural.";
            break;
        default:
            imgPrincipal.src = "IMG/paisagem inicial.png";
            descricaoCenario.innerText = "Selecione uma ação para visualizar.";
    }
}