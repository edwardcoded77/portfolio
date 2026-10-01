
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}


function Fortune() {
  let fortunes = [
    "Every Pokémon battle is a chance to learn something new.",
    "A great trainer never gives up on their Pokémon.",
    "Train hard today, and you'll be ready for tomorrow's battle."
  ]

  let advice = [
    "Trust your Pokémon and work as a team.",
    "Take care of your Pokémon after every battle.",
    "Keep exploring and you'll discover something new."
  ]

  let index = randomNumber(0, fortunes.length - 1)

  return (
    <div className="wisdom">
      <h1>Trainer's Wisdom</h1>
      <p>{fortunes[index]}</p>
      <p>{advice[index]}</p>
    </div>
  )
}


export default Fortune
