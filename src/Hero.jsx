
// https://images.unsplash.com/photo-1649269752878-d563bcfd94ef?w=
// https://images.unsplash.com/photo-1604307410297-081e0677d3fb?w=


const imageUrl = (w, h , bri ) => {
return "https://images.unsplash.com/photo-1604307410297-081e0677d3fb?w=" + w + "&h=" + h + "&bri=" + bri + "auto=format&fit=crop"
}


const  heroImg = (width, height, bri ) => {
  const src = imageUrl(width, height, bri)
  const alt = "Web developer hero image "

  return [src, alt]
 
}

function Hero() {
  const [src, alt] = heroImg(1000, 500, -1)
  return (
    <div className="hero">
      <img src={src} alt="{alt}" />
      <div className="hero-text">
           <h1>Hi, I'm Gbenga</h1>
                <p>Web Developer</p>
                <a href="#projects" className="projects-button" role="button">View My Projects</a>
       </div>
    </div>
  )
}

export default Hero