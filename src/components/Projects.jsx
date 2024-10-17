import website1 from "../images/website-1.png";
import website2 from "../images/website-2.png";
import website3 from "../images/website-3.png";

const Projects = ({hidden, toggleProject}) => {
  return (
    hidden ? <section className="projects">
      <a href="https://desalegntamirat.github.io/Das-VR-Travel/" target="_blank"><img src={website1} alt="Das VR Travel Website" />
      </a>
      <a href="https://desalegntamirat.github.io/pig-game/" target="_blank"><img src={website2} alt="Pig game played with two person" />
      </a>
      <a href="https://desalegntamirat.github.io/FizzBuzz/" target="_blank"><img src={website3} alt="fizz buzz generator" />
      </a>
      <button className="close-project-btn" onClick={toggleProject}>&#x2715;</button>
    </section>: null
  )
}

export default Projects