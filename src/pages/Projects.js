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
    <section className='container-fluid p-0 position-relative'id='projects' style={{animationFillMode: 'both'}}>
      {/* <Navbar/> */}
      <div className='row m-2'>
        <Card className = ''
          image = {foodIncImage}
          title = {'FoodInc'} 
          color = {'rgb(204, 153, 102)'} 
          details = {'A React.js  food application that allows a user to get a food timetable, get food recipes. In the premimum versio, you can get food according to your health version . The premimum is unlocked once with $50 '}
        />
        <Card className = 'm-2'
          image = {loveImage}
          title = {'Love calculator'} 
          color = {'pink'}
          link = {''}
          details = {'This is a Node.js application that help to check love compartibility using a mathematical function. It allows you to create your own account and a history of names you have matchmaked'}
        />
        <Card
          image = {quizAppImage}
          title = {'CBT Engine'}
          color = {'rgb(153, 204, 255)'}
          details = {'A React.js CBT engine that allows user to set question and take test. At the end of the test, the result is displayed. '}
        />
        <Card
          image={numberImage}
          title = {'Random Number Generator'}
          color = {'rgb(204, 51, 255)'}
          details = {'It generates a numm'}
        />
        <Card
          image={calculationImage}
          color = {'brown'}
          title = {'Calculation table'}
          details = {'A calcualtion table any specified operation '}
        />
        <Card
          image={stopWatchImage}
          color = {'yellow'}
          title = {'Stop Watch'}
          details = {'a stopwatch'}
        />
      </div>
    </section>
    </Zoom>
  )
}

export default Projects