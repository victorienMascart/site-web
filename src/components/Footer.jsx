import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 123, Rue de la Boulangerie, 75001 Paris</p>
          <p>📞 01 23 45 67 89</p>
          <p>📧 contact@boulangerie.fr</p>
        </div>
        <div className="footer-section">
          <h3>Horaires</h3>
          <p>Lun - Sam: 7h - 14h / 15h - 19h</p>
          <p>Dimanche: Fermé</p>
        </div>
        <div className="footer-section">
          <h3>Besoin d'aide?</h3>
          <p><a href="#contact">Nous contacter</a></p>
          <p><a href="#mentions">Mentions légales</a></p>
          <p><a href="#politique">Politique de confidentialité</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Boulangerie Artisanale. Tous droits réservés. 🥖</p>
      </div>
    </footer>
  )
}

export default Footer
