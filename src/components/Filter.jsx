import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import { GrSync } from 'react-icons/gr';

const Filter = () => {
  const { data, checkboxes, resetFilter, checkboxHandler } = useContext(
    MyContext
  );
  const {
    culturalTrip,
    musicTrip,
    natureTrip,
    shipTrip,
    specialTrip,
  } = checkboxes;

  const culturalTrips = data.filter((trip) => trip.checkbox === 'culturalTrip');
  const musicTrips = data.filter((trip) => trip.checkbox === 'musicTrip');
  const natureTrips = data.filter((trip) => trip.checkbox === 'natureTrip');
  const shipTrips = data.filter((trip) => trip.checkbox === 'shipTrip');
  const specialTrips = data.filter((trip) => trip.checkbox === 'specialTrip');

  return (
    <section className='checkboxes'>
      <h2>Filter Trips</h2>
      <div className='boxes'>
        <div className='singleCheck'>
          <input
            type='checkbox'
            name='culturalTrip'
            checked={culturalTrip}
            onChange={(e) => checkboxHandler(e)}
          />
          <label>Cultural Tours ({culturalTrips.length})</label>
        </div>
        <div className='singleCheck'>
          <input
            type='checkbox'
            name='musicTrip'
            checked={musicTrip}
            onChange={(e) => checkboxHandler(e)}
          />
          <label>Music Tours ({musicTrips.length})</label>
        </div>
        <div className='singleCheck'>
          <input
            type='checkbox'
            name='natureTrip'
            checked={natureTrip}
            onChange={(e) => checkboxHandler(e)}
          />
          <label>Nature/Active ({natureTrips.length})</label>
        </div>
        <div className='singleCheck'>
          <input
            type='checkbox'
            name='shipTrip'
            checked={shipTrip}
            onChange={(e) => checkboxHandler(e)}
          />
          <label>Ship/Train ({shipTrips.length})</label>
        </div>
        <div className='singleCheck'>
          <input
            type='checkbox'
            name='specialTrip'
            checked={specialTrip}
            onChange={(e) => checkboxHandler(e)}
          />
          <label>Special Trips ({specialTrips.length})</label>
        </div>
      </div>
      <button className='resetBtn' onClick={(e) => resetFilter(e)}>
        <GrSync /> Reset Filter
      </button>
    </section>
  );
};

export default Filter;
