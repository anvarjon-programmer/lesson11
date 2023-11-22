import React, { useState } from 'react'
import "./random.css"


export default function Render() {
    const [imgUrl,setUrl] = useState("https://cdn2.thecatapi.com/images/344.gif")
    const callImg=()=>{
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(res=>res.json()).then(data=>setUrl(data[0].url))
    }
    
  return (
      <>

       <div className="container">
        <div className="box">
            <h2 className='enjoy'>Enjoy the cat</h2>
            <img src={imgUrl} alt="" />
            <button className='randomBtn' onClick={()=>callImg()}>click me</button>
        </div>
        </div> 
    </>
  )
}
