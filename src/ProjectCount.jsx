function ProjectCount() {
  let projects = [
    "Data Playlist",
    "Pokémon Storage System",
    "Evolution Research",
    "Research Recommendation"
  ]

  return (
    <article>
      <h2>Project Count</h2>
        <p>
          I've worked on {projects.length} projects so far, starting with {projects[0]}.
      </p>
      </article>
)
}


export default ProjectCount