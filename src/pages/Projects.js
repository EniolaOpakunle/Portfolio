import React from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import foodIncImage from '../images/background2.jpg'
import loveImage from '../images/love.jpg'
import quizAppImage from '../images/Quiz-app.png'
import calculationImage from '../images/calculation.jpg'
import stopWatchImage from '../images/stopWatch.png'
import numberImage from '../images/number.jpg'

function Projects() {
  return (
    <section className='container-fluid p-0'>
      <Navbar/>
      <div className='row m-2'>
        <Card className = ''
          image = {foodIncImage}
          title = {'FoodInc'}  
          details = {'A React.js  food application that allows a user to get a food timetable, get food recipes. In the premimum versio, you can get food according to your health version . The premimum is unlocked once with $50 '}
        />
        <Card className = 'm-2'
          image = {loveImage}
          title = {'Love calculator'} 
          details = {'This is a Node.js application that help to check love compartibility using a mathematical function. It allows you to create your own account and a history of names you have matchmaked'}
        />
        <Card
          image = {quizAppImage}
          title = {'CBT Engine'}
          details = {'A React.js CBT engine that allows user to set question and take test. At the end of the test, the result is displayed. '}
        />
        <Card
          image={numberImage}
          title = {'Random Number Generator'}
          details = {'It generates a numm'}
        />
        <Card
          image={calculationImage}
          title = {'Calculation table'}
          details = {'A calcualtion table any specified operation '}
        />
        <Card
          image={stopWatchImage}
          title = {'Stop Watch'}
          details = {'a stopwatch'}
        />
      </div>
    </section>
  )
}

export default Projects