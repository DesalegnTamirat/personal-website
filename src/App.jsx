import { useState } from "react"
import Header from "./components/Header"
import Projects from "./components/Projects"
import "./index.css"
import Hero from "./components/Hero"

const App = () => {
  const [hidden, setHidden] = useState(false);
  const toggleProject = () => {
    setHidden(!hidden)
  }
  return (
  <>
    <Header toggleProject={toggleProject}/>
    <Hero />
    <Projects hidden={hidden} toggleProject={toggleProject}/>

  </>
  )
}

export default App