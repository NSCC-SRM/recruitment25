import React, { useEffect, useState } from 'react';
import './Countdown.css'; 

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-08-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      timeLeft = {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const padTimeUnit = (unit) => {
    return unit < 10 ? `0${unit}` : unit;
  };

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    timerComponents.push(
      <span key={interval} className="timer-unit">
        <span>{padTimeUnit(timeLeft[interval])}</span>
        <span className="timer-label"> {interval} </span>
      </span>
    );
  });

  return (
    <div className="countdown-container">
      <h2 style={{ marginBottom: '10px' }}><b>COUNTDOWN BEGINS</b></h2>
      <div className="countdown-timer">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </div>
  );
};

export default Countdown;
