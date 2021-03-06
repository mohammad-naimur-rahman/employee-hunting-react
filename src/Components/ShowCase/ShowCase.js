import React, { useState } from 'react';
import './ShowCase.css';
import { addToDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';

const ShowCase = (props) => {
    const { name, salary, img, age, country, id } = props.employee;
    const [hour, sethour] = useState(0);
    const increaseHour = () => {
        sethour(hour + 1);
        console.log(hour);
    }
    const decreaseHour = () => {
        sethour(hour - 1);
        console.log(hour);
    }
    return (
        <div className='shadow p-2 m-3 employee'>
            <img className='employee-img' src={img} alt="" />
            <h5>{name}</h5>
            <p><b>Country: </b>{country}</p>
            <p><b>Age: </b>{age}</p>
            <p><b>Salary:</b> ${salary} / hour</p>
            {
                hour > 0 && <p>Hiring for <b>{hour}</b> {hour > 1 ? `hours` : `hour`}</p>
            }
            {
                hour > 0 && <p>Hiring for <b>${hour * salary}</b></p>
            }
            {
                hour > 0 || <button className='btn btn-success btn-sm mx-2' onClick={
                    () => {
                        increaseHour();
                        addToDatabaseCart(id, hour);
                    }
                }>Add Employee</button>
            }
            {
                hour > 0 && <button className="btn btn-primary btn-sm mx-2" onClick={
                    () => {
                        increaseHour();
                        addToDatabaseCart(id, hour);
                    }
                }>Add hour</button>
            }
            {
                hour > 1 && <button className='btn btn-warning btn-sm' onClick={
                    () => {
                        decreaseHour();
                        addToDatabaseCart(id, hour);
                    }
                }>Decreae hour</button>
            }
            {
                hour === 1 && <button className='btn btn-danger btn-sm' onClick={
                    () => {
                        decreaseHour();
                        removeFromDatabaseCart(id)
                    }
                }>Remove Employee</button>
            }
        </div>
    );
};

export default ShowCase;