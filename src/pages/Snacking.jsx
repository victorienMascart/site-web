import './Snacking.css'

function Snacking() {
  const snackings = [
    {
      name: 'Snacking Classique',
      price: '5,50€',
      ingredients: ['Jambon', 'Fromage', 'Tomate', 'Laitue'],
      icon: '🍖'
    },
    {
      name: 'Snacking Gourmet Thon',
      price: '6,50€',
      ingredients: ['Thon', 'Tomate', 'Concombre', 'Œuf', 'Mayonnaise'],
      icon: '🐟'
    },
    {
      name: 'Snacking Poulet Rôti',
      price: '6,00€',
      ingredients: ['Poulet fermier', 'Fromage', 'Roquette', 'Tomate'],
      icon: '🍗'
    },
    {
      name: 'Snacking Végétarien',
      price: '5,00€',
      ingredients: ['Fromage', 'Roquette', 'Tomate', 'Concombre', 'Radis'],
      icon: '🥬'
    },
    {
      name: 'Snacking Bacon Fromage',
      price: '6,00€',
      ingredients: ['Bacon croustillant', 'Emmental', 'Tomate', 'Oignon'],
      icon: '🥓'
    },
    {
      name: 'Snacking Prosciutto',
      price: '7,00€',
      ingredients: ['Prosciutto Parme', 'Mozzarella', 'Roquette', 'Tomate'],
      icon: '🍝'
    }
  ]

  return (
    <div className="snacking">
      <div className="page-header">
        <h1>🍔 Nos Snackings</h1>
        <p>Snackings frais préparés chaque jour avec des ingrédients de qualité</p>
      </div>

      <div className="snacking-container">
        <p className="intro-text">
          Tous nos snackings sont préparés à la commande sur notre pain frais du jour. 
          Personnalisation possible selon vos préférences!
        </p>

        <div className="snacking-grid">
          {snackings.map((snacking, idx) => (
            <div key={idx} className="snacking-card">
              <div className="snacking-icon">{snacking.icon}</div>
              <h3>{snacking.name}</h3>
              <p className="price">{snacking.price}</p>
              <div className="ingredients">
                <h4>Ingrédients:</h4>
                <ul>
                  {snacking.ingredients.map((ingredient, ingIdx) => (
                    <li key={ingIdx}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <button className="order-button">Commander</button>
            </div>
          ))}
        </div>
      </div>

      <section className="snacking-info">
        <h2>Nos Options Spéciales</h2>
        <div className="options-grid">
          <div className="option">
            <h3>🥒 Pains au choix</h3>
            <p>Baguette, pain complet, pain aux céréales ou pain de seigle</p>
          </div>
          <div className="option">
            <h3>🌶️ Sauces variées</h3>
            <p>Mayo, moutarde, vinaigrette, sauce épicée et plus encore</p>
          </div>
          <div className="option">
            <h3>🥗 Suppléments gratuits</h3>
            <p>Salade, tomate, oignon, concombre selon vos envies</p>
          </div>
          <div className="option">
            <h3>⚡ Préparation rapide</h3>
            <p>Prêt en 5 minutes, idéal pour vos pauses déjeuner</p>
          </div>
        </div>
      </section>

      <section className="order-section">
        <h2>Commander en Ligne</h2>
        <p>Préparez votre commande à l'avance et venez la récupérer</p>
        <button className="cta-button">Accéder à la commande en ligne</button>
      </section>
    </div>
  )
}

export default Snacking
