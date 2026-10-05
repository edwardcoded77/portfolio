function CapstonePortfolioCard() {
  let name = "Global Life Expectancy"
  let description = "An interactive web application that lets users explore life expectancy data across countries."
  let liveUrl = "https://edwardcoded77.github.io/capstone/"
  let repoUrl = "https://github.com/edwardcoded77/capstone"
  return (
    
      <article>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">See it live</a> · <a href={repoUrl} target="_blank" rel="noopener noreferrer">Read the code</a>
        </p>
      </article>
  )
}

export default CapstonePortfolioCard