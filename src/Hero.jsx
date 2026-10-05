
// https://images.unsplash.com/photo-1649269752878-d563bcfd94ef?w=
// https://images.unsplash.com/photo-1604307410297-081e0677d3fb?w=


const imageUrl = (w, h , bri ) => {
return "https://images.unsplash.com/photo-1604307410297-081e0677d3fb?w=" + w + "&h=" + h + "&bri=" + bri + "auto=format&fit=crop"
}

function Hero() {
  const src = imageUrl(1000, 500, -1)
  return (
    <div className="hero">
      <img src={src} alt="web photo" />
      <div className="hero-text">
           <h1>Hi, I'm Gbenga</h1>
                <p>Web Developer</p>
                <a href="#projects" className="projects-button" role="button">View My Projects</a>
       </div>
    </div>
  )
}

export default Hero