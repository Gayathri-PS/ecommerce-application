import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = ({ cartLength }) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img src="https://github.com/anubhav199/Responsive-Ecommerce-Website/blob/master/Images/shopping-logo.png?raw=true" alt=" AchieversIT" style={{ height: '50px' }} />
                </NavLink>
                 <span className="dropdown dropdown-toggle profile" data-toggle="dropdown" style={{"color":"black"}} >
              <a href="#/"><img src="https://github.com/anubhav199/Responsive-Ecommerce-Website/blob/master/Images/profile-icon.png?raw=true" className="profile-icon color"/></a>
            </span>
            <ul className="dropdown-menu  text-center" style={{"margin-left":"40%" ,"border-radius":"10px"}}>
              <li className="pre-profile-1 pt-2 pb-2"><a href="#/" className="color" style={{"font-weight":"600"}}>Help Center </a></li>
              <li className="pre-profile-1 pt-2 pb-2"><a href="#/" className="color" style={{"font-weight":"600"}}>Order History</a></li>
              <li className="pre-profile-1 pt-2 pb-2"><a href="#/" className="color" style={{"font-weight":"600"}}>Change Password</a></li>
              <li className="pre-profile-1 pt-2 pb-2"><a href="#/" className="color" style={{"font-weight":"600"}}>Update Profile</a></li>
              <li className="pre-profile-1 pt-2 pb-2"><a href="login-form.html" className="color" style={{"font-weight":"600"}}>Log In</a></li>
            </ul>
                <div>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">PRODUCTS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">ABOUT</NavLink>
                        </li>
                       
                         <li className="nav-item">
                            <NavLink className="nav-link" to={"/contact"}>CONTACT</NavLink>
                        </li>
                         <li className="nav-item">
                            <NavLink className="nav-link" to={"/cart"}><i className="fa fa-shopping-cart mr-2"
                                aria-hidden="true" />Cart {cartLength ? `(${cartLength})` : ''}</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};



const mapStateToProps = (state) => {
    return {
        cartLength: state.shop.cart.length
    }
};

export default connect(mapStateToProps, null)(Header);
