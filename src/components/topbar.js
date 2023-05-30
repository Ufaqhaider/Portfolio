import React, { useState } from 'react';
import monkey from '../assets/pngkey.com-funny-monkey-png-9148666.png'
import Menu from './Menu';

export default function Topbar(props) {
  const [showCat, setShowCat] = useState(false);
  const handleClick = () => {
    setShowCat(true);
    setTimeout(() => {
      setShowCat(false);
    }, 2000); // Adjust the duration as needed
  };


  return (
    <div className='topbar' id='topbar'>
      <div className='wrapper'>
      <div className='left'> 
        <a href='#intro' onClick={handleClick}>Ufaq</a>
      </div>
      <div className='right'>
        <Menu/>


        <div className='menu-icon'>
          <a href='#intro' onClick={()=>props.Setbar(!props.bar)}>
            {props.bar ? <i class="fa-solid fa-bars fa-2x" ></i> : <i class="fa-solid fa-xmark fa-2x"></i>}
          </a>
        </div>
        </div>
      </div>






      {showCat && (
        <img className="monkey" src={monkey} alt="Cat" />
      )}
    </div>
  )
}


