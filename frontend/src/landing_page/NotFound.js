import React from 'react';
import {Link} from 'react-router-dom';
function NotFound() {
    return ( 
        <div className="'container p-5 mb-5">
            <div className='row text-center'>
                <h1 className='mt-5'>4o4 Not Found</h1>
                <p>Sorry, the page you are looking for doesn't exist.</p>
                <Link to="/"><button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%" , margin:"0 auto"}} >Click to HomePage</button></Link>
            </div>
        </div>

    
     );
}

export default NotFound;