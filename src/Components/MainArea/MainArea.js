import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/data.json';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import CartArea from '../CartArea/CartArea';
import ShowCase from '../ShowCase/ShowCase';

const MainArea = () => {
    const [employees, setemployees] = useState([]);
    const [cart, setcart] = useState([]);

    useEffect(() => {
        setemployees(data);
    }, [])

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const emIDs = Object.keys(savedCart);
        emIDs.map(emID => {
            const employee = data.find(pd => pd.id === parseFloat(emID));
            employee.hours = savedCart[emID];
            return employee;
        })
        setcart(savedCart);
    }, [])

    const handleAddEmployee = (employee) => {
        let time = 1;
        const sameShit = employees.find(emp => emp.id === employee.id);
        if (sameShit) {
            time = sameShit.hours + 1;
            sameShit.hours = time;
            addToDatabaseCart(employee.id, time);
        } else {
            sameShit.hours = 1;
            addToDatabaseCart(employee.id, time);
        }

        const man = getDatabaseCart();
        setcart(man);
    }

    const handleDecrease = employee => {
        let time = employee.hours;
        const sameShit = employees.find(emp => emp.id === employee.id);
        time = sameShit.hours - 1;
        sameShit.hours = time;
        addToDatabaseCart(employee.id, time);

        const savedCart = getDatabaseCart();
        setcart(savedCart);
    }

    const removeEmployee = employee => {
        const toRemove = employees.find(emp => emp.id === employee.id);
        removeFromDatabaseCart(toRemove.id);
        toRemove.hours = 0;
        const savedCart = getDatabaseCart();
        setcart(savedCart);
    }
    return (
        <div className='row'>
            <div className="col-md-8 d-flex flex-wrap justify-content-around align-items-center">
                {
                    employees.map(employee => <ShowCase key={employee.id} employee={employee} showAllButton={true} handleAddEmployee={handleAddEmployee} handleDecrease={handleDecrease} removeEmployee={removeEmployee} showRemoveButton={false}></ShowCase>)
                }
            </div>
            <div className="col-md-4">
                <CartArea cart={cart} showReviewButton={true} showPlaceOrder={false}>
                    <Link to='/review'>< button className="btn btn-primary btn-sm">Review section</button></Link>
                </CartArea>
            </div>
        </div>
    );
};

export default MainArea;