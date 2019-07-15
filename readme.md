# Loja de Livros
A empresa E & J é uma editora de manuais técnicos que deseja vender seus livros online. Para isso, necessita das seguintes funcionalidades:
 Backoffice
- Tela de autenticação com recuperação de senha.
- Cadastrar usuários.
- CRUD de autores parceiros (Nome, cpf, e-mail).
- CRUD de livros com os atributos abaixo.
  - Titulo
  - Assunto
  - Autores (1:n)
  - Ano de Publicação
  - Preço de venda
  - Quantidade em estoque
- Busca de Livros por título, assunto e autor;
- Listar vendas registradas no checkout (Portal de Vendas) por data.
Portal de Vendas
- Implementar a busca por título e assunto dos livros;
- Exibir os detalhes dos livros;
- Adicionar o livro a um carrinho de compras sem necessidade de login;
- Criar uma tela de checkout solicitando identificação básica do comprador
(Nome, CPF e e-mail) e um endereço de entrega.
- Tela de venda concluída com lista de livros comprados.
No checkout todos os dados da compra, livro, quantidade, valor, dados do comprador e
endereço de entrega devem ser gravados no banco de dados.
Após o checkout, o sistema deve enviar e-mail de confirmação de compra e exibir tela
de venda concluída.
Implementar botão “voltar” na tela de venda concluída, que ao ser acionado deverá
retornar a tela principal com carrinho de compras zerado.

## Tecnologias escolhidas

- Laravel
- Angular
- automação com Powershell

## Organização do projeto

Para conseguir subir a aplicação sem ter que montar dois servidores(um para o laravel e um para o angular) estou construindo os dois projetos no mesmo repositório e faço um controller no laravel que utiliza o index gerado pelo angular.

O app angular está em `./resources/frontend/`.

Para gerar o app angular e organizar seus arquivos de distribuição dentro da estrutura do laravel, construí uma automação para compilar o app e copiar os arquivos, com o nome de "build_angular.ps1". 

Dessa forma:
- o index gerado é copiado para a pasta `./resources/views/` como `index.html`.
- os arquivos js são copiados para `./public/`.

## Running

1. clone o projeto;
2. Pelo terminal;
 2.1. utilize o composer para instalar as dependencias;
 2.2. execute o `./build_angular.ps1`; 
3. Caso esteja local execute o `artisan serve` 

## TODOS

1. Criar autenticação e permissões para dashboard
2. Criar crud de User
3. Criar tela principal da loja - 80%
    3.1 Filtro de itens por titulo e assunto - 50%
4. Criar carrinho de compras 50%
    4.1 Entidade Cart 
    4.2 Entidade Cart-Item
5. Criar ordem de entrega(checkout)
    5.1 Entidade Checkout 
6. Criar rotina de e-mail para confirmar que compra foi registrada.
