/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Icon from './skill_list'
import './works.css'

export default function Works() {
  return (
    <div className='works' id='works'>
      <div className='heading'>
        <h1>Skills</h1>
      </div>

      <div className="skillsContainer sectionContainer">
        {Icon.map((each)=>{
          return(
            <ul className="skillsGrid">
              <li>
                <div class="itemContainer">
                  <img src={each.img}/>
                  <p>{each.name}</p>
                </div>
              </li>
            </ul>
          )
        })}

      </div>
    </div>
  )
}
