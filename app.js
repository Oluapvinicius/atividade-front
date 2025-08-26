

async function carregarImagens() {
    try {
        const response = await fetch('produtos_atualizados.json');
        const data = await response.json();
        
       
        console.log('Dados carregados:', data);
        
        
        const imagens = data.imagens || data.produtos || data;
        
        imagens.forEach(imagem => {
            criarImagem(imagem);
        });
    } catch (error) {
        console.error('Erro ao carregar imagens:', error);
    }
  }
  
  function criarImagem(imagem) {
    const galeria = document.getElementById('galeria');
    const img = document.createElement('img');
    img.src = imagem.imagem;
    img.alt = imagem.nome || 'Imagem do funcionário';
  
    const container = document.createElement('div');
    container.className = 'box';
  
    const legenda = document.createElement('div');
    legenda.className = 'h1';
    legenda.textContent = imagem.texto || imagem.nome || `Funcionário ${imagem.id}`;
    
    const paragrafo = document.createElement('p');
    paragrafo.className = 'descricao';

    const preco = document.createElement('h1')
    preco.className = 'preco'
    preco.textContent = imagem.preco
  
    if (imagem.descricao) {
        paragrafo.textContent = imagem.descricao;
    }
  
    container.appendChild(img);
    container.appendChild(preco);
    container.appendChild(legenda);
    container.appendChild(paragrafo);
    galeria.appendChild(container);
  }
  
  
  document.addEventListener('DOMContentLoaded', carregarImagens);