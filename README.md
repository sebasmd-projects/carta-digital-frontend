# Carta Digital Frontend

This project is based on React and Django: It creates a digital menu for restaurants (UDEMY - Agustin Navarro Galdon). It has modifications due to having a different folder and file structure, using other dependencies, and managing applications.

## How to Start the Project

```bash
npm start
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```cmd
frontend
│   .gitignore
│   jsconfig.json
│   next.config.js
│   package-lock.json
│   package.json
│   postcss.config.js
│   README.md
│   tailwind.config.js
│
├───app
│   │   globals.scss
│   │   layout.js
│   │
│   └───(pages)
│       ├───(home_page)
│       │       home_page.scss
│       │       layout.scss
│       │       page.js
│       │
│       ├───admin
│       │       admin_page.scss
│       │       layout.js
│       │       page.js
│       │
│       └───client
│               client_page.scss
│               layout.js
│               page.js
│
├───components
│   └───nav_bar
│           NavBar.js
│
└───public
```
