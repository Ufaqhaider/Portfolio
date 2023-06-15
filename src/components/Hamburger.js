import React from 'react';

export default function Hamburger({bar,Setbar}) {
  return (
    <div  className={bar? 'menu' : 'active' }>
        <ul id='ham-ul'>
            <li>
                <a href='#intro'>Home</a>
            </li>
            <li>
                <a href='#portfolio'>Projects</a>
            </li>
            <li>
                <a href='#works'>Skills</a>
            </li>
        </ul>
    </div>
  )
}
