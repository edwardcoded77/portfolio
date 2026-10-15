


function photoControls({prevBtn, showColor, showBW, NextBtn}) {
  return (
        <p>
            <button onClick={prevBtn}>Prev</button>
            <button onClick={showColor}>Color</button>
            <button onClick={showBW}>B & W</button>
            <button onClick={NextBtn}>Next</button>
        </p>
     )
    }

export default photoControls