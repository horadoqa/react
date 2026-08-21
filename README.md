# React + Vite

Começar um projeto React do zero, eu recomendo usar **Vite**.

### 1. Criar o projeto

No terminal:

```bash
npm create vite@latest meu-projeto -- --template react
```

Depois:

```bash
cd meu-projeto
npm install
npm run dev
```

O Vite vai mostrar uma URL local, normalmente algo como `http://localhost:5173`.

### 2. Estrutura inicial

Você terá algo parecido com:

```text
meu-projeto/
├── src/
│   ├── assets/logo.png
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
├── index.html
├── package.json
└── vite.config.js
```

### 3. Próximo passo

Posso te ajudar a montar o projeto **desde a arquitetura até a implementação**, por exemplo:

* React + Vite
* React Router
* TypeScript ou JavaScript
* Tailwind CSS
* componentes reutilizáveis
* autenticação
* integração com API/backend
* banco de dados
* organização de pastas
* Git/GitHub
* deploy

Se você me disser **que tipo de projeto quer criar** (ex.: sistema de vendas, dashboard, e-commerce, portfólio, SaaS, sistema de cadastro), eu monto a estrutura inicial adequada para ele.




This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
