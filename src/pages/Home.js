import React from 'react'
import  Navbar from '../components/Navbar'

function Home() {
  return (
    <section id='main' className=''>
       <Navbar/>
       <div className='d-lg-flex mt-2'>
           <div className='w-50'>
            <img src="" alt="background image" />
           </div>
           <div className='w-50 p-3 rounded' id='descript-block'>
              <p className='lead text-center'> <b>Deborah Eniola Opakunle</b></p>
              <p>Website Developer</p>
              <p>I am Fullstack developer. I love building eautiful, functional and responsive websites. I am proficient in HTML, CSS, Bootstrap, SASS, Javascript, React.js, Angular.js, Node.js , Git and Github. I am a fast learner and I love learning new things </p>
           </div>
       </div>
    </section>
  )
}

export default Home