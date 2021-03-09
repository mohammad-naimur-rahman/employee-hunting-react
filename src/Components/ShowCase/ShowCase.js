import React from 'react';
import './ShowCase.css';

const ShowCase = (props) => {
    const { employee, handleAddEmployee, handleDecrease, removeEmployee, showAllButton, showRemoveButton } = props;
    const { name, salary, img, age, country, hours } = employee;


    return (
        <div className='shadow py-3 px-5 m-3 employee'>
            <img className='employee-img' src={img} alt="" />
            <h5>{name}</h5>
            <p><b>Country: </b>{country}</p>
            <p><b>Age: </b>{age}</p>
            <p><b>Salary:</b> ${salary} / hour</p>
            {
                showAllButton && hours > 0 && <p>Hiring for <b>{hours} </b>{hours > 1 ? 'hours' : 'hour'} at <b>$ {hours * salary}</b></p>
            }
            {
                showAllButton && (hours > 0 || <p>&nbsp;</p>)
            }

            {
                showAllButton && hours === 0 && < button className='btn btn-success btn-sm m-1' onClick={
                    () => {
                        handleAddEmployee(employee);
                    }
                }>Add Employee</button>
            }
            {
                showAllButton && hours > 0 && < button className='btn btn-primary btn-sm m-1' onClick={
                    () => {
                        handleAddEmployee(employee);
                    }
                }>Add hours</button>
            }
            {
                showAllButton && hours > 1 && <button className='btn btn-warning btn-sm m-1' onClick={
                    () => {
                        handleDecrease(employee);
                    }
                }>Decrese hour</button>
            }
            {
                showAllButton && hours === 1 && <button className='btn btn-danger btn-sm m-1' onClick={
                    () => {
                        removeEmployee(employee);
                    }
                }>Remove</button>
            }
            {
                showRemoveButton && <button className='btn btn-danger btn-sm m-1' onClick={
                    () => {
                        removeEmployee(employee);
                    }
                }>Remove</button>
            }
        </div>
    );
};

export default ShowCase;