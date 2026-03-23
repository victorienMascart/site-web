# Site Web

Un projet React moderne avec Vite pour un développement ultra-rapide.

## Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

## Installation

1. Installez les dépendances :
```bash
npm install
```

## Développement

Pour démarrer le serveur de développement avec rechargement à chaud :

```bash
npm run dev
```

Le serveur s'exécutera par défaut sur `http://localhost:5173`

## Compilation

Pour créer une version optimisée pour la production :

```bash
npm run build
```

Les fichiers compilés seront dans le dossier `dist/`.

## Aperçu de la production

Pour prévisualiser la version compilée localement :

```bash
npm run preview
```

## Structure du projet

```
site-web/
├── src/
│   ├── main.jsx        # Point d'entrée principal
│   ├── App.jsx         # Composant principal
│   ├── App.css         # Styles du composant App
│   └── index.css       # Styles globaux
├── index.html          # Fichier HTML principal
├── vite.config.js      # Configuration Vite
├── package.json        # Dépendances et scripts
└── .gitignore          # Fichiers à ignorer par Git
```

## Configuration technologique

- **React** : Bibliothèque JavaScript pour construire l'interface utilisateur
- **Vite** : Outil de build ultra-rapide pour le développement web moderne
- **ESM** : Module system JavaScript natif

## Licence

MIT
