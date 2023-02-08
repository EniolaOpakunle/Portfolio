import React from 'react'
import linkImage from '../images/link.png'
import githubImage from '../images/GitHub.png'

function Card(props) {
  return (
    <section>
      <div className='card-div'  >
        <p className='card-img'>
          <img src={props.image} alt="Image1" className='w-100 w-image'/>
        </p>
        <div className='card-body d-flex'>
          <div>
            <p className='card-title'>{props.title}</p>
          </div>
          <div>
            <a href="" className='image-cont mx-2'>
              <img src={linkImage} alt="" style={{width: '20px'}} />
            </a>
            <a href="https://github.com/EniolaOpakunle" className='image-cont'>
              <img src= {githubImage} alt="" style={{width: '20px'}} />
              {/* <p className='image-cont-text'>visit site</p> */}
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Card