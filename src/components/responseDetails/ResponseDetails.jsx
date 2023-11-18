import React from 'react'

function ResponseDetails({imgUrl, jsonResponse}) {
  return (
    <div>
      <h1><b>Computer Vision Analysis</b></h1>
      <img src={imgUrl}/>
      <p>{jsonResponse}</p>
    </div>
  )
}

export default ResponseDetails;