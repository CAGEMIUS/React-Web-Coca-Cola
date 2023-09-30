import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import AppNavbar from './components/Navbar' /* <-- modulo de la barra de navegaion. */
import Inicio from './views/inicio'
import Productos from './views/productos'
import CompraP from './views/compraP'
import Contactos from './views/contactos'
import Login from './views/login'
import Register from './views/register'
import Footer from './components/Footer' /* <-- modulo del pie de pagina. */



function App() {
  return (
    <BrowserRouter>
    <AppNavbar/> {/* <-- modulo de la barra de navegaion. */}
      <Routes> {/* <-- Enrutamiento de las paginas. */}
        <Route path='/' element={<Inicio/>}/>
        <Route path='/productos' element={<Productos/>}/>
        <Route path='/compraP' element={<CompraP/>}/>
        <Route path='/contactos' element={<Contactos/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    <Footer/> {/* <-- modulo del pie de pagina. */}
    </BrowserRouter>
  )
}

export default App