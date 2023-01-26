import React from 'react'
import Card from '../components/Card'
import Zoom from 'react-reveal/Reveal'
import Navbar from '../components/Navbar'
import foodIncImage from '../images/background2.jpg'
import loveImage from '../images/love.jpg'
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
            <img src={loveImage} alt="" className='w-100 w-image'/>
          </div>
          <div className='col-lg-6  my-4'>
            <img src={foodIncImage} alt="" className='w-100 w-image' />
          </div>
          <div className='col-lg-6 my-4'>
            <img src={stopWatchImage} alt="" className='w-100 w-image'/>
          </div> 
          <div className='col-lg-6 my-4'>
            <img src={quizAppImage} alt="" className='w-100 w-image' />
          </div>
        </div>
      </div>

    </section>
    </Zoom>
  )
}

export default Projects