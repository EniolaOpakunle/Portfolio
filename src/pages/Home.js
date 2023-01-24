import React from 'react'
import  Navbar from '../components/Navbar'
import profilePics from '../images/A.jpg'

function Home() {
  return (
    <section id='main' className=''>
       <Navbar/>
       <div className='row mt-2' id='displayDiv'>
           <div className='col-lg-5 profilePicture'>
            <img src alt="background image" style={{width: '200px'}}/>
           </div>
           <div className='col-lg-5 p-3 rounded' id='descript-block'>
              <p className='lead fs-2  fw-bold ' id='name'>Deborah Eniola Opakunle</p>
              <p className='text'>Frontend Developer</p>
              <p className='text'>I am Frontend developer. I love building beautiful, functional and responsive websites. I am proficient in HTML, CSS, Bootstrap, SASS, Javascript, React.js, Angular.js, Node.js , Git and Github. I am a fast learner and I love learning new things </p>
           </div>
       </div>
    </section>
  )
}

export default Home