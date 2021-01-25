import React, {useState} from 'react'

const CulturalTrip = ({name, handleState, category, description, duration, date, price, image, dispatchList}) => {
    const [toggle, setToggle] = useState(false)

    const buttonAdd = () => {
        console.log('dispatchList');
        dispatchList ({type: 'increment'})
        setToggle(true)
    }

    const buttonSub = () => {
        dispatchList({type: 'decrement'})
        setToggle(false)
    }

    return (
        <section className={toggle? 'trip show': 'trip' }>
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
        <div className='btn-container'>
                <button className='addBtn'  onClick={buttonAdd}>Add to Wishlist</button>
                <button className='addBtn' onClick={buttonSub}>Delete from Wishlist</button>
        </div> 
    </section>
    )
}

export default CulturalTrip
