import { useState } from 'react'



function ClickLabPortfolioCard() {
const [likes, setLikes] = useState(0)

  let name = "Click-lab Quiz"
  let description = "An interactive FIFA World Cup quiz with scoring and replay."
  let liveUrl = "https://edwardcoded77.github.io/click-lab/"
  let repoUrl = "https://github.com/edwardcoded77/click-lab"




  const addLike = () => {
  setLikes(likes + 1)
  }




  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">See it live</a> · <a href={repoUrl} target="_blank" rel="noopener noreferrer">Read the code</a>
      </p>
      <button onClick={addLike}>Like {likes}</button>

    </article>
  )
}

export default ClickLabPortfolioCard