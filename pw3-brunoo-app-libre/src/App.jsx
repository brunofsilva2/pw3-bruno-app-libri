import './App.css'
import CardBooks from './components/CardBooks';
import capa1 from './assets/livros/lado_feio_do_amor.jpg'
import capa2 from './assets/livros/um_dia.png';
import capa3 from './assets/livros/mentes_maquiavelicas.jpg';

function App() {

  return (
    <>

      <CardBooks
        title = 'O lado feio do amor'
        author = 'Colleen Hoover'
        img = {capa1}
      />
      <CardBooks
        title = 'Um dia: Vinte anos, duas pessoas'
        author = 'David Nicholls'
        img = {capa2}
      />
      <CardBooks
        title = 'Mentes maquiavélicas: A psicologia da manipulação'
        author = 'Tamás Bereczkei'
        img = {capa3}
      />

    </>
  )
}

export default App
