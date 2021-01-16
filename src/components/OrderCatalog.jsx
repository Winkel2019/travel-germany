import React from 'react'

const OrderCatalog = ({name, email, formHandler, submitHandler}) => {
    return (
        <section>
            <h2 style={{marginBottom: "10px", color: 'grey'}}>Order Your Catalog</h2>
            <form autoComplete="off">
                <input type="text" name="name" value={name} placeholder='Your Full Name' onChange={(e) => formHandler(e)} />
                <input type="text" name="email" value={email} placeholder='Your Email' onChange={(e) => formHandler(e)} />
                <button className='btn' onClick={(e) => submitHandler(e)}>Order</button>
            </form>
        </section>
    )
}

export default OrderCatalog
