import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const EmployeeData = () => {
  const [employees, setEmployees] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const result = await axios.get('http://localhost:8080/employees');
    setEmployees(result.data);
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:8080/employee/${id}`);
    loadEmployees();
  };

  return (
    <div className='container'>
      <h1 className='my-2 text-center'>Employee Data</h1>
      <Table striped hover className='mt-5 mx-2 shadow-lg rounded text-center'>
        <thead className='border-bottom border-dark'>
          <tr>
            <th>S.N</th>
            <th>Employee No</th>
            <th>Full Name</th>
            <th>Application Date From</th>
            <th>Application Date To</th>
            <th>Approval Month From</th>
            <th>Approval Month To</th>
            <th>Payment Date From</th>
            <th>Payment Date To</th>
            <th>Approval Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => {
            return (
              <tr key={index}>
                <th scope='row' key={index}>
                  {index + 1}
                </th>
                <td>{employee.employee_no}</td>
                <td>{employee.full_name}</td>
                <td>{employee.application_date_from}</td>
                <td>{employee.application_date_to}</td>
                <td>{employee.approval_month_from}</td>
                <td>{employee.approval_month_to}</td>
                <td>{employee.payment_date_from}</td>
                <td>{employee.payment_date_to}</td>
                <td>{employee.approval_status}</td>
                <td className='d-flex'>
                  <Link
                    className='btn btn-outline-primary mx-2'
                    to={`/editemployee/${employee.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className='btn btn-outline-danger mx-2'
                    onClick={() => deleteEmployee(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default EmployeeData;

{
  /* <tr>
                <th scope='row' key={index}>
                  {index + 1}
                </th>
                
              </tr> */
}
