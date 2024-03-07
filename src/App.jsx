import { useState } from 'react'
import Card from './components/Card'
import './App.css'

const cardData = [
  { question: 'What is the capital of Australia?', answer: 'Canberra' },
  { question: 'What is the capital of France?', answer: 'Paris', imageUrl: '/photos/france.png', category: 'Europe' },
  { question: 'What is the capital of Canada?', answer: 'Ottawa' },
  { question: 'What is the capital of Germany?', answer: 'Berlin', imageUrl: '/photos/germany.png', category: 'Europe' },
  { question: 'What is the capital of Brazil?', answer: 'Brasília' },
  { question: 'What is the capital of Italy?', answer: 'Rome', imageUrl: '/photos/italy.png', category: 'Europe' },
  { question: 'What is the capital of India?', answer: 'New Delhi', category: 'Asia' },
  { question: 'What is the capital of Japan?', answer: 'Tokyo', imageUrl: '/photos/japan.png', category: 'Asia' },
  { question: 'What is the capital of South Africa?', answer: 'Pretoria' },
  { question: 'What is the capital of Russia?', answer: 'Moscow', imageUrl: '/photos/russia.png', category: 'Europe' },
  { question: 'What is the capital of Egypt?', answer: 'Cairo' },
];

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isQuestion, setIsQuestion] = useState(true);

  const handleCardClick = () => {
    setIsQuestion(!isQuestion);
  };

  const handleNextClick = () => {
    const nextCardIndex = Math.floor(Math.random() * cardData.length);
    setCurrentCardIndex(nextCardIndex);
    setIsQuestion(true);
  };

  const currentCard = cardData[currentCardIndex];

  return (
    <div className="app">
      <div className="card-container">
        <h1>Geography Trip</h1>
        <p>How good of a geographer are you? Test all of your Country knowledge here!</p>
        <p>Card {currentCardIndex + 1} of {cardData.length}</p>
        <Card
          content={isQuestion ? currentCard.question : currentCard.answer}
          onClick={handleCardClick}
          imageUrl={isQuestion ? currentCard.imageUrl : null}
          category={currentCard.category} // Pass the category
        />
        <button className="next-button" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default App;