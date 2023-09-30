import React from 'react'
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
  return (
    <footer className="Pie-pagina">
        <div className="Grupo-1">
            <div className="caja">
                <figure>
                    <Link className='ft-Image' to='/'>
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Coca-Cola_logo_white.png/640px-Coca-Cola_logo_white.png" fluid />
                    </Link>
                </figure>
            </div>
            <div className="caja">
                <h2>Sobre nosotros</h2>
                <p>En 1886, el Dr. John Pemberton sirvió la primera Coca-Cola en el mundo.</p>
                <p>Desde entonces, no hemos dejado de sorprenderte.</p>
            </div>
            <div className="caja">
                <h2>Siguenos</h2>
                <div className="Red-social">
                    <a href="https://www.facebook.com/TheCocaColaCo/" className="fa-brands fa-facebook"></a>
                    <a href="https://www.instagram.com/cocacolacol/"className="fa-brands fa-instagram"></a>
                    <a href="https://www.youtube.com/channel/UCosXctaTYxN4YPIvI5Fpcrw"className="fa-brands fa-youtube"></a>
                </div>
            </div>
        </div>
        <div className="Grupo-2">
            <small>&copy; 2023 <b>The Coca-Cola Company</b> - Reservado todos los derechos.</small>
        </div>
    </footer>
  )
}

export default Footer