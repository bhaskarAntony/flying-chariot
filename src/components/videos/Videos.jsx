import React, { useState, useRef } from 'react';
import video1 from '../../videos/Video1.mp4';
import video2 from '../../videos/Video2.mp4';
import video3 from '../../videos/Video3.mp4';
import video4 from '../../videos/Video4.mp4';
import video6 from '../../videos/Video6.mp4';
import video7 from '../../videos/Video7.mp4';
import video8 from '../../videos/Video8.mp4';
import video9 from '../../videos/Video9.mp4';
import video10 from '../../videos/Video10.mp4';
import video11 from '../../videos/Video11.mp4';
import video12 from '../../videos/Video12.mp4';
import video13 from '../../videos/Video13.mp4';
import './style.css';

function Videos() {
    const data = [
        video1, video2, video3, video4, video6, video7,
        video8, video9, video10, video11, video12, video13
    ];

    const videoRefs = useRef([]);

    const [playing, setPlaying] = useState(
        new Array(data.length).fill(false) // Array to track play/pause state
    );

    const handlePlayPause = (index) => {
        const updatedPlaying = [...playing];
        const currentVideo = videoRefs.current[index];

        if (currentVideo.paused) {
            currentVideo.play();
            updatedPlaying[index] = true;
        } else {
            currentVideo.pause();
            updatedPlaying[index] = false;
        }

        setPlaying(updatedPlaying);
    };

    return (
        <section className='videos p-3 p-md-5'>
            <div className="row">
                {
                    data.map((item, index) => (
                        <div className="col-md-6 video-container mb-4" key={index} style={{ position: 'relative' }}>
                            <video
                                ref={el => videoRefs.current[index] = el}
                                src={item}
                                loop
                                
                            />
                            <div
                                className="play-pause-overlay"
                                onClick={() => handlePlayPause(index)}
                            >
                                <button
                                    className="play-pause-button"
                                >
                                    {playing[index] ? '❚❚' : '▶'} {/* Play or Pause icon */}
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}



// Style.css (additional CSS to handle hover effect)
export default Videos;
