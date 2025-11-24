📝 Sistema de Chamados com ReactJS e Firebase <br>
Este projeto é um sistema de chamados simples, focado na aplicação prática de conceitos de desenvolvimento front-end utilizando ReactJS. Para o back-end e banco de dados, utilizamos a plataforma Firebase, aproveitando seus serviços de Autenticação e Firestore.

O objetivo principal deste repositório é demonstrar o processo de construção de uma aplicação web moderna, desde a estruturação de componentes até a integração com um serviço de back-end em tempo real.

⚛️ Tecnologias Abordadas
ReactJS: Biblioteca JavaScript para construção de interfaces de usuário baseadas em componentes.

Firebase: Plataforma de desenvolvimento de aplicativos, utilizada para:

Firebase Authentication: Gerenciamento de usuários (login, registro).

Cloud Firestore: Banco de dados NoSQL para armazenar os dados dos chamados.

React Router DOM: Para gerenciar a navegação e roteamento dentro da aplicação.

Hooks do React (useState, useEffect, useContext): Utilizados para gerenciar o estado e o ciclo de vida dos componentes.

Estilização: Aplicação de estilos para uma interface coesa e responsiva.

🎯 Foco Principal: Desenvolvimento Front-End
O projeto foi estruturado para destacar os seguintes aspectos do desenvolvimento front-end com React:

1. 🧱 Arquitetura de Componentes
A aplicação é totalmente construída com componentes reutilizáveis. Podendo incluir:

Componentes de Layout (Layout Components): Estruturas principais como Sidebar, Header e Footer.

Componentes de Visualização (View Components): Telas como Dashboard, Profile e NewTicket.

Componentes de UI (UI Components): Elementos básicos como Input, Button e Modal.

Essa modularização facilita a manutenção e a escalabilidade do código.

Shutterstock

2. 🔑 Autenticação e Context API
A gestão do estado de autenticação é um ponto central:

Utilizamos o Firebase Authentication para registrar e logar usuários.

O estado do usuário logado é gerenciado globalmente usando a Context API do React. Isso permite que qualquer componente na árvore acesse as informações do usuário ou as funções de login/logout sem a necessidade de passar props repetidamente (Prop Drilling).

3. 🎨 Estilização e Design
A aplicação busca uma interface limpa e intuitiva:

Responsividade: Garantia de que a interface se adapte a diferentes tamanhos de tela (desktop, tablet e mobile).
