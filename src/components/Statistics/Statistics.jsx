import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ stats, total, positivePercentage }) {
  return (
    <div>
      <ul className={s.list}>
        {stats.map(([name, value]) => {
          return (
            <li key={name} className={s.stat}>
              {name}:{value}
            </li>
          );
        })}
      </ul>
      <p>Total:{total}</p>
      <p>Positive feedback: {positivePercentage}</p>
    </div>
  );
}

export default Statistics;

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
  positivePercentage: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};