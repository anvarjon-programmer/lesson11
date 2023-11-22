import React , { useState }from 'react'
import "./modal.css"
export default function Moodal() {
    const [list, setList]=useState(true);
    console.log(list);
  return (
    <div>
        <div className="containerr">
            <div className='modal'>
            <button className='open' onClick={()=>setList(true)}>
            Popups
        </button>
        <div className="modal__item">
        
        <div className="modal__body">
            <div className={list ? "modal__body_item" : "out"}>
            <div className="modal__title">
            <h3>Successfully applied</h3>
            <button className='remove' onClick={()=>{setList(false)}}>X</button>
            </div>
            <div className="modal__text" id='modal__text'>
                <p>
                Malesuada tellus tincidunt fringilla enim, id mauris. Id etiam nibh suscipit aliquam dolor.
                Malesuada tellus tincidunt fringilla enim, id mauris. Id etiam nibh suscipit aliquam dolor.
                </p>
            </div>
            </div>
        </div>
        </div>
          
            </div>
        
        </div>
             
    </div>
  )
}
