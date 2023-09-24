// Lista de filmes
const listaDeFilmes = [
    { nome: 'Filme 1', genero: 'Ação' },
    { nome: 'Filme 2', genero: 'Comédia' },
    { nome: 'Filme 3', genero: 'Ação' },
    { nome: 'Filme 4', genero: 'Drama' },
  ];
  
  // Função que retorna filmes por gênero usando Promises
  function buscarFilmesPorGenero(listaDeFilmes, generoDesejado) {
    return new Promise((resolve, reject) => {
      const filmesDoGenero = listaDeFilmes.filter(filme => filme.genero === generoDesejado);
      if (filmesDoGenero.length > 0) {
        resolve(filmesDoGenero);
      } else {
        reject(`Nenhum filme encontrado com o gênero ${generoDesejado}`);
      }
    });
  }