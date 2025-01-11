import React from 'react'

function CombinedColor({colorsize="15px",text}) {
    console.log("Color Size",colorsize)
    
  return (
    <h1
    className="font-bold bg-gradient-to-r from-black to-secondary bg-clip-text text-transparent"
    style={{ fontSize: colorsize }}
  >
    {text}
  </h1>
  )
}

export default CombinedColor