import React, { useState, useEffect } from 'react';
import '../generadorNumeros.css'; 
import '../spinner.css';

const NUM_CELLS = 5; 

const NumberGenerator = () => {
  const [numberCells, setNumberCells] = useState(Array(NUM_CELLS).fill(null));
  const [generatedNumber, setGeneratedNumber] = useState(null);
  const [message, setMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [loading, setLoading] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);

  useEffect(() => {
    if (gameOver && message === 'You Win!') {
      setShowFireworks(true);
      setTimeout(() => {
        setShowFireworks(false);
      }, 3000); 
    }
  }, [gameOver, message]);

  useEffect(() => {
    let timer = null;
    if (timerStarted && !gameOver) {
      timer = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [timerStarted, gameOver]);

  const generateRandomNumber = () => {
    setLoading(true);
    const newNumber = Math.floor(Math.random() * 100) + 1;
    setGeneratedNumber(newNumber);
    setMessage('');
    setLoading(false);
    if (!timerStarted) {
      setTimerStarted(true);
    }
  };

  const saveNumber = (index) => {
    if (!gameOver && generatedNumber !== null && numberCells[index] === null) {
      const newCells = [...numberCells];
      newCells[index] = generatedNumber;
      setNumberCells(newCells);
      setGeneratedNumber(null);

      if (newCells.filter(Boolean).length >= 2) {
        const storedNumbers = newCells.filter(Boolean);
        const isSorted = storedNumbers.every((num, i) => i === 0 || num >= storedNumbers[i - 1]);
        if (!isSorted) {
          setMessage('You Lost!'); 
          setGameOver(true);
        } else if (storedNumbers.length === NUM_CELLS) {
          setMessage('You Win!');
          setGameOver(true);
        }
      }
    }
  };

  const restartGame = () => {
    setNumberCells(Array(NUM_CELLS).fill(null));
    setGeneratedNumber(null);
    setMessage('');
    setGameOver(false);
    setElapsedTime(0);
    setTimerStarted(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="container">
      {showFireworks && <div className="fireworks"></div>}
      <h1>Random Number Generator</h1>
      <div>
        <p><span>Generated number: </span>{generatedNumber}</p>
        <p><span>Elapsed time: </span>{formatTime(elapsedTime)}</p>
      </div>
      <div className="numberCellsContainer">
        {numberCells.map((number, index) => (
          <div key={index} className="numberCell">
            <input
              type="number"
              value={number || ''}
              onChange={() => {}}
              disabled
              className="input"
            />
            <button onClick={() => saveNumber(index)} disabled={generatedNumber === null || gameOver} className={generatedNumber === null || gameOver ? "disabledButton" : "button"}>
              Save
            </button>
          </div>
        ))}
      </div>
      <button onClick={generateRandomNumber} disabled={generatedNumber !== null || gameOver} className="generateButton">
        Generate number
      </button>
      {loading && <div className="loader"></div>}
      {message && <p className={message === 'You Lost!' ? 'lost' : 'message'}>{message}</p>}
      {gameOver && (
        <div>
          <button onClick={restartGame} className="restartButton">
            <span className="btn-txt">Restart</span>
          </button>
        </div>
      )}
      <div className="footer">
        <div className="animation">
          <div className="hourglassBackground">
            <div className="hourglassContainer">
              <div className="hourglassCurves"></div>
              <div className="hourglassCapTop"></div>
              <div className="hourglassGlassTop"></div>
              <div className="hourglassSand"></div>
              <div className="hourglassSandStream"></div>
              <div className="hourglassCapBottom"></div>
              <div className="hourglassGlass"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberGenerator;
