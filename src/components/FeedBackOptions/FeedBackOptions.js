import PropTypes from 'prop-types';
import styles from './FeedBackOptions.module.css';

function FeedBackOptions(props) {
  const { options, onLeaveFeedback } = props;
  return (
    <>
      {Object.keys(options).map(name => (
        <button
          className={styles.btn}
          key={name}
          name={name}
          type="button"
          onClick={onLeaveFeedback}
        >
          {name}
        </button>
      ))}
    </>
  );
}

FeedBackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedBackOptions;
