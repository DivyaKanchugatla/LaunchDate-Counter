import React, {useState,useEffect} from 'react'
import "../App.css"

const Counter = ({launchDate}) => {
  const [daysLeft, setDaysLeft] = useState(0);
  const [hoursLeft, setHoursLeft] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [launchDatePassed, setLaunchDatePassed] = useState(false);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;
      if (distance < 0) {
        setLaunchDatePassed(true);
        clearInterval(intervalId);
      } else {
        setDaysLeft(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHoursLeft(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutesLeft(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSecondsLeft(Math.floor((distance % (1000 * 60)) / 1000));
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [launchDate]);

  return (
    <>
      {launchDatePassed ? (
        <div className='message-container'>
          <div className='message'>
        <p><small> I wish you abundant happiness and love</small></p>
        <br/>
        <p>Count not the years, but the life you live. A wonderful journey is waiting for you.</p>
        <p>Wishing you a very happy and fun-filled birthday!</p>
        <br/>
        <p><small>Happy Birthday!!!</small></p>
        </div>
        </div>
      ) : (
        <>
         <section className="timer-container">
      <section className="timer">
        <div>
          <span className='mdi mdi-calendar-clock timer-icon'></span>
          <h2>CountDown Timer</h2> 
          <p>countdown to a really specail date.</p>
        </div>
        <div>
          <section>
            <p>{daysLeft}</p>
            <p><small>Days</small></p>
          </section>
          <span>:</span>
          <section>
            <p>{hoursLeft}</p>
            <p><small>Hours</small></p>
          </section>
          <span>:</span>
          <section>
            <p>{minutesLeft}</p>
            <p><small>Minutes</small></p>
          </section>
          <span>:</span>
          <section>
            <p>{secondsLeft}</p>
            <p><small>Seconds</small></p>
          </section>
        </div>
      </section>
    </section> 
        </>
      )}   
    </>
  )
}

export default Counter