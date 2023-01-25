import React from 'react'

function Profile() {
  return (
    <section className='w-75' id='about'>
      <p className='name' id='profile-head'>About me</p>
      <div className='d-lg-flex'>
        <div className='w-50 w-sm-100 mx-1'>
          <p>I am Frontend developer. I love building beautiful, functional and responsive websites. I am proficient in HTML, CSS, Bootstrap, SASS, Javascript, React.js, Angular.js, Node.js , Git and Github. I am a fast learner and I love learning new things</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, delectus quasi? Totam eligendi animi unde beatae, iure explicabo eaque error numquam. Tempore nisi ullam libero aperiam ut inventore praesentium consectetur!</p>
          <p className='profile-highlight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, iusto ipsa explicabo distinctio aliquid assumenda inventore facilis a doloribus maxime. Recusandae, amet dolor? Quae alias eaque reprehenderit quam aliquam porro.</p>
        </div>
        <div className='w-50'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, deserunt culpa temporibus tenetur veritatis consequatur minima ratione aliquid, qui laboriosam ipsa. Quibusdam voluptatem rem, minima id cupiditate totam ipsa optio?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, atque nobis voluptatibus blanditiis sapiente quod inventore error quis soluta iste porro! Laborum eos quo reiciendis unde quaerat placeat eveniet quod.</p>
        </div>
      </div>
    </section>
  )
}

export default Profile