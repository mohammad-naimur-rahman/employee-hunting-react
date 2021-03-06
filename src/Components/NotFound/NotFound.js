import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-danger text-center py-3'>
            <h2>The page you are searching for is not found</h2>
            <h4>Error 404, not found</h4>
            <Link to='/'>
                <button className="btn btn-success my-2">Go to home</button>
            </Link>
        </div>
    );
};

export default NotFound;