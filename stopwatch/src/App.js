import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")} : ${milliseconds.toString().padStart(2, "0")}`
  }

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10)
    }, 10)
  }
  const stopTimer = () => {
    clearInterval(intervalRef.current)
  }
  const lapTimer = () => {
    alert("Clicked!")
    const lapTime = formatTime(time);
    setLaps((preLaps) => [...preLaps, lapTime])
  }
  const resetTimer = () => { 
    setTime(0);
    setLaps([]);
    stopTimer();

  }

  return (
    <div className="App">
      <h1>Stop Watch</h1>
      {/* <h1>00:00:00</h1> */}
      <h1>{formatTime(time)}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={lapTimer}>Lap</button>
      <button onClick={resetTimer}>Reset</button>
      {laps?.length ? <h2>Laps </h2> : null}
      {laps && laps.map((e, i) => (
        <h3 key={i}>{e}</h3>
      ))}
    </div>
  );
}

export default App;
