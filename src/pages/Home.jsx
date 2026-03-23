import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenue à Maison Ribiera</h1>
          <p>Boulangerie Pâtisserie - Produits artisanaux préparés avec passion en Quarouble</p>
          <button className="cta-button" onClick={() => navigate('/boulangerie')}>
            Découvrir nos produits
          </button>
        </div>
        <div className="hero-background"></div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Pourquoi nous choisir?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🌾</div>
            <h3>Ingrédients Naturels</h3>
            <p>Farine biologique et locale, sans additifs ni conservateurs</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👨‍🍳</div>
            <h3>Recettes Traditionnelles</h3>
            <p>Savoir-faire transmis de génération en génération</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⏰</div>
            <h3>Fraîcheur Garantie</h3>
            <p>Cuits chaque matin, servez-vous avant 13h pour le meilleur</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">❤️</div>
            <h3>Fait avec Amour</h3>
            <p>Chaque produit est une création unique et sincère</p>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="products-preview">
        <h2>Nos Spécialités</h2>
        <div className="products-grid">
          <div className="product-item">
            <div className="product-image">🥖</div>
            <h3>Baguette Tradition</h3>
            <p>Le classique français par excellence</p>
          </div>
          <div className="product-item">
            <div className="product-image">🥐</div>
            <h3>Croissant Beurre</h3>
            <p>Léger et savoureux, feuilleté à la perfection</p>
          </div>
          <div className="product-item">
            <div className="product-image">🍔</div>
            <h3>Sandwich Gourmand</h3>
            <p>Un mélange délicieux de saveurs</p>
          </div>
          <div className="product-item">
            <div className="product-image">🎂</div>
            <h3>Pâtisseries Fines</h3>
            <p>Sucré et délicat pour vos moments spéciaux</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
