import './Contact.css'

function Contact() {
  return (
    <div className="contact">
      <div className="page-header">
        <h1>📞 Nous Contacter</h1>
        <p>Maison Ribera - Boulangerie Pâtisserie</p>
      </div>

      {/* Manager Section */}
      <section className="manager-section">
        <h2>Le Gérant</h2>
        <div className="manager-card">
          <div className="manager-avatar">👨‍🍳</div>
          <h3>Ribiera Pierre</h3>
          <p className="age">30 ans</p>
          <div className="qualifications">
            <h4>Qualifications:</h4>
            <ul>
              <li>CAP Boulanger</li>
              <li>BAC Pro Boulanger/Pâtissier</li>
              <li>BP Boulanger</li>
            </ul>
          </div>
          <p className="bio">
            Entrepreneur passionné par l'art boulanger, Ribiera Pierre a créé Maison Ribiera en 2025. 
            Avec plus d'une décennie d'expérience dans le domaine, il maîtrise parfaitement les techniques 
            traditionnelles de la boulangerie et la pâtisserie.
          </p>
          <p className="mission">
            <strong>"Mon objectif : proposer des produits artisanaux de qualité, 
            faits avec passion et respect des traditions."</strong>
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <h2>Informations de Contact</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>📍 Adresse</h3>
            <p>55 rue Colonel Glineur<br />59243 Quarouble</p>
            <p className="region">Région: Onnaing/Quarouble</p>
          </div>

          <div className="info-card">
            <h3>📞 Téléphone</h3>
            <p><a href="tel:+33123456789">+33 (0)1 23 45 67 89</a></p>
          </div>

          <div className="info-card">
            <h3>🕐 Horaires</h3>
            <p>
              <strong>Lun - Sam:</strong> 7h00 - 14h00 / 15h00 - 19h00<br />
              <strong>Dimanche:</strong> Fermé
            </p>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="advantage-section">
        <h2>Nos Atouts</h2>
        <div className="advantage-grid">
          <div className="advantage-card">
            <span className="advantage-icon">🥖</span>
            <h3>Produits Artisanaux</h3>
            <p>Fabrication traditionnelle avec ingrédients sélectionnés</p>
          </div>
          <div className="advantage-card">
            <span className="advantage-icon">⏰</span>
            <h3>Fraîcheur Garantie</h3>
            <p></p>
          </div>
          <div className="advantage-card">
            <span className="advantage-icon">★</span>
            <h3>Service Personnalisé</h3>
            <p>Ribiera vous accueille chaleureusement chaque jour</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Visitez Maison Ribiera!</h2>
        <p>Découvrez our gamme complète de produits artisanaux</p>
        <button className="visit-button">Nous Rendre Visite</button>
      </section>
    </div>
  )
}

export default Contact
