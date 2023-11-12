import React, { useState } from 'react'
import '../styles/App.css';
import Image from '../image.jpeg';

const App = () => {
  const [height,setHeight]=useState(320);
  const [width,setWidth]=useState(320);
  return (
    <div id="main">
    <img id='resizable-img' src={Image} height={`${height}px`} width={`${width}px`} alt='image' />
    <br/>
    <input id='height-slider' value={height} type='range' min={100} max={800} onChange={(e)=> setHeight(e.target.value)}/>
    <br/>
    <input id='width-slider' value={width} type='range' min={100} max={800} onChange={(e)=> setWidth(e.target.value)}/>
    
    
    </div>
  )
}


export default App;
