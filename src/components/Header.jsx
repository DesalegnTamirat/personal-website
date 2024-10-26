import PropTypes from 'prop-types';
import Logo from './Logo';

const Header = ({toggleProject
}) => {
  return (
    <header>
      <Logo />
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