import React, { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const feedbackType = event.target.textContent.toLowerCase();
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    return (
      <div className="container">
        <h2 className="title">Please leave the feedback</h2>
        <button type="button" onClick={this.onLeaveFeedback}>
          Good
        </button>
        <button type="button" onClick={this.onLeaveFeedback}>
          Neutral
        </button>
        <button type="button" onClick={this.onLeaveFeedback}>
          Bad
        </button>

        <h2 className="statistics">Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </div>
    );
  }
}
