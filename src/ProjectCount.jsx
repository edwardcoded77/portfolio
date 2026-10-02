function ProjectCount() {
  let projects = [
    "Pokédex",
    "Pokémon Storage System",
    "Evolution Research",
    "Research Recommendation"
  ]

  return (
  <p>
    <h2>Project Count</h2>
    Professor Oak is working on {projects.length} projects.
    His first project is {projects[0]}.
  </p>
)
}


export default ProjectCount