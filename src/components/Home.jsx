import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <h1>We're ready when you are</h1>
      <Link to='/showTrips'>
        <button type='button' className='checkout'>
          Checkout Tours
        </button>
      </Link>{' '}
    </main>
  );
};

export default Home;
