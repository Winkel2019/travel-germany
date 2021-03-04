import React, { useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';
import { FaStar } from 'react-icons/fa';
import Filter from './Filter';

const ShowAllTrips = () => {
  const {
    data,
    setIsFiltering,
    isFiltering,
    passedData,
    setPassedData,
    checkboxes,
    handleWishlist,
  } = useContext(MyContext);

  const handleStars = (stars) => {
    const starsArray = new Array(stars).fill(undefined);
    return starsArray.map((_, i) => <FaStar color='red' key={i} />);
  };

  useEffect(() => {
    const handleFiltering = () => {
      let newDataArray = [];
      for (const key in checkboxes) {
        if (checkboxes[key] === true) {
          const tempArray = data.filter((trip) => trip.checkbox === key);
          newDataArray.push(...tempArray);
        }
        setPassedData(newDataArray);
      }
    };

    if (isFiltering) {
      handleFiltering();
      setIsFiltering(false);
    }
  }, [
    passedData,
    isFiltering,
    checkboxes,
    data,
    setIsFiltering,
    setPassedData,
  ]);

  const dataToShow = passedData.length > 0 ? passedData : data;

  const allTrips = dataToShow.map((trip) => (
    <div key={trip.id} className='trip'>
      <img src={trip.image} alt={trip.name}></img>
      <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>{trip.name}</h2>
      <p style={{ textAlign: 'center', margin: '0 10px 10px 10px' }}>
        {trip.description}
      </p>
      <p>
        <strong>Duration:</strong> {trip.duration}
      </p>
      <p>
        <strong>Date:</strong> {trip.date}
      </p>
      <p>
        <strong>Price from:</strong> {trip.price} EUR
      </p>
      <div>{handleStars(trip.star)}</div>
      <button className='addBtn' onClick={() => handleWishlist({ trip })}>
        Add to Wishlist
      </button>
    </div>
  ));

  return (
    <section className='trip-page'>
      <Filter />
      <div className='trip-container'>{allTrips}</div>
    </section>
  );
};

export default ShowAllTrips;
