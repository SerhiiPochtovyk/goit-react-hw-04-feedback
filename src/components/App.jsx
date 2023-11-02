import React, { useState } from 'react';
import FeedbackForm from './Feedback/FeedbackForm';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = name => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [name]: prevFeedback[name] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? `${((feedback.good / total) * 100).toFixed()}%` : '0%';
  };

  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();
  const total = countTotalFeedback();
  const stats = Object.entries(feedback);
  const options = Object.keys(feedback);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackForm options={options} onLeaveFeedback={handleClick} />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            stats={stats}
            positivePercentage={positiveFeedbackPercentage}
            total={total}
          />
        ) : (
          <p>No feedback given</p>
        )}
      </Section>
    </div>
  );
};

export default App;

