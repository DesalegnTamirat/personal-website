import PropTypes from 'prop-types';

const Header = ({toggleProject
}) => {
  return (
    <header>
      <ul className="nav">
        <li><a href="#">Home</a></li>
        <li onClick={toggleProject}><a href="#">Projects</a></li>
        <li><a href="#about-section">About</a></li>
        <li><a href="#contact-section">Contact</a></li>
      </ul>
    </header>
  )
}

Header.propTypes = {
  toggleProject: PropTypes.func.isRequired,
}

export default Header