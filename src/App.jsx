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
  const [isQuestion, setIsQuestion] = useState(true); // Define isQuestion state
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const handleCardClick = () => {
    setIsQuestion(!isQuestion); // Toggle isQuestion state on card click
    setIsCorrect(null);
  };

  const handleNextClick = () => {
    const nextCardIndex = (currentCardIndex + 1) % cardData.length;
    setCurrentCardIndex(nextCardIndex);
    setIsQuestion(true);
    setIsCorrect(null);
  };

  const handlePrevClick = () => {
    const prevCardIndex = (currentCardIndex - 1 + cardData.length) % cardData.length;
    setCurrentCardIndex(prevCardIndex);
    setIsQuestion(true);
    setIsCorrect(null);
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = () => {
    const correctAnswer = cardData[currentCardIndex].answer.trim().toLowerCase();
    const userAnswer = userInput.trim().toLowerCase();
    const correct = correctAnswer === userAnswer;
    setIsCorrect(correct);

    if (correct) {
      setCurrentStreak(currentStreak + 1);
      if (currentStreak + 1 > longestStreak) {
        setLongestStreak(currentStreak + 1);
      }
    } else {
      setCurrentStreak(0);
    }

    setUserInput(''); // Clear input field after submission
  };

  function shuffleCards() {
    let shuffledArray = [...cardData];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    cardData = shuffledArray;
    setCurrentCardIndex(0); // Reset to start at the beginning of the shuffled array
  }

  const currentCard = cardData[currentCardIndex];  // Add this line

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
          category={currentCard.category}
          userInput={userInput}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
          isCorrect={isCorrect}
        />
         {!isCorrect && ( // Render input field and submit button outside of Card
          <>
            <input type="text" value={userInput} onChange={handleInputChange} />
            <button onClick={handleSubmit}>Submit</button>
          </>
        )}
        <button className="prev-button" onClick={handlePrevClick}>Prev</button>
        <button className="next-button" onClick={handleNextClick}>Next</button>
        <button className="shuffle-button" onClick={shuffleCards}>Shuffle</button>
        <p>Current Streak: {currentStreak} | Longest Streak: {longestStreak}</p>
      </div>
    </div>
  );
}

export default App;