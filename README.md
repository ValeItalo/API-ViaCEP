# API ViaCEP

Projeto pessoal que eu desenvolvi para aplicar e aprimorar meus conhecimentos sobre **API, JavaScript, CSS e HTML**. 

Criei o site responsivo e implementei diversas validações no formulário para impedir o submit com alguma informação inválida.

Quando o input do CEP atinge 8 números (maxlength do campo) é utilizada uma expressão regular para validar se o CEP está no padrão aceito para consultar a API e, caso esta condição seja verdadeira, ocorrá a consulta automaticamente. Tratando-se de uma consulta válida os demais campos como o nome da rua e a cidade serão preenchidos imediatamente.

Se o CEP estiver em um padrão errado (com letras ou com menos de 8 números) a API não será consultada e o campo ficará com uma borda vermelha para sinalizar que precisa ser corrigido. Caso o CEP não exista na base de dados da API, essa mesma sinalização com a borda vermelha será apresentada para o usuário revisar a digitação.

Com o sucesso no envio do formulário aparecerá uma caixa de diálogo agradecendo ao usuário e todos os campos do formulário serão limpos.

Você pode conferir no link: [Página do Projeto](https://api-viacep.netlify.app/)


![https://api-viacep.netlify.app/](https://user-images.githubusercontent.com/103216978/197297064-dedb2227-5fb8-471b-a46c-5ad189ed21f2.png)



## Links úteis
- [Página do Projeto](https://api-viacep.netlify.app/)
- [API: viaCEP](https://viacep.com.br)
- [Elemento Dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
- [Keyup Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event)
