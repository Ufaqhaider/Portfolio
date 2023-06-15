import React from 'react'
import './intro.css'
import GithubIcon from './github.svg';
import LinkedIn from './linkedin.svg';
import rn from './products-top-ill.png'
import Typewriter from 'typewriter-effect';
import {Link} from 'react-scroll'
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
        <img className='rn' src={rn}/>
        <h2 className='name'>I'M Ufaq Haider <span class='wave' role='img' aria-label='karthik says hi'>👋</span></h2>
        <Typewriter
          options={{
            strings: ['a Frontend developer', 'a Youtuber', 'a Content creator'],
            autoStart: true,
            loop: true,
            deleteSpeed: 'natural',
            pauseFor: 2000,
          }}
          />

          </div>

          <br></br>
          <div className='bottom'>
          <a href='https://docs.google.com/document/d/1AqSZ62TXotCSXhf9tDqA_czA1PxIw0nr8b0nfqefm7s/edit?usp=sharing' target='blank'>
             <button>RESUME</button>
          </a>
          <div className='socials'>
            <ul>
              <li><a href="#"><i class="fa-brands fa-instagram instagram"></i></a></li>
              <li><a href='#'><i class="fa-brands fa-linkedin"></i></a></li>
              <li><a href='#'><i class="fa-brands fa-youtube"></i></a></li>            
            </ul>
          </div>
          </div>
          
        </div>
        <div className='scrolldown'>
          <div className="chevrons">
            <div className='chevrondown'></div>
            <div className='chevrondown'></div>
          </div>
        </div>
        </div>
    </>
  )
}


// <a><img src={GithubIcon}/></a>
// <a><img src={LinkedIn}/></a>