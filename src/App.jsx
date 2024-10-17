import { useState } from "react"
import Header from "./components/Header"
import Projects from "./components/Projects"
import "./index.css"

const App = () => {
  const [hidden, setHidden] = useState(false);
  const toggleProject = () => {
    setHidden(!hidden)
  }
  return (
  <>
    <Header toggleProject={toggleProject}/>
    <Projects hidden={hidden} toggleProject={toggleProject}/>
  </>
  )
}

export default App