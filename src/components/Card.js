import React from 'react'
import linkImage from '../images/link.png'

function Card(props) {
  return (
    <div className='col-lg-3 rounded m-2 p-3 card-div ' id='card-div' style={{background : props.color, height: '100px', boxShadow: `0 2px 5px 0 ${props.color}`}}>
      <div className='card-body d-flex'>
        <div className=''>
          <p className='card-text'>{props.title}</p>
          <a href="" className='text-dark card-link'>Visit Site</a>
        </div>
        <a href="" className='' id='cardHref'><img src = {linkImage} alt=""  style= {{width: '15px'}} id='cardHref'/></a>
      </div>
    </div>
//     <div className="card col-lg-3 rounded m-2" style={{width: "15rem;"}}>
//         <img src= {image} className="card-img-top " alt="Image"/>
//         {/* <div className="card-body">
//             <h5 className="card-title">{title}</h5>
//             <p className="card-text">{details}</p>
//             <a href="#" className="btn btn-primary">Visit Site</a>
//     </div> */}
// </div>
  )
}

export default Card