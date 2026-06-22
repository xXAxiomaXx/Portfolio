🚀 Eric Moura | Frontend Software Engineer Portfolio

A high-performance, responsive, and interactive personal portfolio built from the ground up with modern web architecture.


⚡ Sobre o Projeto

O Portfolio v2.0 é o resultado de uma refatoração arquitetônica completa. O objetivo foi migrar de uma base de código monolítica (Vanilla JS/HTML) para uma Single Page Application (SPA) moderna, priorizando métricas rigorosas de Core Web Vitals (Google Lighthouse), SEO Técnico e uma Experiência de Usuário (UX) impecável.

✨ Principais Funcionalidades & Arquitetura

🏎️ Performance Extrema: Construído com Next.js (App Router). Fontes e ícones são otimizados em build-time, eliminando RTT (Round Trip Time) e bloqueios de renderização causados por CDNs externos.

🎨 Estilização JIT & CSS Nativo: Utilização do Tailwind CSS v4. O fundo animado "Aurora" (efeito fluido na Hero Section) é renderizado puramente via GPU através de CSS (mix-blend-screen e blur), possuindo 0 KB de custo em JavaScript.

🎬 Animações Fluídas: Integração com Framer Motion para gerenciar o ciclo de vida dos componentes. Os cards de projetos entram e saem do DOM com efeitos de cascata (stagger), e o layout se adapta magicamente a remoção/adição de nós.

📱 100% Responsivo: Design estruturado com abordagens Mobile-First, combinando Flexbox e CSS Grid para manter a simetria perfeita em qualquer tamanho de tela.

📨 Contato Assíncrono: Formulário integrado ao Web3Forms que processa o envio de e-mails em background via API Fetch, garantindo que o usuário não seja redirecionado ou sofra reloads abruptos de página.

📄 Sistema de Modal Dinâmico: Visualização elegante para escolha de idioma do currículo (PT-BR / EN-US), isolado do escopo de navegação principal.

🛠️ Stack Tecnológica

Categoria

Tecnologia

Core

React 18, Next.js 14+ (App Router)

Linguagem

TypeScript

Estilização

Tailwind CSS v4

Animações

Framer Motion, React Type Animation, CSS Keyframes

Assets & Ícones

next/image, next/font, Lucide React, React Icons

Infraestrutura

Vercel (Edge Network)

🚀 Como Rodar Localmente

Se você deseja clonar este repositório para testar a infraestrutura localmente, siga os passos abaixo:

Clone o repositório:

git clone https://github.com/xXAxiomaXx/portfolio-v2.git


Acesse o diretório:

cd portfolio-v2


Instale as dependências:

npm install


Inicie o servidor de desenvolvimento:

npm run dev


Abra no navegador:
Navegue para http://localhost:3000 para ver o resultado.

📫 Contato & Redes

Criado com dedicação por Eric Moura. Vamos construir algo incrível juntos?

💼 LinkedIn: in/emouradev

🐙 GitHub: xXAxiomaXx

✉️ E-mail: ericmsm.dev@gmail.com

Este projeto é open-source. Sinta-se livre para se inspirar na arquitetura e no código. ⭐