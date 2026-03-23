import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Bienvenue sur Site Web</h1>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Compteur: {count}
        </button>
        <p>
          Modifiez <code>src/App.jsx</code> et enregistrez pour tester le rechargement à chaud.
        </p>
      </div>
      <p className="read-the-docs">
        Cliquez sur les logos pour en savoir plus
      </p>
    </>
  )
}

export default App
