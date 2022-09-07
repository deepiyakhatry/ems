import React from 'react';
import './Employee.css';
import { Link } from 'react-router-dom';

const Employee = () => {
  return (
    <div className='employee'>
      <div className='employee-first'>
        <table>
          <tbody>
            <tr>
              <td>
                Employee Number
                <td>
                  <input type='number'></input>
                </td>
              </td>
              <td>
                Full Name
                <td>
                  <input type='text'></input>
                </td>
              </td>
              <td>
                Application Date From
                <td>
                  <input type='date'></input>
                </td>
              </td>
              <td>
                Application Date To
                <td>
                  <input type='date'></input>
                </td>
              </td>
            </tr>
            <tr>
              <td>
                Approval Month From
                <td>
                  <input type='date'></input>
                </td>
              </td>
              <td>
                Approval Month To
                <td>
                  <input type='date'></input>
                </td>
              </td>
              <td>
                Payment Date From
                <td>
                  <input type='date'></input>
                </td>
              </td>
              <td>
                Payment Date To
                <td>
                  <input type='date'></input>
                </td>
              </td>
              <td>
                Approval Status
                <td>
                  <select
                    class='form-control'
                    aria-label='Default select example'
                  >
                    <option selected></option>
                    <option value='1'>One</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option>
                  </select>
                </td>
              </td>
            </tr>
            <tr>
              <td></td>
              <div className='btn-row'>
                <td>
                  <Link to='/create'>
                    <button type='button' class='btn btn-primary'>
                      Register
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to='/update'>
                    <button type='button' class='btn btn-success'>
                      Update
                    </button>
                  </Link>
                </td>
              </div>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='employee-second'>
        {/* <table cellPadding='20px'>
          <tbody>
            <tr>
              <td>Department Number</td>
              <td>
                <select
                  class='form-control'
                  aria-label='Default select example'
                >
                  <option selected>Search Department</option>
                  <option value='1'>One</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Division</td>
              <td>
                <select
                  class='form-control'
                  aria-label='Default select example'
                >
                  <option selected>Search Division</option>
                  <option value='1'>One</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Account</td>
              <td>
                <select
                  class='form-control'
                  aria-label='Default select example'
                >
                  <option selected>Search Account</option>
                  <option value='1'>One</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Summary Column</td>
              <td>
                <textarea
                  class='form-control'
                  id='form-control'
                  rows='2'
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>Payment Status</td>
              <td>
                <input type='text' className='form-control'></input>
              </td>
            </tr>
            <tr>
              <td>Amount</td>
              <td>
                <input type='text' className='form-control'></input>
              </td>
            </tr>
            <tr>
              <td>Note</td>
              <td>
                <textarea
                  class='form-control'
                  id='form-control'
                  rows='3'
                ></textarea>
              </td>
            </tr>
            <tr>
              <td></td>

              <div className='btn-row'>
                <td>
                  <Link to='/create'>
                    <button type='button' class='btn btn-primary'>
                      Register
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to='/update'>
                    <button type='button' class='btn btn-success'>
                      Update
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to='/delete'>
                    <button type='button' class='btn btn-danger'>
                      Delete
                    </button>
                  </Link>
                </td>
              </div>
            </tr>
          </tbody>
        </table> */}
      </div>
    </div>
  );
};

export default Employee;
