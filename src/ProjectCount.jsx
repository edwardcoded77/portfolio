function ProjectCount() {
  let projects = [
    "Pokédex",
    "Pokémon Storage System",
    "Evolution Research",
    "Research Recommendation"
  ]

  return (
  <p>
    <h1>Project Count</h1>
    Professor Oak is working on {projects.length} projects.
    His first project is {projects[0]}.
  </p>
)
}


export default ProjectCount