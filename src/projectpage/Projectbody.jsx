import React from 'react'
import projectsList from "../assets/projectsList.json"
import Back from "../utils/Back.jsx"
import Name from '../utils/Name.jsx'
import Projectbox from '../utils/Projectbox.jsx'
import "./Projectbody.css"

function Projectbody() {
  return (
    <>
    <Back />
    <Name
    secondName="MY_PROJECTS"
    space2="1.98rem"
    />
    <div className='body-container'>
        {projectsList.map((elem) => (
            <Projectbox key={elem.projectId}
            {...elem}
            />
        ))}
    </div>
    </>
  )
}

export default Projectbody
