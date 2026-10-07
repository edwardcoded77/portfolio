import "./App.css"
import "./hero.css"
import Contact from "./Contact.jsx"
import Fortune from  "./Fortune"
import Header from "./Header"
import Footer from "./Footer"
import AboutMe from './AboutMe.jsx'
import GymLink from "./GymLink.jsx"
import GitHubLink from "./GitHubLink.jsx"
import JobTitle from "./JobTitle.jsx"
import Education from "./Education.jsx"
import ProjectCount from "./ProjectCount.jsx"
import DataPlaylistPortfolioCard from "./DataPlaylistPortfolioCard.jsx"
import GreetingCardGeneratorPortfolioCard from "./GreetingCardGeneratorPortfolioCard.jsx"
import CapstonePortfolioCard from "./CapstonePortfolioCard.jsx"
import Hero from "./Hero.jsx"
import Gallery from "./Gallery.jsx"





function App() {
  return (
    <div className="container">
      <Header />
       <Hero />
      <AboutMe/>
      {/* <GymLink /> */}
       {/* <Gallery/> */}
      {/* <GitHubLink/> */}
      {/* <Fortune /> */}
      <JobTitle />
      <Education/>
      <ProjectCount/>
      <DataPlaylistPortfolioCard/>
      <GreetingCardGeneratorPortfolioCard/>
      <CapstonePortfolioCard/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App



























