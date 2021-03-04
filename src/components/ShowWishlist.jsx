import React, {useContext} from 'react'
import MyContext from '../context/MyContext'
import {Link} from 'react-router-dom'

const ShowWishlist = () => {
    const context = useContext(MyContext)
    const {list, listData, handleDelete, totalPrice, addQuantity, reduceQuantity} = context

    const  listDataToRender = listData.map((trip) => <div className='wishlist' key={trip.id}>
       <img src={trip.image} alt={trip.name}></img>
        <h4>{trip.name}</h4>
        <h4>{trip.date}</h4>
        <h4>{trip.price} EUR /Person</h4>
        <div className='btn-container'>
        <button className='add' onClick={() => addQuantity({trip})}>+</button> 
        <p>{trip.quantity}</p>
        <button style={{marginRight: '10px'}} className='add' onClick={() => reduceQuantity({trip})}>-</button> 
        <button className='add' style={{backgroundColor: 'grey'}} onClick={() => handleDelete({trip})}>X</button> 
        </div>
        </div>)
    return (
        <>
        {list < 1 ? <div className='noList'><h2>You have nothing in your wishlist.</h2> <Link to='/showTrips'><button style={{width: '200px'}}>CHOOSE YOUR TRIPS</button></Link></div> :
        <div className='wish-container'>
            <h2>Dates and Prices</h2>
            {totalPrice > 1  && <p className='total-price'>Total Price: {totalPrice} EUR</p>}
            {listDataToRender} 
            <div>
              {totalPrice > 1  && <Link to='/contact'><button className='book'>BOOK ONLINE NOW</button></Link>}
              
            </div>      
        </div>}
        </>
    )
}

export default ShowWishlist
