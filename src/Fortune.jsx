
import { useState } from 'react'


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}


function Fortune() {
    const [index , setIndex] = useState(0)
    const [showFortune, setShowFortune] = useState(true)

  let fortunes = [
    "A new opportunity is closer than you think.",
    "Your hard work will soon begin to pay off.",
    "Today is a good day to learn something new.",
    "Trust yourself you know more than you think."
  ]

  let advice = [
    "Challenge yourself and don't be afraid to make mistakes.",
    "Keep going even when progress feels slow.",
    "Stay open to new ideas and don't be afraid to take the first step.",
    "Believe in your abilities and keep moving forward."
  ]


  const newFortune = () => {
     setIndex(randomNumber(0, fortunes.length - 1))
  }


function toggleBoth() {
    setShowFortune(!showFortune)
}


  return (
  <div>
      <article>
     <div className="wisdom">
        <h2>Daily Fortune</h2>
       {/* <p>{fortunes[index]} {advice[index]}</p> */}
        <p>{showFortune ? fortunes[index] : advice[index]}</p>
    </div>
      </article>
      <div className="fortBtn">
          <button onClick={newFortune}>New Fortune</button>
          <button onClick={toggleBoth}>
            {showFortune ? "Show Advice" : "Show Fortune"} 
            </button>
     </div>
  </div>
  )
}


 
export default Fortune
