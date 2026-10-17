import { useState } from 'react'



function ProjectCard({ project }) {
const [likes, setLikes] = useState(0)
const [open, setOpen] = useState(false)

const addLike = () => {
setLikes(likes + 1)
}

const toggleOpen = () => {
setOpen(!open)
}

let text = project.description
if (open) {
text = project.description + " " + project.details
}

let label = "Show More"
if (open) {
label = "Show Less"
}


return (
<article className="card">
<h2>{project.name}</h2>
<p>{text}</p>

<button onClick={toggleOpen}>{label}</button>
<p>
<a href={project.liveUrl} target="_blank" rel="noopener noreferrer">See it live</a> · <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">Read the code</a>
</p>
<button onClick={addLike}>Like {likes}</button>
</article>
)
}

export default ProjectCard
