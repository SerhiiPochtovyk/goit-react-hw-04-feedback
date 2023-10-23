import React, { Component } from 'react';
import 'bulma/css/bulma.css';
// import { nanoid } from 'nanoid';
import FeedbackForm from './Feedback/FeedbackForm';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return ((this.state.good / total) * 100).toFixed() + '%';
  };

  render() {
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    const total = this.countTotalFeedback();
    const stats = Object.entries(this.state);
    const options = Object.keys(this.state);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackForm
            options={options}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 && (
            <Statistics
              stats={stats}
              positivePercentage={positiveFeedbackPercentage}
              total={total}
            />
          )}

          {total < 1 && <p>No feedback given</p>}
        </Section>
      </div>
    );
  }
}