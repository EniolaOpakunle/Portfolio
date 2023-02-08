import React from 'react'
import Card from '../components/Card'
import Zoom from 'react-reveal/Reveal'
import Navbar from '../components/Navbar'

function Projects() {
  return (
    // <Zoom>
    <section className='w-75 m-auto'id='projects' style={{animationFillMode: 'both'}}>
      <div>
        <p className='name my-5'>My Works</p>
        <div className='row project-div'>
          <div className='col-lg-6 my-4'>
            <Card
            image = 'https://img.freepik.com/free-psd/silver-gold-christmas-themed-stationeries_53876-73948.jpg?size=626&ext=jpg&ga=GA1.2.1980408522.1612558313&semt=sph'
            title = 'React Notepad'
            />
          </div>
          <div className='col-lg-6  my-4'>
            <Card
            image = 'https://img.freepik.com/premium-photo/weather-forecast-concept-smartphone-displays-weather-forecast-application-widget-symbols-3d-illustration_68971-931.jpg?size=626&ext=jpg&ga=GA1.1.1980408522.1612558313&semt=ais'
            title = 'React Weather App'
            />
          </div>
          <div className='col-lg-6 my-4'>
            <Card
            image = 'https://img.freepik.com/free-photo/heart-shaped-box-with-love-writing-amidst-letters_23-2147744662.jpg?size=626&ext=jpg&ga=GA1.2.1980408522.1612558313&semt=ais'
            title = 'Love Calculator App'
            />
          </div> 
          <div className='col-lg-6 my-4'>
            <Card
            image = 'https://img.freepik.com/free-vector/online-shopping-concept-illustration-with-words-people_613284-2431.jpg?size=626&ext=jpg&ga=GA1.1.1980408522.1612558313&semt=ais'
            title = 'React E-commerce Website'
            />
          </div>
        </div>
        <div id='btn-div'>
          <a href="" id='btn-href'>
            <button className='px-5 py-3 rounded-pill m-auto' id='moreWork-btn' >More Work</button>
          </a>
        </div>
      </div>

    </section>
    // </Zoom>
  )
}

export default Projects