import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {


    return (
        <div>
            <h1 className='text-center py-3'>Hunt Programmers</h1>
            <nav className='bg-primary'>
                <ul>
                    <Link to='/'>
                        <li className='text-white p-2 mx-2'>Home</li>
                    </Link>
                    <Link to='/review'>
                        <li className='text-white p-2 mx-2'>Review</li>
                    </Link>
                    <Link to='/contact'>
                        <li className='text-white p-2 mx-2'>Contact</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;