import React from 'react'
import { Link } from 'react-router-dom'

function Projectbox({projectId, projectName, projectImage}) {
  return (
    <div className='project-box'>
        <div className='image-box'>
        <img src={`./src/assets/${projectImage}`} style={{ width: "100%", height: "126px", objectFit: "cover" }} alt="image..." />
        </div>
        <div className='detail-box'>{projectName}</div>
        <Link className='read-more' to={`/project/${projectId}`} state={{ projectId }}>read more</Link>
    </div>
  )
}

export default Projectbox
