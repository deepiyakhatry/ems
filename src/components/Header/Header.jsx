import React from 'react';

const Header = (props) => {
  return (
    <div className='all-departments--header'>
      <h3>{props.header}</h3>
    </div>
  );
};

export default Header;
