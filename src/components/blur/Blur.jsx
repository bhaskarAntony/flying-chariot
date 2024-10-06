import React, { useEffect, useState } from 'react';
import './style.css';

function Blur() {
    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [launch, setLaunch] = useState(0);
    const [showBlur, setShowBlur] = useState(true);

    // Function to calculate time until the next Sunday at 1:00 PM
    const getTimeUntilNextSunday = () => {
        const now = new Date();
        let nextSunday = new Date(now);

        // Set the day to the next Sunday
        nextSunday.setDate(now.getDate() + ((7 - now.getDay()) % 7)); // Days until Sunday (0)

        // Set time to 1:00 PM
        nextSunday.setHours(13, 0, 0, 0); // 13 hours = 1:00 PM

        // If today is Sunday and it's past 1:00 PM, move to next Sunday
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
            const timeLeft = getTimeUntilNextSunday();
            setTimeRemaining(timeLeft);

            // Hide blur section if the countdown reaches zero (i.e., after 1:00 PM)
            if (timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
                setShowBlur(false);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Update launch state based on current minutes
    useEffect(() => {
        setLaunch(new Date().getHours());
    }, [launch]);

    setInterval(() => {
        setLaunch(new Date().getHours());
    }, 1000);

    return (
        <section className={`blur p-3 ${Number(launch) === 13? 'd-none' : 'd-flex'}`}>
            <div className="row">
                <div className="col-md-8 text-center m-auto">
                {showBlur && (
             <div className="card p-3 py-5">
                 <div className='d-flex flex-column'>
                <h1 className="fs-4 fw-bold">Flying Chariot Grand Opening Starts </h1>
                <h1 className='btn-main rounded-pill d-inline-block align-items-center mt-4'>
                    <span>{timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s</span>
                </h1>
              </div>
             </div>
            )}
                </div>
            </div>
        </section>
    );
}

export default Blur;
