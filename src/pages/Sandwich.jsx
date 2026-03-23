import './Sandwich.css'

function Sandwich() {
  const sandwiches = [
    {
      name: 'Sandwich Classique',
      price: '5,50€',
      ingredients: ['Jambon', 'Fromage', 'Tomate', 'Laitue'],
      icon: '🍖'
    },
    {
      name: 'Sandwich Gourmet Thon',
      price: '6,50€',
      ingredients: ['Thon', 'Tomate', 'Concombre', 'Œuf', 'Mayonnaise'],
      icon: '🐟'
    },
    {
      name: 'Sandwich Poulet Rôti',
      price: '6,00€',
      ingredients: ['Poulet fermier', 'Fromage', 'Roquette', 'Tomate'],
      icon: '🍗'
    },
    {
      name: 'Sandwich Végétarien',
      price: '5,00€',
      ingredients: ['Fromage', 'Roquette', 'Tomate', 'Concombre', 'Radis'],
      icon: '🥬'
    },
    {
      name: 'Sandwich Bacon Fromage',
      price: '6,00€',
      ingredients: ['Bacon croustillant', 'Emmental', 'Tomate', 'Oignon'],
      icon: '🥓'
    },
    {
      name: 'Sandwich Prosciutto',
      price: '7,00€',
      ingredients: ['Prosciutto Parme', 'Mozzarella', 'Roquette', 'Tomate'],
      icon: '🍝'
    }
  ]

  return (
    <div className="sandwich">
      <div className="page-header">
        <h1>🍔 Nos Sandwichs</h1>
        <p>Sandwichs frais préparés chaque jour avec des ingrédients de qualité</p>
      </div>

      <div className="sandwich-container">
        <p className="intro-text">
          Tous nos sandwichs sont préparés à la commande sur notre pain frais du jour. 
          Personnalisation possible selon vos préférences!
        </p>

        <div className="sandwich-grid">
          {sandwiches.map((sandwich, idx) => (
            <div key={idx} className="sandwich-card">
              <div className="sandwich-icon">{sandwich.icon}</div>
              <h3>{sandwich.name}</h3>
              <p className="price">{sandwich.price}</p>
              <div className="ingredients">
                <h4>Ingrédients:</h4>
                <ul>
                  {sandwich.ingredients.map((ingredient, ingIdx) => (
                    <li key={ingIdx}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <button className="order-button">Commander</button>
            </div>
          ))}
        </div>
      </div>

      <section className="sandwich-info">
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

export default Sandwich
