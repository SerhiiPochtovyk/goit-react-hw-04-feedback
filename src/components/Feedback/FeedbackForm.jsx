import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackForm.module.css';

const FeedbackForm = ({ onLeaveFeedback, options }) => {
  return (
    <div className={s.btnContainer}>
      {options.map(name => (
        <button
          key={name}
          className={s.button}
          type="button"
          name={name}
          onClick={() => onLeaveFeedback(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

FeedbackForm.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default FeedbackForm;
