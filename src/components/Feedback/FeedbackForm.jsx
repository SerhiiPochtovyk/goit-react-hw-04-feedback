import PropTypes from 'prop-types';
import s from './FeedbackForm.module.css';

function FeedbackForm({ onLeaveFeedback, options }) {
  return (
    <div className={s.btnContainer}>
      {options.map(name => {
        return (
          <button
            key={name}
            className={s.button}
            type="button"
            name={name}
            onClick={onLeaveFeedback}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
}

export default FeedbackForm;

FeedbackForm.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};