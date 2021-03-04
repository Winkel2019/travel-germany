import React from 'react'

const NotFound404 = (props) => {
    return (
        <section>
            <h1>The page you are looking for can not be found.</h1>
            <button style={{marginBottom: '200px'}} onClick={() => props.history.push('/')}>Go Back to Main</button>
        </section>
    )
}

export default NotFound404
