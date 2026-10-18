function ProjectCount() {
  let projects = [
    "Greeting Card Generator",
    "Pokémon Storage System",
    "Evolution Research",
    "Research Recommendation",
    "Club Welcome Page"
  ]

  return (
    <article className="card">
      <h2>Project Count</h2>
        <p>
          I've worked on {projects.length} projects so far, starting with {projects[0]}.
      </p>
      </article>
)
}


export default ProjectCount