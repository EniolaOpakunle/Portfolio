import React from 'react'
import Display from '../components/Display'
import Navbar from '../components/Navbar'
import FooterDisplay from '../components/FooterDisplay'
import twitterImage from '../images/Twitter.png'
import linkedInImage from '../images/LinkedIn.png'
import gitHubImage from '../images/GitHub.png'
import facebookImage from '../images/Facebook.png'

function Contact() {
  return (
    <section id='contact'>
      <div className='w-75 m-auto sub-div'>
        <div className='row c-flex'>
          <div className=' col-mx-5 col-lg-6 col-sm-10 div-1'>
            <p className='contact-name'>Ennyhub</p>
            <p className='contact-text'>Building amazing and well functioning website that captivates the heart </p>
            <div className='d-flex social'>
              <p className='image-cont'>
                <a href=""><img src={twitterImage} className='social-image'/></a>
              </p>
              <p className='image-cont mx-2'>
                <a href=""><img src={gitHubImage} className='social-image'/></a>
              </p >
              <p className='image-cont mx-2'>
                <a href=""><img src={facebookImage} className='social-image' /></a>
              </p>
              <p className='image-cont mx-2'>
                <a href=""><img src={linkedInImage} className= 'social-image' /></a>
              </p>
            </div>
          </div>
          <div className='col-lg-6 div-2 d-flex'>
            <button className='download-btn rounded-pill py-2 px-4 mx-4'>
              Download CV
            </button>
            <button className='talk-btn rounded-pill px-4 py-2'>
              Let's Talk
            </button>
          </div>
        </div>
        <div className='row footer'>
          <div className='col-lg-6 copyright'>
            <p>Copyright @ 2023 All right reserved. This website is made by Ennyhub</p>
          </div>
          <div className='col-lg-6 '>
            <nav>
              
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact