import React from 'react';
import CartArea from '../CartArea/CartArea';
import EmployeesArea from '../EmployeesArea/EmployeesArea';

const MainArea = () => {
    return (
        <div className='d-flex'>
            <EmployeesArea></EmployeesArea>
            <CartArea></CartArea>
        </div>
    );
};

export default MainArea;