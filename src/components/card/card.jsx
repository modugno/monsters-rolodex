import React from 'react';
import './card.css';

const Card = ({ monster }) => (
  <div className="card__container">
    <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt={monster.name} />
    <h3>{monster.name}</h3>
    <p>{monster.email}</p>
  </div>
)

export default Card;
  