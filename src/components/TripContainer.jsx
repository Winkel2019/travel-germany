import React from 'react';
import Trips from './Trips';

const TripContainer = ({handleState, checkboxes, addList, dataToShow}) => {
    
    return (
       <section className="trip-container">
         
        {dataToShow.map(info => (
        <Trips 
        name={info.name}
        category={info.category}
        duration={info.duration}
        date={info.date}
        price={info.price}
        description={info.description}
        image={info.image}
        addList={addList}
        handleState={handleState}
        checkboxes={checkboxes}
    />
    ))} 
       </section>
    )
}

export default TripContainer
