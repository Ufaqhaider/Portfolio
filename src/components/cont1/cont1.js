import React from 'react';
import './cont1.css';


const Cont1=()=>{
    return (
      <>
        {/* <div className="contact100-pic js-tilt" data-tilt="" style={{ willChange: 'transform', transform: 'perspective(300px) rotateX(0deg) rotateY(0deg)' }}>
          <img src="../assets/img-01.webp" alt="IMG"/>
        </div> */}
        <div className='contact-page' id='Contact'>
        <div class="inFormBackground">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="inLoginForm">
          <form onsubmit="return false">
            <div class="title">
              <h3>Contact Me</h3>
            </div>
            <div class="inputGroup">
              <label for="email">Name</label>
              <input type="email" placeholder="Enter your Name" id="name"/>
            </div>
            <div class="inputGroup">
              <label for="email">Email</label>
              <input type="email" placeholder="Enter Email" id="email"/>
            </div>
            <div class="inputGroup">
              <label for="password">Message</label>
              <input type="text" placeholder="Enter Message" id="password"/>
            </div>
            <button class="submitForm">Send</button>
            <div class="social">
              <div class="go"><i class="fab fa-google"></i></div>
              <div class="fb"><i class="fab fa-facebook"></i></div>
              <div class="tw"><i class="fab fa-twitter"></i></div>
            </div>
          </form>
        </div>
      </div>
  </div>
      </>
    );
  
}






export default Cont1;

