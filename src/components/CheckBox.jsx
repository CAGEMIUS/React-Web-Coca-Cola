import React from 'react';

function CheckBox({ marca = 'Nombre de la marca' }) {
  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" />
      <label className="form-check-label">{marca}</label>
    </div>
  );
}

export default CheckBox;

