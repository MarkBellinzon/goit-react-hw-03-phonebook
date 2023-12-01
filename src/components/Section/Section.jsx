import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <section>
      <h3>{title}</h3>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
