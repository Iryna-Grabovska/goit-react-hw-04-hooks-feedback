import { useState } from 'react';

import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const onHandelClick = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };
  const totalFeedback = () => {
    return good + bad + neutral;
  };
  return (
    <>
      <Section title='Please leave feedback'>
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={onHandelClick}
        />
      </Section>

      <Section title='Statistics'>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback()}
        />
      </Section>
    </>
  );
}
