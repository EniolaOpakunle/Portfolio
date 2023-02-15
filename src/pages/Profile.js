import React from 'react'

function Profile() {
  return (
    <section className='w-75' id='about'>
      <p className='name' id='profile-head'>About me</p>
      <div className='d-lg-flex g-div'>
        <div className='w-50 profile mx-1'>
          <p>I am Frontend developer. I love building beautiful, functional and responsive websites. I am proficient in HTML, CSS, Bootstrap, SASS, Javascript, React.js, Angular.js, Node.js , Git and Github. I am a fast learner and I love learning new things</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, delectus quasi? Totam eligendi animi unde beatae, iure explicabo eaque error numquam. Tempore nisi ullam libero aperiam ut inventore praesentium consectetur!</p>
          <p className='profile-highlight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, iusto ipsa explicabo distinctio aliquid assumenda inventore facilis a doloribus maxime. Recusandae, amet dolor? Quae alias eaque reprehenderit quam aliquam porro.</p>
        </div>
        <div className='w-50 mx-2 skill-div'>
          <div className='my-3'>
            <div className='d-flex justify-content-between'>
              <p className='skill'>Frontend Web Development</p>
              <p>80%</p>
            </div>
            <div className='scale-div w-100 rounded-pill'>
              <p className='percentage frontend rounded-pill'></p>
            </div>
          </div>
          <div className='my-3'>
            <div className='d-flex justify-content-between'>
              <p className='skill'>Word Press</p>
              <p>80%</p>
            </div>
            <div className='scale-div w-100 rounded-pill'>
              <p className='percentage word-press rounded-pill'></p>
            </div>
          </div>
          <div className='my-3'>
            <div className='d-flex justify-content-between'>
              <p className='skill'>Frontend Web Development</p>
              <p>80%</p>
            </div>
            <div className='scale-div w-100 rounded-pill'>
              <p className='percentage backend rounded-pill'></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile