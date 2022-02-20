import React from 'react';
import { Link } from 'react-router-dom';

function Error404() {
    return (
        <div className='errorPage'>
            <div>
                <h1>404</h1>
                <p>Page not found</p>
                <Link to='/'>Go back to the homepage</Link>
            </div>
        </div>
    );
}

export default Error404;