import React from 'react';
import Trips from './Trips';

const TripContainer = ({dispatchList, dataToShow, handleState}) => {
    console.log(dispatchList);

    return (
       <section className="trip-container">
         
        {dataToShow.map((info, index) =>  (
        <Trips 
        key={index}
        name={info.name}
        category={info.category}
        duration={info.duration}
        date={info.date}
        price={info.price}
        description={info.description}
        image={info.image}
        dispatchList={dispatchList}
        handleState={handleState}
    />
    ))} 
       </section>
    )
}

export default TripContainer
