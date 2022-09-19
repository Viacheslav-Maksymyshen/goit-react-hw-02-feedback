import PropTypes from 'prop-types';
import styles from './FeedBackOptions.module.css';

const FeedBackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(option => (
      <button
        className={styles.btn}
        key={option}
        name={option}
        type="button"
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    ))}
  </>
);

FeedBackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedBackOptions;
