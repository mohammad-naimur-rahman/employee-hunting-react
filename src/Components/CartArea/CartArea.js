import React from 'react';
import data from '../../data/data.json';

const CartArea = ({ cart, children }) => {
    const selected = Object.keys(cart);
    const selectedShit = data.filter(em => {
        const found = selected.find(id => parseFloat(id) === em.id);
        return found;
    });

    const totalSalary = selectedShit.reduce((total, shit) => total + (shit.salary * shit.hours), 0);
    return (
        <div className="w-100 p-3">
            <h5 className='border-bottom border-primary'>Cart area</h5>
            <p><b>Total employees: </b>{selected.length}</p>

            <p><b>Total salary: </b>$ {totalSalary} </p>

            {
                selected.length > 0 &&
                <>
                    <h5>Employees:</h5>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Salary</th>
                                <th scope="col">Hours</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                selectedShit.map(shit => {
                                    const tr = <tr key={shit.id}>
                                        <td>{shit.name}</td>
                                        <td>$ {shit.salary * shit.hours}</td>
                                        <td>{shit.hours}</td>
                                    </tr>
                                    return tr;
                                })
                            }
                        </tbody>
                    </table>
                </>
            }
            {
                children
            }
        </div >
    );
};

export default CartArea;