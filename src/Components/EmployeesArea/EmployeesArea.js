
import React, { useState, useEffect } from 'react';
import ShowCase from '../ShowCase/ShowCase';
import data from '../../data/data.json';

const EmployeesArea = () => {
    const [employees, setemployees] = useState([]);

    useEffect(() => {
        setemployees(data);
    }, [])

    return (
        <div className="w-75 d-flex flex-wrap justify-content-around align-items-center">
            {
                employees.map(employee => <ShowCase key={employee.id} employee={employee}></ShowCase>)
            }
        </div>
    );
};

export default EmployeesArea;