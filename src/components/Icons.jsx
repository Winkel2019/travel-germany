import React from 'react'
import {GrContact  } from 'react-icons/gr';
import {GiSelfLove} from 'react-icons/gi';
import {GrCatalog} from 'react-icons/gr';
import {RiMailOpenLine} from 'react-icons/ri';

const Icons = ({list}) => {

    return (
        <div className="icons">
            <div className='icon'>
            <GrContact size={25} /> 
            <p>Contact</p>
            </div>
            <div className='icon'>
            <RiMailOpenLine size={25}/>
            <p>Subscribe</p>
            </div>
            <div className='icon'>
            <GrCatalog size={25}/>
            <p>Catalog</p>
            </div>
            <div className='icon'>
            <GiSelfLove size={25}/>
            <p>Wishlist({list})</p>
           </div>   
        </div>
    )
}

export default Icons
