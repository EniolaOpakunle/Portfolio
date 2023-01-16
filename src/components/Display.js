import React from 'react'

function Display({image , title, value}) {
  return (
    <div className='w-75 rounded border-opacity-50 d-flex my-4 p-2  contact' >
        <img src= {image} alt="" style={{width : "2rem" , height: "2rem"}} className = 'mt-3 mx-3' />
            <div style={{height : "5rem"}} className = 'displayDiv mt-0'>
                <p className='mt-0'>{title}</p>
                <p className='mt-0'>{value}</p>
            </div>
    </div>
  )
}

export default Display