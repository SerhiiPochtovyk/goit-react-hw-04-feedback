import React, { useState } from 'react';
import 'bulma/css/bulma.css';
// import { nanoid } from 'nanoid';


export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const handleFeedback = (feedbackType) => {
    setState((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1
    }));
  };

  return (
    <div>
      <h1>Feedback App</h1>
      <button onClick={() => handleFeedback('good')}>Good</button>
      <button onClick={() => handleFeedback('neutral')}>Neutral</button>
      <button onClick={() => handleFeedback('bad')}>Bad</button>
      <div>
        Good: {state.good}
      </div>
      <div>
        Neutral: {state.neutral}
      </div>
      <div>
        Bad: {state.bad}
      </div>
    </div>
  );
};