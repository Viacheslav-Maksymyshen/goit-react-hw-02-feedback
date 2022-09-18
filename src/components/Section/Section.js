import PropTypes from 'prop-types';
import styles from './Section.module.css';

function Section(props) {
  const { title = '', children } = props;
  return (
    <section className={styles.section}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
