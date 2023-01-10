import React from 'react'
import Display from '../components/Display'
import Navbar from '../components/Navbar'
import FooterDisplay from '../components/FooterDisplay'
import phoneNoImage from '../images/phone.png'
import message from '../images/Message.png'
import homeAddress from '../images/Home Address.png'
import twitterImage from '../images/Twitter.png'
import linkedInImage from '../images/LinkedIn.png'
import gitHubImage from '../images/GitHub.png'

function Contact() {
  return (
    <section className='container-fluid p-0'>
      <Navbar/>
      <div className='row'>
        <Display
            image = {message} 
            title = {'Email'}
            value = {'opakunleeniolail2019@gmail.com'}
          />
          <Display
            image = {phoneNoImage}
            title = {'Phone Number'}
            value = {'08059426668'}
          />
          <Display
            image = {homeAddress}
            title = {'Address'}
            value = {'Ogbomoso, Oyo state'}
        />
        </div>
        <footer className='d-flex py-3'>
          <FooterDisplay
            image = {twitterImage}
          />
          <FooterDisplay
            image = {gitHubImage}
          />
          <FooterDisplay
            image = {linkedInImage}
          />
        </footer>
    </section>
  )
}

export default Contact