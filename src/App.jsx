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





function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function Fortune() {
  let fortunes = [
    "Read the whole error before you change a line.",
    "Run it after every small change.",
    "The bug is in the last thing you touched."
  ]

  let advice = ["Take a deep breath", "Check the console", "Make one change at a time"]
  let index = randomNumber(0, fortunes.length -1 )
  let indexAdvice = randomNumber(0, advice.length - 1 )

   return (
      <div>
          <p>{fortunes[index]}</p>
          <p>{advice[indexAdvice]}</p>
      </div>

   )


}


import Header from "./Header"


function JobTitle() {
  return <h2>Pokémon Trainer</h2>
}

function AboutMe(){
return <p>I travel across the land, searching far and wide to catch 'em all! </p>
}


function Education(){
return <p> Graduated from Pallet Town Pokémon Training Academy(1996) </p>
}

function Footer() {
  return <p>&copy; {new Date().getFullYear()} Ash Ketchum</p>
}

function App() {
  return (
    <div className="container">
      <Header />
      <Fortune />
      <JobTitle />
      <Fortune/>
      <AboutMe/>
      <Education/>
      <Footer/>
    </div>
  )
}

export default App