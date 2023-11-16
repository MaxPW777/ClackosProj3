import './styles/App.css'
import CardInfo from './components/CardInfo'
import Deck from './components/Deck'
import Header from './components/Header'
import Searchbar from './components/Searchbar'
import Carte from './interfaces/carte'
import Login from './components/Login'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'




function App() {
  const [card, setCard] = useState<Carte>()
  const [cartes, setCartes] = useState<Carte[]>([])
  useEffect(() => {
    fetch('http://localhost:3001/')
      .then(res => res.json())
      .then(data => setCartes(data))
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CardInfo carte={card} />
              <Deck />
              <Searchbar setCard={setCard} cartes={cartes} />
            </>
          }
        />
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    </>
  )
}

export default App
