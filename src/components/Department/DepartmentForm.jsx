import React from 'react';

const DepartmentForm = () => {
  return (
    <div className='department-form'>
      <table cellPadding='20px'>
        <tbody>
          <tr>
            <td>Department Name</td>
            <td>
              <input type='text' />
            </td>
          </tr>
          <tr>
            <td className='department-form-table--custom'>Access</td>
            <td>
              <div className='department-form--access'>
                <div>
                  <input type='checkbox' /> User Editing Authority
                </div>
                <div>
                  <input type='checkbox' /> Account Editing Authority
                </div>
                <div>
                  <input type='checkbox' /> Payment Editing Authority
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button className='department-form--button'>Register</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentForm;
