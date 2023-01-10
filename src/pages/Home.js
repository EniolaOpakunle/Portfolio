import React from 'react'
import  Navbar from '../components/Navbar'

function Home() {
  return (
    <section>
       <Navbar/>
       <div className='d-flex'>
           <div>
            <img src="" alt="" />
           </div>
           <div>
              <p className='lead'>Deborah Eniola Opakunle</p>
              <p>FullStack Developer</p>
              <p>I am Fullstack developer. I love building eautiful, functional and responsive websites. I am proficient in HTML, CSS, Bootstrap, SASS, Javascript, React.js, Angular.js, Node.js , Git and Github. I am a fast learner and I love learning new things </p>
           </div>
       </div>
    </section>
  )
}

export default Home