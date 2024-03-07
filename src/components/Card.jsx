import React from 'react';
import '../styles/Card.css';

function Card({ content, onClick, imageUrl, category }) {
  // Create a dynamic class name based on the category
  const cardClass = `card ${category ? category.toLowerCase() : ''}`;

  return (
    <div className={cardClass} onClick={onClick}>
      {imageUrl && <img src={imageUrl} alt="" className="card-image" />}
      <p>{content}</p>
    </div>
  );
}

export default Card;