import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='register mt-5 m-auto'>
          <h3 className='mb-4'>Expense Register</h3>
          <table cellPadding='20px' className='first'>
            <tbody>
              <tr>
                <td>Department Name</td>
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
          </table>
        </div>
      </div>
    </div>
  );
};

export default Register;
