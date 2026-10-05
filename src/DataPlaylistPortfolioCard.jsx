function DataPlaylistPortfolioCard() {
  let name = "Data Playlist"
  let description = "A playlist page that loads its songs from my own data API."
  let liveUrl = "https://edwardcoded77.github.io/data-playlist/"
  let repoUrl = "https://github.com/edwardcoded77/data-playlist"
  return (
    <article >
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">See it live</a> · <a href={repoUrl} target="_blank" rel="noopener noreferrer">Read the code</a>
      </p>
    </article>
  )
}

export default DataPlaylistPortfolioCard


