import React from 'react';
import './contact.scss';

const Contact = () => {
    return(
      
      <div className="background">
        <div className="container">
            <div className="container form bg-white mt-5 mb-3" >
    
                <p className="text-center login-heading hide-me">login</p>
                <div className="container hide-me">
                    <div className="row">
                        <div className="col mt-4 pl-5 pr-5">
                            <p className="username">username</p>
                            <div className="row mt-4">
                                <div className="col-2 text-center pt-1 pr-0">
                                    <i className="fa fa-user-o" aria-hidden="true" id="user"></i>
                                </div>
                                <div className="col-10 pl-0">
                                    <input type="text" placeholder="Type your username" className='input-1'/>
                                </div>
                            </div>
                            <hr className="hr-1"/>
                            <div className="hide"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-4 pl-5 pr-5">
                            <p className="username">Password</p>
                            <div className="row mt-4">
                                <div className="col-2 text-center pt-1 pr-0">
                                    <i className="fa fa-lock" aria-hidden="true" id="lock"></i>
                                </div>
                                <div className="col-10 pl-0">
                                    <input type="password" placeholder="Type your password" className="input-2"/>
                                </div>
                            </div>
                            <hr className="hr-2"/>
                            <div className="hide-1"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-right pr-5">
                            <a href="#"><span className="forget-password">Forget password?</span></a>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col pl-5 pr-5">
                            <a href="login-ecommerce.html"><span className="btn btn-block text-white login-button">login</span></a>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col text-center">
                            <span style={{'textTransform': 'capitalize' ,'fontFamily': 'Arial, Helvetica, sans-serif' , 'fontSize':'15px', 'fontWeight':'600' ,'color':'rgb(148, 141, 141)'}}>or sign up using</span>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className='col text-center'>
                            <span className="facebook-icon"><i className="fa fa-facebook" aria-hidden="true"></i></span>
                            <span className="twitter-icon"><i className="fa fa-twitter" aria-hidden="true"></i></span>
                            <span className="google-icon"><i className="fa fa-google" aria-hidden="true"></i></span>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col text-center">
                            <span style={{'textTransform': 'capitalize' ,'fontFamily': 'Arial, Helvetica, sans-serif' , 'fontSize':'15px', 'fontWeight':'600' ,'color':'rgb(148, 141, 141)'}}>or sign up using</span>
                        </div>
                        <div className="col-12 text-center pt-3">
                            <a href="#"><span className="sign-up">sign up</span></a>
                        </div>
                    </div>
                </div>
                                                                      
                <p className="text-center login-heading show-me">sign up</p>
                <div className="row show-me">
                    <div className="col mt-4 pl-5 pr-5">
                        <p className="username">First name</p>
                        <div className="row mt-4">
                            <div className="col-2 text-center pt-1 pr-0">
                                <i className="fa fa-user-o" aria-hidden="true" id="user"></i>
                            </div>
                            <div className="col-10 pl-0">
                                <input type="text" placeholder="Type your username" className='first-name'/>
                            </div>
                        </div>
                        <hr className="hr-1"/>
                        <div className="first-name-hide"></div>
                    </div>
                </div>
                <div className="row show-me">
                    <div className="col mt-4 pl-5 pr-5">
                        <p className="username">Last name</p>
                        <div className="row mt-4">
                            <div className="col-2 text-center pt-1 pr-0">
                                <i className="fa fa-user-o" aria-hidden="true" id="user"></i>
                            </div>
                            <div className="col-10 pl-0">
                                <input type="text" placeholder="Type your username" className='last-name'/>
                            </div>
                        </div>
                        <hr className="hr-1"/>
                        <div className="last-name-hide"></div>
                    </div>
                </div>
                <div className="row show-me">
                    <div className="col mt-4 pl-5 pr-5">
                        <p className="username">Email-id</p>
                        <div className="row mt-4">
                            <div className="col-2 text-center pt-1 pr-0">
                                <i className="fa fa-envelope-o" aria-hidden="true" id="user"></i>
                            </div>
                            <div className="col-10 pl-0">
                                <input type="text" placeholder="Type your username" className='email'/>
                            </div>
                        </div>
                        <hr className="hr-1"/>
                        <div className="email-hide"></div>
                    </div>
                </div>
                <div className="row show-me">
                    <div className="col mt-4 pl-5 pr-5">
                        <p className="username">Password</p>
                        <div className="row mt-4">
                            <div className="col-2 text-center pt-1 pr-0">
                                <i className="fa fa-lock" aria-hidden="true" id="lock"></i>
                            </div>
                            <div className="col-10 pl-0">
                                <input type="password" placeholder="Type your password" className="password-signup"/>
                            </div>
                        </div>
                        <hr className="hr-2"/>
                        <div className="password-signup-hide"></div>
                    </div>
                </div>
                <div className="row show-me">
                    <div className="col mt-4 pl-5 pr-5">
                        <p className="username">Confirm-password</p>
                        <div className="row mt-4">
                            <div className="col-2 text-center pt-1 pr-0">
                                <i className="fa fa-lock" aria-hidden="true" id="lock"></i>
                            </div>
                            <div className="col-10 pl-0">
                                <input type="password" placeholder="Type your password" className="confirm-password-signup"/>
                            </div>
                        </div>
                        <hr className="hr-2"/>
                        <div className="confirm-password-signup-hide"></div>
                    </div>
                </div>
                <div className="row show-me">
                    <div className="col pl-5">
                        <a href="#"><span className="forget-password">I accept the</span> <span style={{'textTransform':'capitalize','color':'blue'}}>terms of use</span>
                            <span style={{'textTransform':'capitalize','color':'blue'}}>privacy policy</span> </a>
                    </div>
                </div>
                <div className="row mt-4 show-me">
                    <div className="col pl-5 pr-5">
                        <a href="login-ecomarce.html"><span className="btn btn-block text-white signup-button">sign up</span></a>
                    </div>
                </div>
                <div className="row mt-5 show-me">
                    <div className="col text-center">
                        <span style={{'textTransform': 'capitalize' ,'fontFamily': 'Arial, Helvetica, sans-serif' , 'fontSize':'15px', 'fontWeight':'600' ,'color':'rgb(148, 141, 141)'}}>or sign up using</span>
                    </div>
                </div>
                <div className="row mt-5 show-me">
                    <div className='col text-center'>
                        <span className="facebook-icon"><i className="fa fa-facebook" aria-hidden="true"></i></span>
                        <span className="twitter-icon"><i className="fa fa-twitter" aria-hidden="true"></i></span>
                        <span className="google-icon"><i className="fa fa-google" aria-hidden="true"></i></span>
                    </div>
                </div>
                <div className="row mt-5 show-me">
                    <div className="col text-center">
                        <span style={{'textTransform': 'capitalize' ,'fontFamily': 'Arial, Helvetica, sans-serif' , 'fontSize':'15px', 'fontWeight':'600' ,'color':'rgb(148, 141, 141)'}}>already have an account</span>
                    </div>
                    <div className="col-12 text-center pt-3">
                        <a href="#"><span className="login-page">login</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    
    )
   
    }
export default Contact;

