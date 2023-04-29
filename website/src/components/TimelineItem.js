import React, { useEffect } from 'react';
import './timeline.css';

const Timeline = ({ events }) => {
  useEffect(() => {
    const handleScroll = () => {
      const events = document.querySelectorAll('.event');
      events.forEach(event => {
        const eventTop = event.getBoundingClientRect().top;
        const eventBottom = event.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        if (eventTop < windowHeight && eventBottom > 0) {
          event.classList.add('active');
        } else {
          event.classList.remove('active');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className={`event ${index % 2 === 0 ? 'left' : 'right'}`}>
          <div className="event-date">{event.date}</div>
          <div className="event-title">{event.title}</div>
          <div className="event-description">{event.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;