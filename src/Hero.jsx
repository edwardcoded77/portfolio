
// https://images.unsplash.com/photo-1649269752878-d563bcfd94ef?w=
// https://images.unsplash.com/photo-1604307410297-081e0677d3fb?w=


// import useState
import { useState } from 'react'


// create function imageURL
const imageUrl = (w, h , bri , sat) => {
return "https://images.unsplash.com/photo-1649269752878-d563bcfd94ef?w=" + w + "&h=" + h + "&bri=" + bri + "&sat=" + sat + "&auto=format&fit=crop"
}



 // function heroImg control Hero image  settings
  const  heroImg = (width, height, bri, sat) => {
  const src = imageUrl(width, height, bri, sat)
  const alt = "Web developer hero image "

  return [src, alt]
 }


// function Hero control react 
function Hero() {
 const [sat, setSat] = useState(0)
 
 const showColor = () => {
  setSat(0)
}

const showBW = () =>{
  setSat(-100)
}

const [src, alt] = heroImg(1000, 500, -1, sat)
  
  return (
    <>
     <div className="hero">
        <img src={src} alt="{alt}" />
        <div className="hero-text">
           <h1>Hi, I'm Gbenga</h1>
                <p>Web Developer</p>
                <a href="#projects" className="projects-button" role="button">View My Projects</a>
             </div>
         </div> 
         <div className="Btn-click">
            <button onClick={showColor}>Color</button>&nbsp;
            <button onClick={showBW}>Black & White</button>
            {/* <p>Current satCont: {sat}</p> */}

        </div>
      </> 
  )
}

export default Hero