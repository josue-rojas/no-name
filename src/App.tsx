import { useEffect, useState } from 'react';
import './App.css';
import Sentence from './components/Sentence';
import poemText from './constant/poemText';

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


function App() {
  const [currentActive, setCurrentActive] = useState(getRandomInt(0, poemText.length));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentActive(getRandomInt(0, poemText.length));
    }, 3000)

    return () => clearInterval(timer);
  }, [])
  return (
    <div className="App">
      {poemText.map((sentence, index) => <Sentence sentence={sentence} isActive={index === currentActive} />)}
    </div>
  );
}

export default App;
