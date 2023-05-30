import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';

export default function Jungle_Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ['Web Developer', 'Mobile Developer']
    });
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <>
      <div className='intro' id='intro'>
        <img className='bg-img' src='../jungle.jpg'></img>
        <img className='cat' src='../cat-working.gif'></img>
        <img className='grass' src='../ZhkE.gif'></img>
        <h1>Hey! I'm a Full Stack <span ref={textRef}></span></h1>
        <div className='icons'>
        <i class="fa-brands fa-linkedin fa-2x "></i>
        <i class="fa-brands fa-facebook fa-2x"></i>
        <i class="fa-brands fa-instagram fa-2x"></i>
        <i class="fa-brands fa-youtube fa-2x"></i>
        </div>
      </div>
    </>
  );
}
