import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
export const List = () => {
  return (
    <div className='all-departments'>
      <div className='all-departments--nav'>
        <Header header='Departments' />
        <div className='all-departments--search-header'>
          <input type='text' placeholder='Search Departments' />
          <span className='get-started'>
            <strong>
              <Link to='/register'>Create</Link>
            </strong>{' '}
            +
          </span>
        </div>
      </div>
      <div className='all-departments--list'>
        <table className='all-departments--table' border='1'>
          <thead>
            <tr>
              <th>S.N</th>
              <th>Departments</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Department 1</td>
              <td>...</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Department 2</td>
              <td>...</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Department 3</td>
              <td>...</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Department 4</td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
