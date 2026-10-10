
// https://images.unsplash.com/photo-1649269752878-d563bcfd94ef?w=
// https://images.unsplash.com/photo-1604307410297-081e0677d3fb?w=
// https://images.unsplash.com/photo-1783540108072-7e4e4007856e?w=

// import useState
import { useState } from 'react'



// create function imageURL
const imageUrl = (photoId, w, h , bri , sat) => {
return "https://images.unsplash.com/" + photoId + "?w=" + w + "&h=" + h + "&bri=" + bri + "&sat=" + sat + "&auto=format&fit=crop"
}


const imageIdList = [
  { id: "photo-1649269752878-d563bcfd94ef",  description: "Coding with a tropical view"},
  { id: "photo-1604307410297-081e0677d3fb",  description:  "Focused coding, creative thinking"},
  { id: "photo-1783540108072-7e4e4007856e",  description: "A workspace built for creativity"}                                   
]


 // function heroImg control Hero image  settings
  const  heroImg = (width, height, bri, sat, index) => {
  const photo = imageIdList[index]
  const src = imageUrl(photo.id, width, height, bri, sat)
  const alt = photo.description

  return [src, alt]
 }


// function Hero control react 
function Hero() {
 const [sat, setSat] = useState(0)
 const [index, setIndex] = useState(0)
 

 const showColor = () => {
  setSat(0)
}

const showBW = () =>{
  setSat(-100)
}


const prevBtn = () => {
  if (index > 0) {
    setIndex( index -1 )
  } else {
      setIndex(imageIdList.length - 1)
    }
 }


const NextBtn = () => {
  if (index < imageIdList.length - 1){
     setIndex(index + 1) 
  }else {
    setIndex(0)
  }
}

const [src, alt] = heroImg(1000, 500, -1, sat,index)
  
  return (
    <>
     <div className="hero">
        <img src={src}/>
          <p className='photo-alt'>{alt}</p>
        <div className="hero-text">
           <h1>Hi, I'm Gbenga</h1>
                <p>Web Developer</p>
                <a href="#projects" className="projects-button" role="button">View My Projects</a>
             </div>
         </div> 
         <div className="Btn-click">
            <button onClick={prevBtn}>Prev</button>
            <button onClick={showColor}>Color</button>
            <button onClick={showBW}>B & W</button>
             <button onClick={NextBtn}>Next</button>

        </div>
      </> 
  )
}

export default Hero