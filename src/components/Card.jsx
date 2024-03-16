import React from 'react';
import '../styles/Card.css';

function Card({ content, onClick, imageUrl, category, isCorrect }) {
  const cardClass = `card ${category ? category.toLowerCase() : ''}`;

  return (
    <div className={cardClass} onClick={onClick}>
      {imageUrl && <img src={imageUrl} alt="" className="card-image" />}
      <p>{content}</p>
      {isCorrect !== null && <p>{isCorrect ? "Correct!" : "Incorrect!"}</p>}
    </div>
  );
}

export default Card;
