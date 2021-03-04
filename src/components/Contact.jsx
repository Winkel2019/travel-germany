import React from 'react'

const Contact = () => {
    return (
        <div className='contactForm'>
            <form autoComplete='off'>
            <h2 style={{margin: '30px 10px', textAlign: 'center'}}>Contact Us  </h2>
            <input type="text" placeholder="Your full name" required/>
            <input type="text" placeholder="Your email" required/>
            <label htmlFor="">Do you have any questions or requests about your trip?</label>
            <textarea name="message"  placeholder="Message" id="" cols="40" rows="20"></textarea>
            <button>Submit</button>
            </form>                 
        </div>
    )
}

export default Contact
