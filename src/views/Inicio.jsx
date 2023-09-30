import React, { useState, useEffect } from 'react';
import CardP from '../components/CardP';
import { products } from '../data/products';
import './inicio.css';
import { ProduCompra } from '../data/ProduCompra';

function Inicio() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Función para cambiar a la siguiente diapositiva automáticamente
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  // Cambiar la diapositiva cada 3 segundos (3000 milisegundos)
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  // Código de JavaScript que muestra los arrays de Products
  const productList = products.map((v) => {
    return <CardP title={v.name} image={v.image} key={v.id} />;
  });

  // Código de JavaScript que muestra los arrays de ProduCompra
  const compraList = ProduCompra.map((v) => {
    return <CardP title={v.name} image={v.image} key={v.id} />;
  });

  return (
    <>
      <div className="cn-Container carousel">
        <div className="carousel-inner">
          <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
            <img
              className="cn-Images"
              src="https://www.coca-cola.com/content/dam/onexp/co/es/homepage/uz-banner-web-MagiaDeVerdad-desktop.jpg/width1960.jpg"
              alt="ImageWelcome"
            />
          </div>
          <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
            <img
              className="cn-Images"
              src="https://www.blogartesvisuales.net/wp-content/uploads/2020/01/coca-cola-sin-azucar.jpg"
              alt="ImageWelcome"
            />
          </div>
          <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
            <img
              className="cn-Images"
              src="https://www.infobae.com/new-resizer/0q6LzB3YUevhzVfN4bDOuQWlgFQ=/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/GP7R4LTRYFHBVF4KAVHOCZRXEA.jpg"
              alt="ImageWelcome"
            />
          </div>
        </div>
      </div>
      <h3>Nuestros productos</h3>
      <div className="cd-Container">{productList}</div>
      <h3>Compra nuestros productos</h3>
      <div className="cd-Container">{compraList}</div>
    </>
  );
}

export default Inicio;
