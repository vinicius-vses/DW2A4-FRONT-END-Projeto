// Listas mock de testes

export const artigosFinanceira = [ //No funcionamento real o array virá direto do BD (ex: SELECT * tbArtigos WHERE TOPICO = "#financeira")
    { "id": 1, "idAutor": 2, "titulo": 'Descubra seu perfil de investidor em 7 minutos!', "autor": 'Fulano da Silva' },
    { "id": 2, "idAutor": 1, "titulo": '10 dicas para poupar apenas com trocado do ônibus.', "autor": 'Ciclano Correa Perez' },
    { "id": 3, "idAutor": 3, "titulo": 'BITCOINS: O que ninguém te contou...', "autor": 'Beltrano Amaral de Souza' }
]

export const artigosFilosofica = [ //No funcionamento real o array virá direto do BD (ex: SELECT * tbArtigos WHERE TOPICO = "#financeira")
    { "id": 4, "idAutor": 2, "titulo": 'Democracia em vertigem: Uma perspectiva que Platão já tinha ciência.', "autor": 'Fulano da Silva' },
    { "id": 5, "idAutor": 1, "titulo": 'Ciências Naturais, biológicas e humanas - Aula 02', "autor": 'Ciclano Correa Perez' },
    { "id": 6, "idAutor": 3, "titulo": 'Maiêutica e os debates da atualidade - Prof. Beltrano', "autor": 'Beltrano Amaral de Souza' },
    { "id": 7, "idAutor": 1, "titulo": 'Ciências Naturais, biológicas e humanas - Aula 01', "autor": 'Ciclano Correa Perez' }
]

export const artigosFisicamental = [ //No funcionamento real o array virá direto do BD (ex: SELECT * tbArtigos WHERE TOPICO = "#financeira")
    { "id": 8, "idAutor": 2, "titulo": 'Conheça os 50 melhores alimentos para melhorar a atenção.', "autor": 'Fulano da Silva' },
    { "id": 9, "idAutor": 3, "titulo": 'Alongamentos para o home office', "autor": 'Beltrano Amaral de Souza' }
]

export const artigosFuncional = [ //No funcionamento real o array virá direto do BD (ex: SELECT * tbArtigos WHERE TOPICO = "#financeira")
    { "id": 10, "idAutor": 2, "titulo": 'Minicurso de aprendizes 001: Costura', "autor": 'Fulano da Silva' },
    { "id": 11, "idAutor": 1, "titulo": 'Nunca mais tema a troca do gás de cozinha!', "autor": 'Ciclano Correa Perez' },
    { "id": 12, "idAutor": 3, "titulo": 'Receitas de microondas para quem tem pressa', "autor": 'Beltrano Amaral de Souza' }
]

// texto de teste da página 'Ler Artigo'
export const mockDescricao = "Lorem ipsum dolor sit amet," + 
" consectetur adipiscing elit. Nunc vitae velit ut eros pulvinar congue ac quis purus." + 
" Ut cursus non dolor et molestie. Phasellus et justo condimentum urna pellentesque" + 
" laoreet at a nibh. Etiam ut nulla fringilla, tristique ipsum sed, pellentesque arcu." + 
" Phasellus vitae nulla sit amet nisl tristique sagittis nec eu mauris. Vestibulum pretium" + 
" eget ligula at tincidunt. Nulla facilisi. Integer ut cursus dui, nec faucibus tellus. " + 
"Cras dolor urna, vehicula dapibus lectus quis, gravida feugiat ligula. Integer sem magna," + 
" vehicula in iaculis eget, fermentum lobortis dui. Maecenas pellentesque, ante ac imperdiet pretium," + 
" elit nisi pellentesque ipsum, id volutpat magna odio at tortor. Donec est sapien, luctus id odio sed," + 
" feugiat suscipit ante. Donec mollis nisl vel bibendum ullamcorper. Morbi ultrices dapibus consequat." + 
" In sit amet tristique lorem, quis feugiat urna. Donec lobortis a tellus sit amet dignissim. Nunc libero quam," + 
" auctor vel rutrum et, viverra pharetra tortor. Nam in elit tincidunt dui sollicitudin rutrum non nec metus." + 
" Morbi arcu leo, cursus non commodo sit amet, tristique eu lacus. Cras mi purus, bibendum eget felis at," + 
" blandit eleifend ex. Nulla vel volutpat tortor. Phasellus eget velit rhoncus, pretium tortor ac, sodales nisi." + 
" Donec laoreet sem vitae justo porta, vel cursus tortor scelerisque. Aliquam et maximus magna. Donec ultrices" + 
" volutpat libero in dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;" + 
" Proin velit diam, pellentesque vitae metus vitae, venenatis aliquam velit. Ut pretium ligula aliquam hendrerit aliquet." + 
" Quisque ac sodales lacus. Pellentesque eget pharetra purus. Aenean molestie, mauris ut ultricies accumsan," + 
" nisi enim ullamcorper neque, id finibus elit justo porttitor ligula. Aenean aliquet consequat felis." + 
" Praesent vel auctor massa. Aenean molestie justo leo. Phasellus scelerisque ultricies risus molestie maximus." + 
" Nullam condimentum porta accumsan. Maecenas quis tellus ac odio sagittis faucibus. Aenean porttitor a neque" + 
" nec commodo. Praesent accumsan nisl et lectus auctor, id ornare leo venenatis. Nam sagittis enim enim," + 
" sed malesuada nunc posuere sed. Vestibulum consequat elit eu mauris commodo blandit. Praesent et dui fringilla," + 
" ornare mauris vitae, dignissim urna. Nunc non elementum est, sit amet hendrerit ipsum. Aenean convallis ultrices" + 
" efficitur. Nunc at dapibus ipsum. Nam hendrerit ligula porta nisi fringilla ullamcorper. Vestibulum lectus libero," + 
" dignissim a pretium vitae, ullamcorper vitae mi."

// Usuário mock de testes
export const usuarioLoginTestes = {'id': 1, 'nome': 'Fernando Pessoa', 'email': 'fernando@ifsp.edu.br', 'senha': '123456'}