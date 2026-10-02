// The fixed part, cut after the ?
// https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&auto=format&fit=crop&q=60?

const imageUrl = (w, h ) => {
return "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=" + w + "&h=" + h + "auto=format&fit=crop"

}

function Hero() {
  const src = imageUrl(400, 200)
  return (
    <div className="hero">
      <img src={src} alt="Gym photo" />
    </div>
  )
}

export default Hero