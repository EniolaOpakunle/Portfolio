import React from 'react'

function Card({image ,title , details}) {
  return (
    <div className="card col-lg-3 rounded m-2" style={{width: "15rem;"}}>
        <img src= {image} className="card-img-top " alt="Image"/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{details}</p>
            <a href="#" className="btn btn-primary">Visit Site</a>
    </div>
</div>
  )
}

export default Card