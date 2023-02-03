import React from 'react'
import Card from '../components/Card'
import Zoom from 'react-reveal/Reveal'
import Navbar from '../components/Navbar'
import foodIncImage from '../images/background2.jpg'
import loveImage from '../images/notepad'
import quizAppImage from '../images/Quiz-app.png'
import calculationImage from '../images/calculation.jpg'
import stopWatchImage from '../images/stopWatch.png'
import numberImage from '../images/number.jpg'

function Projects() {
  return (
    <Zoom>
    <section className='container-fluid w-75'id='projects' style={{animationFillMode: 'both'}}>
      <div>
        <p className='name my-5'>My Works</p>
        <div className='row project-div'>
          <div className='col-lg-6 my-4'>
            <img src= 'https://img.freepik.com/free-psd/silver-gold-christmas-themed-stationeries_53876-73948.jpg?size=626&ext=jpg&ga=GA1.2.1980408522.1612558313&semt=sph' alt="" className='w-100 w-image'/>
          </div>
          <div className='col-lg-6  my-4'>
            <img src= 'https://img.freepik.com/premium-photo/weather-forecast-concept-smartphone-displays-weather-forecast-application-widget-symbols-3d-illustration_68971-931.jpg?size=626&ext=jpg&ga=GA1.1.1980408522.1612558313&semt=ais' alt="" className='w-100 w-image' />
          </div>
          <div className='col-lg-6 my-4'>
            <img src= 'https://img.freepik.com/free-photo/heart-shaped-box-with-love-writing-amidst-letters_23-2147744662.jpg?size=626&ext=jpg&ga=GA1.2.1980408522.1612558313&semt=ais' alt="" className='w-100 w-image'/>
          </div> 
          <div className='col-lg-6 my-4'>
            <img src= 'https://img.freepik.com/free-vector/online-shopping-concept-illustration-with-words-people_613284-2431.jpg?size=626&ext=jpg&ga=GA1.1.1980408522.1612558313&semt=ais' alt="" className='w-100 w-image' />
          </div>
        </div>
      </div>

    </section>
    </Zoom>
  )
}

export default Projects