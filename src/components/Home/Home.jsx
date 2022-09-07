import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <h1>Expense Management System</h1>
      <button type='button' class='btn btn-success'>
        <Link to='/register'>Register Now!</Link>
      </button>
    </div>
  );
};

export default Home;
