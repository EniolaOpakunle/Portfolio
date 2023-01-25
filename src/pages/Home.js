import React from 'react'
import  Navbar from '../components/Navbar'
import profilePics from '../images/A.jpg'
function Home() {
  return (
    <section id='main'className='container-fluid'>
       <Navbar className=''/>
       <div className='row mt-2' id='displayDiv'>
           <div className='col-lg-3 profilePicture rounded-circle text-center'>
            <div className=''>
              <img src alt="background image"   style={{width: '200px'}}/>
            </div>
           </div>
           <div className='col-lg-7 p-3' id='descript-block'>
              <p className='' id='name'>Eniola Opakunle </p>
              <p id='subname'>Software Developer</p>
              <p className='text text-dark'>Frontend Developer</p>
              {/* <p className='text'>I am Frontend developer. I love building beautiful, functional and responsive websites. I am proficient in HTML, CSS, Bootstrap, SASS, Javascript, React.js, Angular.js, Node.js , Git and Github. I am a fast learner and I love learning new things </p> */}
           </div>
       </div>
       <div className='d-flex main-bottom'>
        <div className='w-50 main-bottom-div'>
          <p className='div-head'>Phone</p>
          <p className='div-value'>234-80-5942-6668</p>
        </div>
        <div className='w-50'>
          <p className='div-head'>Drop your Message</p>
          <p className='div-value'>opakunleeniolail2019@gmail.com</p>
        </div>
       </div>
    </section>
  )
}

export default Home