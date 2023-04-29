import React from 'react';
import Timeline from './TimelineItem';

const events = require('../events.json');

function TimeLinePage() {
  return (
    <div className="App">
      <Timeline events={events} />
    </div>
  );
}

export default TimeLinePage;