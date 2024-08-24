import React, { useState } from 'react';
import Name from "../utils/Name.jsx";
import LinkRender from '../utils/LinkRender.jsx';
import "./Homebody.css"
function Homebody() {
    const [links, setLinks] = useState({
        "my PROJECTS" : "/projects",
        "about ME" : "/about",
        "let's TALK" : "/talk",
    });
    const [fullName, setFullname] = useState({
        firstName : "KUSHAGRA",
        secondName : "PARASRAMKA",
        space1: "3.25rem",
        space2: "2.2rem"
    })



    return (
        <>
        <div className='headline'>a <span className='highlight1'>FULLSTACK DEVELOPER</span> designing his life</div>
        <Name
        firstName={fullName.firstName}
        secondName={fullName.secondName}
        space1={fullName.space1}
        space2={fullName.space2}
        />
        <div className='body-container'>
            <LinkRender
            links={links}
            />
        </div>
        </>
    );
}

export default Homebody;
