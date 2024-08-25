import React, { useEffect, useState } from 'react';
import './Countdown.css';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-08-26T21:00:00"); // 26 August 2024, 9:00 PM close time:-  2024-09-05T21:00:00
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        Days: 0,
        Hours: 0,
        Minutes: 0,
        Seconds: 0,
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
    return unit.toString().padStart(2, '0');
  };

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    const paddedUnit = padTimeUnit(timeLeft[interval]);
    const firstDigit = paddedUnit.charAt(0);
    const secondDigit = paddedUnit.charAt(1);

    timerComponents.push(
      <span key={interval} className="timer-unit">
        <span className='setting'>
          <span className='timer-digits'>{firstDigit}</span>
          <span className='timer-digits'>{secondDigit}</span>
        </span>
        <span className="timer-label"> {interval} </span>
      </span>
    );
  });

  return (
    <div className="countdown-container">
     <h2 style={{ margin: '1vw', letterSpacing:'2px', fontSize: '20px' }}><b>RECRUITMENT BEGINS IN {/*  RECRUITMENT CLOSES IN  */}</b></h2>   
      <div className="countdown-timer">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </div>
  );
};

export default Countdown;