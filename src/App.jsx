
import Fortune from  "./Fortune"
import Header from "./Header"
import Footer from "./Footer"
import AboutMe from './AboutMe.jsx'
import GymLink from "./GymLink.jsx"
import GitHubLink from "./GitHubLink.jsx"
import JobTitle from "./JobTitle.jsx"
import Education from "./Education.jsx"
import ProjectCount from "./ProjectCount.jsx"
import "./App.css"
import DataPlaylistPortfolioCard from "./DataPlaylistPortfolioCard.jsx"
 

function App() {
  return (
    <div className="container">
      <Header />
       <h1>About Me</h1>
      <AboutMe/>
      <GymLink />
      <GitHubLink/>
      <Fortune />
      <JobTitle />
      <Education/>
      <ProjectCount/>
      <DataPlaylistPortfolioCard/>
      <Footer/>
    </div>
  )
}

export default App



























// import { useState } from "react"

// function Cat() {
//   const [cats, setCat] = useState([])
//   const [catIndex, setCatIndex] = useState(0)

//   async function getCat() {
//     let response = await fetch("https://studentedward-data-api.edwardolagunju25.workers.dev/api/v1/datasets/cats/records?limit=50")
//     let data = await response.json()

//     setCat(data.records)
//    }
 
   
//    function nextCat(){
//      setCatIndex(catIndex + 1 )
//    }

//   return (
//       <>
//       <section id="center">
//          <button type="button" style={{ width: "150px", height: "50px" }}
//          onClick ={getCat}>Get Cats</button>
    
//         {cats.length > 0 &&  (
//        <>
//           <h2>{cats[catIndex].Name}</h2>
//           <h2>Origin: {cats[catIndex].Origin}</h2>
//           <img src={cats[catIndex].Image} alt={cats[catIndex].Name} width={250}/>
//          <div>
//           <button type="button" style={{ width: "70px", height: "50px" }} onClick ={nextCat}>Next</button>     
//           </div>
//        </>
//        )}
//       </section> 
//     </>
//    )
//   }


