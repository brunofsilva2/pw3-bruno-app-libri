import './App.css'
import NavBar from './components/layout/NavBar';
import Container from './components/layout/Container';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import ListBooks from './components/pages/ListBooks';
import CreateBooks from './components/pages/CreateBooks';



function App() {

  return (
    <>

    {/* Estrutura de navegação */}
    <BrowserRouter>
    
      <Container>

        <Routes>

          <Route path='/' element={<NavBar/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/createBooks' element={<CreateBooks/>}/>
            <Route path='/listBooks' element={<ListBooks/>}/>
          </Route>

        </Routes>

      </Container>
    
    </BrowserRouter>

    </>
  )
}

export default App
