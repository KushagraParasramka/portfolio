import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Displaybody</h1>
            <div>{data.projectName}</div>
        </div>
    );
}

export default Displaybody;
