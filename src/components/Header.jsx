import React from 'react';
import OrderCatalog from './OrderCatalog'
import Icons from './Icons';

const Header = ({list, state, formData, formHandler, submitHandler}) => {
    const {name, email} = formData

    return (
        <header className='sticky'>
            <h1>Choice Travel Germany</h1>
            <h2>Cultural, Music, Nature and Active Trips in 2021</h2>
            {state && <OrderCatalog name={name} email={email} formHandler={formHandler} submitHandler={submitHandler}/>}        
            <Icons list={list}/>
        </header>
    )
}

export default Header
