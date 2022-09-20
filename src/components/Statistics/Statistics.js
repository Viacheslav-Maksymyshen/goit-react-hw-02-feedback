import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => (
  <>
    <ul className={styles.feedBackList}>
      <li className={styles.feedBackItem}>Good: {good}</li>
      <li className={styles.feedBackItem}>Neutral: {neutral}</li>
      <li className={styles.feedBackItem}>Bad: {bad}</li>
      <li className={styles.feedBackItem}>Total: {total}</li>
      <li className={styles.feedBackItem}>
        Positive feedback: {positiveFeedbackPercentage}%
      </li>
    </ul>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics;
