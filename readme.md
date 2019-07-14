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
