import React from 'react'

const CulturalTrip = ({name, handleState, category, description, duration, date, price, image, addList}) => {
    
    return (
        <section className="trip">
        <div className='image-container'><img src={image} alt={name} /></div>
        <p style={{color:"grey", fontStyle:"italic"}}>{category}</p>
        <h2>{name}</h2>
        <p>{description}</p>
        <button className='order' onClick={(e) => handleState(e)}> Order Catalog </button>
        <ul>
            <li>Duration: {duration}</li>
            <li>Date: {date}</li>
            <li>Price from: {price}</li>
        </ul>
        <button className='addBtn' onClick={(e) => addList(e)}>Add to Wishlist</button>
    </section>
    )
}

export default CulturalTrip
