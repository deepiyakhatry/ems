import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='landing-page-wrapper'>
      <div className='landing-page'>
        <h2>Expenses Management System</h2>
        <span className='get-started'>
          <Link to='/list'>Get Started</Link>
        </span>
      </div>
    </div>
  );
};

export default Home;
