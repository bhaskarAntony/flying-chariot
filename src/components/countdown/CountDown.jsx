import React, { useState, useEffect } from 'react';

const CountDown = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Function to calculate time until the next Sunday at 12:00 PM
  const getTimeUntilNextSunday = () => {
    const now = new Date();
    let nextSunday = new Date(now);

    // Set the day to the next Sunday
    nextSunday.setDate(
      now.getDate() + ((7 - now.getDay()) % 7) // Days until Sunday (0)
    );

    // Set time to 12:00 PM
    nextSunday.setHours(12, 0, 0, 0);

    // If today is Sunday and it's past 12:00 PM, move to next Sunday
    if (now.getDay() === 0 && now.getTime() >= nextSunday.getTime()) {
      nextSunday.setDate(nextSunday.getDate() + 7);
    }

    // Calculate difference
    const timeDifference = nextSunday - now;

    // Convert time difference to days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  // Update the countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeUntilNextSunday());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return   <span> {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s</span>
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4'
  },
  header: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  countdown: {
    fontSize: '2rem',
    fontWeight: 'bold',
    display: 'flex',
    gap: '10px'
  }
};

export default CountDown
