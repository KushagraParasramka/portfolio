import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Back from '../utils/Back.jsx';

function Displaybody() {
    const location = useLocation();
    const fileName = location.state?.projectId || '';
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (fileName) {
            import(`../assets/${fileName}.json`)
                .then((module) => {
                    setData(module.default);
                })
                .catch((err) => {
                    console.error('Error loading JSON:', err);
                    setError(err.message);
                });
        }
    }, [fileName]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>NOT UPDATED YET</div>;
    }

    return (
        <div className='body-container'>
            <Back />
            <div className='image-box'>
                <img src={`../src/assets/${data.projectImage}`} style={{ width: "100%", height: "126px", objectFit: "cover" }} alt="image..." />
            </div>
            <div className="headline">{data.projectName}</div>
            <div className='tehstack'>
                <span className='heading-techstack'>techstack :</span>
                {data.techstack}
            </div>
            <div className='code-links'>
            <a href={data.codeLink} target="_blank" rel="noopener noreferrer">
                code
            </a>
            <a href={data.liveLink} target="_blank" rel="noopener noreferrer">
                live
            </a>
            <div className='project-content'>
                {data.body.map((elem) => {
                    if(elem.startsWith("https")) {
                        return (
                            <div className='image-box'>
                                <img src={elem} style={{ width: "100%", height: "auto", objectFit: "cover" }} alt="image..." />
                            </div>
                        )
                    }
                    return (
                        <div>{elem}</div>
                    )
                })}
            </div>
            </div>

        </div>
    );
}

export default Displaybody;
