import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <h2>Contact section</h2>
            <Link to='/'>
                <button className="btn btn-success btn-sm">&larr; Go to home</button>
            </Link>
        </div>
    );
};

export default Contact;