import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import { NavLink } from 'react-router-dom';
import { GrMandriva } from 'react-icons/gr';

const Header = () => {
  const context = useContext(MyContext);
  const { list } = context;

  return (
    <header>
      <h1 className='logo'>
        <GrMandriva size={55} color='dodgerblue' /> Choice Travel
      </h1>
      <div className='nav'>
        <nav>
          <ul>
            <li>
              <NavLink to='/' exact activeStyle={{ color: 'dodgerblue' }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/showTrips' activeStyle={{ color: 'dodgerblue' }}>
                Trips
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' activeStyle={{ color: 'dodgerblue' }}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to='/showWishlist' activeStyle={{ color: 'dodgerblue' }}>
                Wishlist({list})
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
