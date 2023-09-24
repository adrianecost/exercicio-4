## Como Usar
1. Clone este repositório para o seu computador:

2. Navegue até o diretório do exercício:

3. Dentro do diretório, você encontrará um arquivo JavaScript chamado `index.js`.

4. Escreva a sua própria solução para o exercício dentro do arquivo `index.js`.

5. Execute o código JavaScript para buscar filmes por gênero.

## Exemplo de uso da função
buscarFilmesPorGenero(listaDeFilmes, 'Ação')
  .then(filmes => {
    console.log('Filmes de Ação:');
    console.log(filmes);
  })
  .catch(error => {
    console.error(error);
  });

