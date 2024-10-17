
const Header = ({toggleProject
}) => {
  return (
    <header>
      <ul className="nav">
        <li><a href="#">Home</a></li>
        <li onClick={toggleProject}><a href="#">Projects</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </header>
  )
}

export default Header