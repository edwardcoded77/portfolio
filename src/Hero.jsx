// https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=

const imageUrl = (w, h , bri ) => {
return "https://images.unsplash.com/photo-1738699789618-92893bb2a8a8?w=" + w + "&h=" + h + "&bri=" + bri + "auto=format&fit=crop"
}

function Hero() {
  const src = imageUrl(300, 200, -80)
  return (
    <div className="hero">
      <img src={src} alt="Gym photo" />
      <h4>Put more on the gear</h4>
    </div>
  )
}

export default Hero