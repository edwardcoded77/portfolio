function Contact() {
  let email = "ash@pallet.town"
  return (
    <article>
        <h2>Let's Connect</h2>
       <p>I'm always interested in learning, building new projects,and connecting with other developers.</p>
    <a id="contact" href={"mailto:" + email}>Email me</a>
    </article>
  )
}

export default Contact

