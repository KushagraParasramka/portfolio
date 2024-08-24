import React from 'react'
import { useNavigate } from 'react-router-dom'

function Back() {
    const navigate = useNavigate();
  return (
    <div className='back' onClick={() => navigate("/")}>back</div>
  )
}

export default Back
