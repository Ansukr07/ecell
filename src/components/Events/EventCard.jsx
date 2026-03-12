import React from 'react';
import './Events.css';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <div className="event-card-image">
        <img src={event.image} alt={event.title} loading="lazy" />
        <div className="event-card-date">
          <span>{event.date.split(',')[0]}</span>
        </div>
      </div>
      <div className="event-card-content">
        <h3 className="event-card-title">{event.title}</h3>
        <p className="event-card-location">{event.location}</p>
        <p className="event-card-description">{event.description}</p>
      </div>
    </div>
  );
};

export default EventCard;