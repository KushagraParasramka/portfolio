import React from 'react';
import { Link } from 'react-router-dom';

function LinkRender({ links }) {
    return (
        <>
            {Object.keys(links).map((key) => {
                const url = links[key];
                const isExternal = url.startsWith('http');

                return (
                    <div
                        key={key}
                        className='link-item'
                    >
                        {isExternal ? (
                            <a href={url} target="_blank" rel="noopener noreferrer">
                                {key}
                            </a>
                        ) : (
                            <Link to={url}>
                                {key}
                            </Link>
                        )}
                    </div>
                );
            })}
        </>
    );
}

export default LinkRender;
