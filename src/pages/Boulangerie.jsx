import './Boulangerie.css'

function Boulangerie() {
  const products = [
    {
      category: 'Pains',
      items: [
        { name: 'Baguette Tradition', price: '1,20€', description: 'Pain blanc classique français' },
        { name: 'Pain Complet', price: '1,50€', description: 'Riche en fibres et savoureux' },
        { name: 'Pain aux Céréales', price: '1,80€', description: 'Avec graines de lin et courges' },
        { name: 'Pain de Seigle', price: '2,00€', description: 'Dense et riche en goût' }
      ]
    },
    {
      category: 'Viennoiseries',
      items: [
        { name: 'Croissant', price: '1,10€', description: 'Feuilleté au beurre, très croustillant' },
        { name: 'Pain au Chocolat', price: '1,30€', description: 'Avec 2 barres de chocolat' },
        { name: 'Chausson aux Pommes', price: '1,50€', description: 'Avec pommes caramélisées' },
        { name: 'Escargot à la Cannelle', price: '1,40€', description: 'Sucré et savoureux' }
      ]
    },
    {
      category: 'Pâtisseries Fines',
      items: [
        { name: 'Éclair au Chocolat', price: '2,50€', description: 'Éclaire classique au chocolat noir' },
        { name: 'Mille-Feuille', price: '3,00€', description: 'Crème pâtissière et amandes' },
        { name: 'Tarte aux Fraises', price: '3,50€', description: 'Fruits frais de saison' },
        { name: 'Paris-Brest', price: '3,20€', description: 'Choux garnies de crème' }
      ]
    }
  ]

  return (
    <div className="boulangerie">
      <div className="page-header">
        <h1>🥐 Notre Boulangerie</h1>
        <p>Découvrez notre sélection de pains et pâtisseries</p>
      </div>

      <div className="products-container">
        {products.map((category, idx) => (
          <div key={idx} className="category-section">
            <h2 className="category-title">{category.category}</h2>
            <div className="items-grid">
              {category.items.map((item, itemIdx) => (
                <div key={itemIdx} className="product-card">
                  <div className="product-header">
                    <h3>{item.name}</h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <p className="description">{item.description}</p>
                  <button className="add-button">Ajouter au panier</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section className="quality-section">
        <h2>Notre Engagement Qualité</h2>
        <div className="quality-grid">
          <div className="quality-item">
            <span className="quality-icon">✓</span>
            <h3>Cuit chaque matin</h3>
            <p>Nous cuistons à 4h du matin pour vous garantir la fraîcheur</p>
          </div>
          <div className="quality-item">
            <span className="quality-icon">✓</span>
            <h3>Sans conservateurs</h3>
            <p>100% naturel, aucun additif chimique</p>
          </div>
          <div className="quality-item">
            <span className="quality-icon">✓</span>
            <h3>Fermentation longue</h3>
            <p>24-48h de repos pour une meilleure saveur</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Boulangerie
