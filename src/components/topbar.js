import React, { useState } from 'react';
import Rocket from '../assets/rocket-front-color.png'
import Menu from './Menu';
import { Link } from 'react-scroll';

export default function Topbar(props) {
  const [showRocket, setRocket] = useState(false);
  const handleClick = () => {
    setRocket(true);
    setTimeout(() => {
      setRocket(false);
    }, 2000); // Adjust the duration as needed
  };


  return (
    <div className='topbar' id='topbar'>
      <div className='wrapper'>
      <div className='left'> 
        <Link
          to="intro"
          smooth={true}
          offset={10}
          duration={500}
          >
            <a onClick={handleClick}>Ufaq</a>
        </Link>
        {/* <Link
                    to="intro"
                    offset={10}
                ><a onClick={handleClick}>Home</a>
        </Link> */}
      </div>
      <div className='right'>
        <Menu click={handleClick}/>
        <div className='menu-icon'>
          <a onClick={()=>props.Setbar(!props.bar)}>
            {props.bar ? <i class="fa-solid fa-bars fa-2x" ></i> : <i class="fa-solid fa-xmark fa-2x"></i>}
          </a>
        </div>
        </div>
      </div>






      {showRocket && (
        <img className="monkey" src={Rocket} alt="rocket" />
      )}
    </div>
  )
}


