import './App.css'
import NavBar from './components/layout/NavBar';
import Container from './components/layout/Container';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import ListBooks from './components/pages/ListBooks';
import CreateBooks from './components/pages/CreateBooks';
import DetailBook from './components/pages/DetailBook';
import DeleteBook from './components/pages/DeleteBook';
import UpdateBooks from './components/pages/UpdateBooks';



function App() { //"criando componentes de detalhes de livros e otimizando demais componentes"

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
            <Route path='/detailBook/:cod_livro' element={<DetailBook/>}/>
            <Route path='/deleteBook/:cod_livro' element={<DeleteBook/>}/>
            <Route path='/updateBook/:cod_livro' element={<UpdateBooks/>}/>

            
          </Route>

        </Routes>

      </Container>
    
    </BrowserRouter>

    </>
  )
}

export default App
