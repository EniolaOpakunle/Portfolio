import React from 'react'
import { Link } from 'react-router-dom'

function FooterDisplay({image}) {
  return (
    <div>
        <a href=""><img src= {image} alt="" style={{width : "2rem" , height: "2rem"}}  className = 'mx-3'/></a>
    </div>
  )
}

export default FooterDisplay