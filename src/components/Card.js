import React from 'react'

function Card(props) {
  return (
    <div className='col-lg-3 rounded m-2 p-3 shadow' id='card-div' style={{background : props.color, height: '100px'}}>
      <div className='card-body'>
        <div>
          <p className='card-text'>{props.title}</p>
        </div>
        <a href=""><img src="" alt="" /></a>
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