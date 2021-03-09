import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/data.json';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import CartArea from '../CartArea/CartArea';
import ShowCase from '../ShowCase/ShowCase';

const ReviewArea = () => {
    const [employees, setemployees] = useState([]);
    const [cart, setcart] = useState([]);
    const [showOrderMsg, setshowOrderMsg] = useState(false);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const emIDs = Object.keys(savedCart);
        const newEms = emIDs.map(emID => {
            const employee = data.find(pd => pd.id === parseFloat(emID));
            employee.hours = savedCart[emID];
            return employee;
        })
        setemployees(newEms);

        const man = getDatabaseCart();
        setcart(man);
    }, [])

    useEffect(() => {
        const savedCart = getDatabaseCart();
        setcart(savedCart);
    }, [])

    const removeEmployee = employee => {
        const toRemove = employees.find(emp => emp.id === employee.id);
        removeFromDatabaseCart(toRemove.id);
        toRemove.hours = 0;
        const savedCart = getDatabaseCart();
        const emIDs = Object.keys(savedCart);
        const newEms = emIDs.map(emID => {
            const employee = data.find(pd => pd.id === parseFloat(emID));
            employee.hours = savedCart[emID];
            return employee;
        })
        setemployees(newEms);

        const man = getDatabaseCart();
        setcart(man);
    }

    const orderPlaced = () => {
        processOrder();
        const savedCart = getDatabaseCart();
        const emIDs = Object.keys(savedCart);
        const newEms = emIDs.map(emID => {
            const employee = data.find(pd => pd.id === parseFloat(emID));
            employee.hours = savedCart[emID];
            return employee;
        })
        setemployees(newEms);

        const man = getDatabaseCart();
        setcart(man);
        setshowOrderMsg(true);
    }
    return (
        <div className='container'>
            <h2 className='text-center py-3'>Review Section</h2>
            <Link to='/'>
                <button className="btn btn-success btn-sm">&larr; Go to home</button>
            </Link>
            <div className='row'>
                <div className="col-md-8 d-flex flex-wrap justify-content-around align-items-center">
                    {
                        employees.map(employee => <ShowCase key={employee.id} employee={employee} removeEmployee={removeEmployee} showRemoveButton={true}></ShowCase>)
                    }
                    {
                        showOrderMsg && <h3 className='text-success text-center'>Congratulations!!!<br />Your Order has been placed!</h3>
                    }
                </div>
                <div className="col-md-4">
                    <CartArea cart={cart} showReviewButton={false} showPlaceOrder={true} orderPlaced={orderPlaced}>
                        <button className="btn btn-success" onClick={orderPlaced}>Place order</button>
                    </CartArea>
                </div>
            </div>
        </div>
    );
};

export default ReviewArea;