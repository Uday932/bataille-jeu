import React from 'react';

const Card = ({ UnType, UneForme }) => {
  return (
    <div className="card">
      <p>{UnType} de {UneForme}</p>
    </div>
  );
};

export default Card;
