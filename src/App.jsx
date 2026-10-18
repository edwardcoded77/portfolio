import "./App.css"
import "./hero.css"
import Contact from "./Contact.jsx"
import Fortune from  "./Fortune"
import Header from "./Header"
import Footer from "./Footer"
import AboutMe from './AboutMe.jsx'
import JobTitle from "./JobTitle.jsx"
import Education from "./Education.jsx"
import ProjectCount from "./ProjectCount.jsx"
import Hero from "./Hero.jsx"
import ProjectCard from './ProjectCard.jsx'
import projects from './projects.js'



function renderProjects() {
  return projects.map((project, index) => (
    <ProjectCard key={index} project={project} />
  ))
}


function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <AboutMe/>
      <JobTitle />
      <Education/>
      <ProjectCount/>
     {renderProjects()}
      <Fortune/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
























