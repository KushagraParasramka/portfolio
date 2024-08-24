import React, {useState} from 'react'
import Name from '../utils/Name.jsx'
import LinkRender from '../utils/LinkRender.jsx'
import Back from '../utils/Back.jsx';
import "./Aboutbody.css"

function Aboutbody() {
    const [links, setLinks] = useState({
        "my RESUME" : "/",
        "to LINKEDIN" : "https://www.linkedin.com/in/kushagra13019/",
        "to GITHUB" : "https://github.com/KushagraParasramka",
    });

    const [fullName, setFullname] = useState({
        firstName : "KUSHAGRA",
        secondName : "PARASRAMKA",
        space1: "3.25rem",
        space2: "2.2rem"
    })
  return (
    <>
        <Back />
        <Name
        firstName={fullName.firstName}
        secondName={fullName.secondName}
        space1={fullName.space1}
        space2={fullName.space2}
        />
        <div className='body-container'>
            <div className='semi-headline'>A dedicated software developer based in Dehradun, India.</div>
            <div className='about-detail'>As a software developer with a strong foundation in the MERN stack, I excel in building full-stack web applications using MongoDB, Express.js, React, and Node.js. My expertise extends to machine learning, where I leverage data processing techniques to develop intelligent systems and applications.
            </div>
            <div className='about-detail'>
                <p className='techstack-heading'>techstack :</p> Node.js, React.js, Python, SQL, MongoDB, C++, HTML5, CSS3
            </div>
            <LinkRender
            links={links}
            />
        </div>
    </>
  )
}

export default Aboutbody;
