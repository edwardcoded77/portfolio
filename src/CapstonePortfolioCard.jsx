function CapstonePortfolioCard() {
  let name = "Global Life Expectancy"
  let description = "An interactive web application that turns user input into a personalized greeting card."
  let liveUrl = "https://edwardcoded77.github.io/capstone/"
  let repoUrl = "https://github.com/edwardcoded77/capstone"
  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl}>See it live</a> · <a href={repoUrl}>Read the code</a>
      </p>
    </article>
  )
}

export default CapstonePortfolioCard