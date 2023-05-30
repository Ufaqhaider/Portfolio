import React from 'react'
import './intro.css'
export default function 
() {
  return (
    <>
        <div className="intro" id='intro' > 
        <div className='front-cont'>
        <h1>HI THERE!</h1>
          <div className='img'>
            <img src='wfh-work.gif'/>
          </div>
        <div className='head-intro'>

          I'M Ufaq Haider <span class="wave" role="img" aria-label="karthik says hi">👋</span>
          </div>

          <br></br>
          <a href='https://docs.google.com/document/d/1AqSZ62TXotCSXhf9tDqA_czA1PxIw0nr8b0nfqefm7s/edit?usp=sharing' target='blank'>
             <button>Resumé</button>
          </a>
        </div>
        </div>
    </>
  )
}
