import React from 'react';
import List from './proj_list';
import './portfolio.css'

export default function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        <li className='featured'>Featured</li>
        <li className='webapp'>Web App</li>
        <li className='mobile'>Mobile App</li>
        <li className='design'>Designs</li>
      </ul>
      <div className='container'>
        {List.map((item)=>{
          return(
            <>
            <a href={item.url}>
            <div className='projs'>
            <img src={item.img} alt='hm' />
            <h1>{item.name}</h1>
          </div>
          </a>
          </>

          )
        }

          )}
      </div>
    </div>
  );
}