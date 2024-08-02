import './App.css'
import CardBooks from './components/CardBooks';

function App() {

  return (
    <>

      <CardBooks
        title = 'O lado feio do amor'
        author = 'Colleen Hoover'
      />
      <CardBooks
        title = 'Um dia: Vinte anos, duas pessoas'
        author = 'David Nicholls'
      />
      <CardBooks
        title = 'Mentes maquiavélicas: A psicologia da manipulação'
        author = 'Tamás Bereczkei'
      />

    </>
  )
}

export default App
