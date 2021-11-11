import React from 'react';
import { Link, NavLink } from 'react-router-dom';
//import SearchBooksContextProvider from '../../contexts/SearchBooksContext';
import logo from '../../img/itbookstorelogo.png'
import Searchbar from './Searchbar';

const Navbar = () => {

    return ( 
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"> <img src={logo} alt='logo' style={{width: '170px'}} /> </Link>
                <i className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </i>

                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/" activeStyle={{fontWeight: 'bold', color: '#fff'}}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/about" activeStyle={{fontWeight: 'bold', color: '#fff'}}> About </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/freebook" activeStyle={{fontWeight: 'bold', color: '#fff'}}> Free eBooks </NavLink>
                        </li>
                    </ul>
                </div>
                
            </div>
            <Searchbar />
        </nav>
     );
}
 
export default Navbar;