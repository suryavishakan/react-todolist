import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

// type checking
Header.defaultProps = {
  title: "React TodoList App",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
