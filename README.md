# 🐙 Visualizador de Perfil do GitHub

Este projeto é uma aplicação web desenvolvida para visualizar informações de perfis do GitHub. A aplicação permite pesquisar usuários da plataforma e exibir dados públicos como foto de perfil, nome, biografia, quantidade de repositórios, seguidores e outras informações relevantes, utilizando a API do GitHub para consumo dos dados em tempo real.

---

## 🚀 Funcionalidades

- 🔍 Busca por usuário GitHub usando o nome de usuário
- 📦 Exibe avatar, nome, bio, seguidores e seguindo
- 🧾 Mostra os 10 repositórios mais recentes do usuário
- ⏳ Exibe mensagem de carregamento durante a requisição
- ⌨️ Envia a busca tanto pelo botão quanto pela tecla `Enter`

---

## 🛠️ Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- GitHub REST API

---

## 🚀 Como usar

1. Abra o arquivo `index.html` no navegador.
2. Digite o nome de usuário do GitHub no campo de busca.
3. Clique em "Buscar" ou pressione `Enter`.
4. Veja as informações do perfil e os repositórios carregados.

---

## 📁 Estrutura do projeto

```
src/
├── css/
│   ├── animations.css
│   ├── reset.css
│   ├── responsive.css
│   └── styles.css
├── js/
│   ├── api.js
│   ├── dom.js
│   └── index.js
└── index.html
```

---

## 💡 Observações

- O projeto usa a API pública do GitHub, então não precisa de servidor ou backend.
- Se o usuário não existir, uma mensagem de erro é exibida.

---

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente para aprendizado.