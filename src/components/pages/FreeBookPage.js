import React from 'react';
import { Link } from 'react-router-dom';
import FreeBook from '../books/FreeBook';

const FreeBookPage = () => {

    return ( 
        <React.Fragment>
            <div className="container-fluid" id="welcome-div">
                <h2> Free IT, Programming and Computer Science Books </h2>
            </div>
            <div className="container">
                <h5 style={{paddingTop: "20px"}}> <Link className="link" to="/"> Home </Link> / Free eBooks </h5>
                <FreeBook />
            </div>
        </React.Fragment>
     );
}
 
export default FreeBookPage;