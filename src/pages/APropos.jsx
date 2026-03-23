import './APropos.css'

function APropos() {
  return (
    <div className="a-propos">
      <div className="page-header">
        <h1>À Propos de Nous</h1>
        <p>Plus de 30 ans de passion pour le pain</p>
      </div>

      <section className="story-section">
        <div className="story-content">
          <h2>Notre Histoire</h2>
          <p>
            Fondée en 1994 par Jean-Pierre Moreau, notre boulangerie est née d'une passion simple 
            mais sincère : faire le meilleur pain possible. Ce qui a commencé comme un petit fournil 
            artisanal est devenu un lieu de référence pour toute la communauté locale.
          </p>
          <p>
            Pendant plus de trois décennies, nous avons maintenu les mêmes valeurs fondamentales : 
            la qualité, l'authenticité et le respect des traditions. Chaque pain, chaque pâtisserie 
            est préparé avec le même soin et dévouement qu'au premier jour.
          </p>
        </div>
        <div className="story-image">
          🏪
        </div>
      </section>

      <section className="values-section">
        <h2>Nos Valeurs</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>🌾 Authenticité</h3>
            <p>
              Nous refusons les raccourcis et les artifices. Nos recettes sont authentiques 
              et nos méthodes traditionnelles.
            </p>
          </div>
          <div className="value-card">
            <h3>💚 Durabilité</h3>
            <p>
              Approvisionnement local, zéro déchet et respect de l'environnement sont au 
              cœur de notre démarche.
            </p>
          </div>
          <div className="value-card">
            <h3>👥 Communauté</h3>
            <p>
              Nous sommes enracinés dans notre quartier. Votre confiance et satisfaction 
              sont notre plus belle récompense.
            </p>
          </div>
          <div className="value-card">
            <h3>🎯 Excellence</h3>
            <p>
              Chaque produit doit être parfait. Nous vérifions, goûtons et ajustons 
              constamment pour n'offrir que le meilleur.
            </p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Notre Équipe</h2>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-avatar">👨‍🍳</div>
            <h3>Jean-Pierre Moreau</h3>
            <p className="role">Fondateur & Maître Boulanger</p>
            <p className="bio">Passionné par l'art de la boulangerie depuis l'enfance</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">👩‍🍳</div>
            <h3>Marie Lavigne</h3>
            <p className="role">Pâtissière en Chef</p>
            <p className="bio">Créatrice de nos délicieuses pâtisseries</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">👨‍⚙️</div>
            <h3>Thomas Bernard</h3>
            <p className="role">Responsable Production</p>
            <p className="bio">Garant de la qualité et de la fraîcheur</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">👩‍💼</div>
            <h3>Sophie Renault</h3>
            <p className="role">Responsable Accueil</p>
            <p className="bio">À votre service avec le sourire chaque jour</p>
          </div>
        </div>
      </section>

      <section className="achievements-section">
        <h2>Nos Reconnaissances</h2>
        <div className="achievements-grid">
          <div className="achievement">
            <span className="award-icon">🏆</span>
            <h3>Meilleure Boulangerie</h3>
            <p>Prix Paris Gourmand 2022</p>
          </div>
          <div className="achievement">
            <span className="award-icon">⭐</span>
            <h3>5 Étoiles</h3>
            <p>Notation moyenne client 4.9/5</p>
          </div>
          <div className="achievement">
            <span className="award-icon">🌿</span>
            <h3>Bio Certifiés</h3>
            <p>50% de nos produits utilise des ingrédients bio</p>
          </div>
          <div className="achievement">
            <span className="award-icon">❤️</span>
            <h3>Entreprise Responsable</h3>
            <p>Label d'employeur de confiance 2023</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Venez Nous Rencontrer</h2>
        <div className="contact-box">
          <h3>📍 Adresse</h3>
          <p>123, Rue de la Boulangerie<br />75001 Paris</p>
          
          <h3>📞 Téléphone</h3>
          <p>01 23 45 67 89</p>
          
          <h3>📧 Email</h3>
          <p>contact@boulangerie.fr</p>
          
          <h3>🕐 Horaires</h3>
          <p>Lun - Ven: 6h - 20h<br />
             Sam: 6h - 19h<br />
             Dim: 7h - 13h<br />
             Fermé les jours fériés</p>
        </div>
      </section>
    </div>
  )
}

export default APropos
