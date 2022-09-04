import React from 'react';
import DepartmentForm from '../Department/DepartmentForm';
import Header from '../Header/Header';

const Register = () => {
  return (
    <div className='register'>
      <Header header='Department Information' />
      <DepartmentForm />
    </div>
  );
};

export default Register;
