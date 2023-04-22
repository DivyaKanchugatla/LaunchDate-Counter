import React from 'react';
import Counter from './components/Countdown';

const App = () => {
  const launchDate = new Date('2023-04-21T18:30:00Z');

  return (
    <div>
      <Counter  launchDate={launchDate}/>
    </div>
  );
};

export default App;