import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <>
      <ul className={styles.feedBackList}>
        <li className={styles.feedBackItem} key="id-1">
          Good: {good}
        </li>
        <li className={styles.feedBackItem} key="id-2">
          Neutral: {neutral}
        </li>
        <li className={styles.feedBackItem} key="id-3">
          Bad: {bad}
        </li>
        <li className={styles.feedBackItem} key="id-4">
          Total: {total(good, neutral, bad)}
        </li>
        <li className={styles.feedBackItem} key="id-5">
          Positive feedback: {good ? positivePercentage(good, neutral, bad) : 0}
          %
        </li>
      </ul>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
