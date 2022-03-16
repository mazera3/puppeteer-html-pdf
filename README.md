# Iniciar Projeto Puppeteer
- npm init -y (cria o pacote package.json)
- Instalar express e typescript:
  - npm install express && npm install --save-dev typescript nodemon @types/node @types/express
  - mkdir src && touch src/index.ts
  - touch tsconfig.json
- npm run dev (rodar)

# Eslint & Prettier
- npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin
- npx eslint --init

# EJS
- npm install ejs html-pdf && npm install --save-dev @types/ejs && npm install --save-dev @types/html-pdf

# Tailwind
- npm install -D tailwindcss
- Criar tailwind.config.js -> npx tailwindcss init
- [site](https://tailwindcss.com/docs/installation)
- [CDN](https://unpkg.com/tailwindcss/dist/tailwind.min.css)

# Dados
- Criar array com umas coleção de objetos: `const dados[{},{},{}...]`

# Parte 2
- [aula](https://youtu.be/AoU7aEdTldE)
- npm install puppeteer && npm instal @types/puppeteer -D
- git add . && git commit -m "parte 2" && git branch -M parte2 && git push -u origin parte2