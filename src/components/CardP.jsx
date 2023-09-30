import React from 'react'
import './CardP.css'


function CardP({title="Titulo por defecto", image}) {
  return (
    <div className='Card'>
      <h2>{title}</h2>
      {image && <img className='img2' src={image} alt={title} />}
    </div>
  );
}

export default CardP