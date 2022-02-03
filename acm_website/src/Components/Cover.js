import React from 'react'
import Feature from './UI/features/feature'
import Contact from './UI/contacts/contact'
// import {Link} from 'react-router-dom'


function Cover() {
    return (
        <div>
            
            <h1 className='text-monospace'>ACM COVER PAGE</h1>
            <h1 className='text-monospace'>ACM COVER PAGE</h1>
            <h1 className='text-monospace'>ACM COVER PAGE</h1>
            <h1 className='text-monospace'>ACM COVER PAGE</h1>
            <h1 className='text-monospace'>ACM COVER PAGE</h1>
            <h1 className='text-monospace'>ACM COVER PAGE</h1>
            <h1 className='text-monospace'>ACM COVER PAGE</h1>
            <h1 className='text-monospace'>ACM COVER PAGE</h1>
            <h1 className='text-monospace'>ACM COVER PAGE</h1>
            <h1 className='text-monospace'>ACM COVER PAGE</h1>
            <h1 className='text-monospace'>ACM COVER PAGE</h1>
       
      
            <div className='p-3 m-3'>
                <Feature/>
            </div>
            <div>
                <Contact/>
            </div>
                
            {/* <Link to="problem-list">ProblemSet</Link> */}
        </div>
    )
}

export default Cover
