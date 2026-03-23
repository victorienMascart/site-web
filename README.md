# 🥐 Boulangerie Artisanale - Site Web

Un site web moderne et élégant pour une boulangerie artisanale, construit avec **React**, **Vite** et **React Router**.

## 🎯 Caractéristiques

- ✨ **Design moderne et professionnel** - Interface elegante spécialisée pour une boulangerie
- 🚀 **Performance optimale** - Construit avec Vite pour un développement rapide
- 📱 **Responsive design** - Fonctionnelle sur tous les appareils (mobile, tablette, desktop)
- 🎨 **Palette de couleurs chaleureuse** - Inspirée par le pain et les teintes naturelles
- ♿ **Accessibilité** - Conforme aux standards d'accessibilité web
- 📍 **Navigation fluide** - React Router pour une expérience utilisateur seamless

## 📋 Pages

### 1. **Accueil** (`/`)
- Hero Section impactant avec appel à l'action
- Section des forces/avantages
- Aperçu des spécialités
- Formulaire d'inscription à la newsletter

### 2. **Boulangerie** (`/boulangerie`)
- Catalogue complet des produits organisé par catégories
  - Pains
  - Viennoiseries
  - Pâtisseries fines
- Affichage des prix et descriptions
- Section engagement qualité
- Boutons d'ajout au panier

### 3. **Sandwichs** (`/sandwich`)
- Galerie de sandwichs spécialisés
- Détail des ingrédients par produit
- Options de personnalisation
- Système de commande en ligne
- Section des options spéciales

### 4. **À Propos** (`/a-propos`)
- Histoire de la boulangerie
- Valeurs fondamentales
- Présentation de l'équipe
- Reconnaissances et awards
- Informations de contact

## 🛠️ Stack Technologique

```
Frontend:
├── React 18.2.0 - Bibliothèque UI
├── React Router DOM 6.20.0 - Navigation
├── Vite 5.0.8 - Build tool
└── CSS3 - Styles modernes

Développement:
├── Node.js
└── npm
```

## 📦 Installation

### Prérequis
- **Node.js** v14+ ([Télécharger](https://nodejs.org/))
- **npm** ou **yarn**

### Étapes

1. **Cloner le projet** (ou naviguer jusqu'au répertoire)
   ```bash
   cd site-web
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```
   Le site sera accessible sur `http://localhost:5173`

## 🚀 Commandes

| Commande | Description |
|----------|-------------|
| `npm run dev` | Démarrer le serveur de développement avec HMR |
| `npm run build` | Compiler pour la production |
| `npm run preview` | Prévisualiser la build production localement |

## 📁 Structure du Projet

```
site-web/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Barre de navigation
│   │   ├── Navigation.css
│   │   ├── Footer.jsx          # Pied de page
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx            # Page d'accueil
│   │   ├── Home.css
│   │   ├── Boulangerie.jsx     # Catalogue
│   │   ├── Boulangerie.css
│   │   ├── Sandwich.jsx        # Sandwichs
│   │   ├── Sandwich.css
│   │   ├── APropos.jsx         # À propos
│   │   └── APropos.css
│   ├── App.jsx                 # Composant principal
│   ├── App.css
│   ├── main.jsx                # Point d'entrée
│   └── index.css               # Styles globaux
├── index.html                  # HTML principal
├── vite.config.js              # Configuration Vite
├── package.json                # Dépendances
├── README.md                   # Documentation
└── .gitignore                  # Fichiers à ignorer
```

## 🎨 Guide de Design

### Palette de Couleurs

```css
--primary-color: #d4a574;        /* Or/Bronze chaud */
--secondary-color: #c89968;      /* Doré plus foncé */
--dark-color: #4a4a4a;           /* Gris foncé */
--light-color: #f9f7f4;          /* Beige clair */
--text-color: #666;              /* Texte standard */
```

### Typographie

- **Titres** : Segoe UI, Tahoma, Geneva, Verdana
- **Corpo** : Tailles adaptées (1rem - 2.5rem)
- **Poids** : 400 (normal), 500 (medium), 600+ (bold)

### Composants Clés

#### Boutons
```css
.cta-button - Call-to-action premium
.add-button - Ajout au panier
.order-button - Commande
.submit-button - Envoi de formulaire
```

#### Cartes
```css
.feature-card - Avantages (gris clair + accent)
.product-card - Produits (blanc + border gauche)
.product-item - Galerie (gradient chaud)
```

## 🌟 Fonctionnalités UX/UI

### Meilleures Pratiques Implémentées

1. **Hiérarchie visuelle claire**
   - Spacing cohérent
   - Typographie pondérée
   - Utilisation color stratégique

2. **Feedback utilisateur**
   - Hover effects sur les interactifs
   - Transitions fluides
   - États actifs/inactifs visibles

3. **Performance**
   - Optimisation Vite
   - Code splitting automatique
   - Images optimisées (emojis légers)

4. **Accessibilité**
   - Contraste de couleur suffisant
   - Navigation au clavier
   - Sémantique HTML correcte

5. **Responsive**
   - Mobile-first approach
   - Breakpoints à 768px
   - Menus adaptatifs

## 📱 Breakpoints

```css
Desktop: 1200px max-width pour le contenu
Tablet: < 768px (adaptations de layout)
Mobile: < 480px (optimisations spécifiques)
```

## 🔄 Navigation

```
Home (/)
├── Boulangerie (/boulangerie)
├── Sandwichs (/sandwich)
└── À Propos (/a-propos)
```

Tous les liens sont actifs en temps réel avec le composant `useLocation` de React Router.

## 🚦 Points d'Amélioration Futurs

- [ ] Intégration panier d'achat complet
- [ ] Système de commande backend
- [ ] Zone client avec historique
- [ ] Blog/actualités
- [ ] Formulaire de contact
- [ ] Intégration paiement (Stripe)
- [ ] Galerie d'images optimisées
- [ ] Mode sombre
- [ ] Multi-langue (i18n)
- [ ] Analytics

## 📞 Support

**Email** : contact@boulangerie.fr  
**Téléphone** : 01 23 45 67 89  
**Adresse** : 123, Rue de la Boulangerie, 75001 Paris

## 📄 Licence

MIT - Libre d'utilisation
