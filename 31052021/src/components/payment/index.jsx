import React from 'react';
import './payment.scss';
import {connect} from 'react-redux';
import {formatMoney} from "../../pipes/priceFormatter";

const Payment = (props) => {
    const {
        title,
        images,
        brand,
        price,
        description,
        id
    } = props.product;

    
    return(
        <>
        <div className='top'>
    
    <div className="container mt-5">
        <div className="row pt-5">
            <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 mt-3">
               <div id="accordion">
                  <div className="card">
                      <div className="card-header">
                        <div className="row pt-3">
                          <div className="col-2 text-center">
                            <span style={{"padding":"2% 8%","border":"1px solid transparent","backgroundColor": "rgb(197, 191, 191)"}}>1</span>
                          </div>
                          <div className="col-6">
                            <span style={{"fontSize":"15px","fontWeight":"600","color":"grey","textTransform": "uppercase"}}>delivery address</span>
                            <p>user address</p>
                          </div>
                          <div className="col-4 pl-0">
                            <button className="btn btn-primary" data-toggle="collapse" data-target="#collapseOne" id="button-hidder" style={{"textTransform": "uppercase"}}>Change</button>
                          </div>
                        </div>
                      </div>
                      <div id="collapseOne" className="collapse" data-parent="#accordion">
                        <div className="card-body">
                          <div className="row pl-3 ">
                            <div className="col-6 ">
                              <input type="radio" className="hide-for-front" name="address" checked/>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{"text-transform":"uppercase","font-size":"15px"}}>username</span>
                            </div>
                            <div className="col-6 text-right pr-5">
                              <a href="#" className="edit hide-for-front" style={{"textTransform": "uppercase"}}>edit</a>
                            </div>
                          </div>
                          <div className="row pl-5 pb-3 hide-for-front"> 
                            <div className="col">
                              <span style={{"textTransform": "uppercase"}}>user address</span>
                            </div>
                          </div>
                          <div className="row pl-5 hide-for-front">
                            <div className="col">
                              <p><button style={{"textTransform": "uppercase","padding":"2% 5%","backgroundColor": "tomato","color":"white","borderColor":"transparent"}} data-toggle="collapse" data-target="#collapseOne,#collapseTwo" id="button-hidder-1">delivery here</button></p>
                            </div>
                          </div>
                          <div className="container show-for-front">
                            <div className="row pl-3 ">
                              <input type="radio" checked/>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{"textTransform":"uppercase","fontSize":"15px"}}>EDIT ADDRESS</span>
                            </div>
                            <div className="row pl-5 pt-3 pb-3 ">
                              <button className="btn-primary text-white pl-4 pr-4 pt-2 pb-2" style={{"borderRadius":"10px"}}>Use my current location</button>
                            </div>
                            <div className="row pb-3">
                              <div className="col-6 text-right pr-0">
                                <input type="text" placeholder="NAME" style={{"width":"90%","height":"50px"}} className="pl-3"/>
                              </div>
                              <div className="col-6">
                                <input type="text" placeholder="10-digit mobile number" style={{"width":"90%","height":"50px"}} className="pl-3"/>
                              </div>
                            </div>
                            <div className="row pr-0 pb-3">
                              <div className="col-6 text-right pr-0">
                                <input type="text" placeholder="Pincode" style={{"width":"90%","height":"50px"}} className="pl-3"/>
                              </div>
                              <div className="col-6">
                                <input type="text" placeholder="Locality" style={{"width":"90%","height":"50px"}} className="pl-3"/>
                              </div>
                            </div>
                            <div className="row pb-3" style={{"paddingLeft":"4.7%"}}>
                              <div className="col">
                                <input type="text" placeholder="Address (Area and  Street)" style={{"width":"95%","height":"50px"}} className="pl-3"/>
                              </div>
                            </div>
                            <div className="row pb-3">
                              <div className="col-6 text-right pr-0">
                                <input type="text" placeholder="City/District/Town" style={{"width":"90%","height":"50px"}} className="pl-3"/>
                              </div>
                              <div className="col-6">
                                <input type="text" placeholder="State" style={{"width":"90%", "height":"50px"}} className="pl-3"/>
                              </div>
                            </div>
                            <div className="row pr-0 pb-3">
                              <div className="col-6 text-right pr-0">
                                <input type="text" placeholder="Landmark (optional)" style={{"width":"90%","height":"50px"}} className="pl-3"/>
                              </div>
                              <div className="col-6">
                                <input type="text" placeholder="Alternate Phone (Optional)" style={{"width":"90%","height":"50px"}} className="pl-3"/>
                              </div>
                            </div>
                            <div className="row pl-5">
                              <button className="btn-primary text-white pl-4 pr-4 pt-2 pb-2" style={{"borderRadius":"10px","textTransform": "uppercase","fontWeight": "600"}}>save and deliver here</button>
                              &nbsp;&nbsp;&nbsp;<span className="pt-2 call-back"><a href="#/" style={{"textTransform": "uppercase"}}>cancle</a></span>
                            </div>
                        </div>
                      </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <div className="row pt-3 pb-3">
                        <div className="col-2 text-center">
                          <span style={{"padding":"2% 8%","border":"1px solid transparent","backgroundColor": "rgb(197, 191, 191)"}}>2</span>
                        </div>
                        <div className="col-10">
                          <span style={{"fontSize":"15px","fontWeight":"600","color":"grey","textTransform": "uppercase"}}>Order Summary</span>
                        </div>
                      </div>
                    </div>
                    <div id="collapseTwo" className="collapse" >
                      <div className="card-body">
                        <div className="row pb-3 ">
                          <div className="col-xl-4 col-lg-2 col-md-3 col-sm-3 col-12 pt-5 text-center">
                            <img src={images} height="200px"/>
                            <div className="text-left">
                              <select name="Qunatity" className="custom-select mt-2 first">
                                <option selected>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xl-8 col-lg-10 col-md-8 col-sm-8 col-8 pt-5">
                            <p>Item Name:&nbsp;{brand}</p>
                            <p>Price:&nbsp;&#8377;{formatMoney(price)}</p>
                          </div>
                        </div>
                     
                        <div className="row">
                          <div className="col pr-5 text-right">
                            <p><button style={{"textTransform": "uppercase","padding":"2% 5%","backgroundColor": "tomato","color":"white","borderColor":"transparent"}} data-toggle="collapse" data-target="#collapseTwo,#payment-option">continue</button></p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <div className="row pt-3 pb-3">
                      <div className="col-2 text-center">
                        <span style={{"padding":"2% 8%","border":"1px solid transparent","backgroundColor": "rgb(197, 191, 191)"}}>3</span>
                      </div>
                      <div className="col-10">
                        <span style={{"fontSize":"15px","fontWeight":"600","color":"grey","textTransform": "uppercase"}}>Payment Options</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="collapse" id="payment-option">
                    <div className="row">
                      <div className="col pl-4 pb-3" id="phone-pe-hidder">
                        <input type="radio" name="payment-method" data-toggle="collapse" data-target="#phonepe"/>&nbsp;&nbsp;&nbsp;<img src="https://github.com/anubhav199/Responsive-Ecommerce-Website/blob/master/Images/phone-pe.png?raw=true" style={{"height":"30px"}}/> PhonePe
                      </div>
                    </div> 
                    <div id="phonepe" className="collapse"> 
                      <div className="row pt-2">
                        <div className="col text-center">
                          <p>You'll be redirected to PhonePe page, where you can pay using UPI, credit/debit card or wallet</p>
                        </div>
                      </div>
                      <div className="row pl-5">
                        <div className="col">
                          <p><button style={{"textTransform": "uppercase","padding":"1.5% 7%","backgroundColor": "tomato","color":"white","borderColor":"transparent"}} data-toggle="collapse" data-target="#payment-option">continue</button></p>
                        </div>
                      </div>
                    </div>
                      <div className="row">
                        <div className="col pl-4" id="debit-hidder">
                          <p><input type="radio" name="payment-method" data-toggle="collapse" data-target="#debit"/>&nbsp;&nbsp;&nbsp;Credit/Debit/ATM Card</p>
                        </div>
                      </div>
                      <div className="collapse" id="debit">
                      <div className="row">
                        <div className="col pl-5">
                          <p><input type="text" placeholder="Enter Card Number" className="pt-2 pb-2 pl-4 card-number"/></p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4  col-sm-6  col-12  pl-5">
                          <p><input type="date" placeholder="DD/MM/YY" className="pt-2 pb-2 pl-2 pr-2 date"/></p>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2  col-sm-3  col-12 pl-5 ">
                          <p><input type="text" placeholder="CVV" className="pt-2 pb-2 pl-4 cvv"/></p>
                        </div>
                        <div className="col-xl-6 pt-1 pl-5 "> 
                          <p><button style={{"textTransform": "uppercase","padding":"1.5% 7%","backgroundColor": "tomato","color":"white","borderColor":"transparent"}} data-toggle="collapse" data-target="#payment-option" >PAY &#8377;1,377</button></p>
                        </div>
                      </div>
                      </div>
                      <div className="row">
                        <div className="col pl-4" id="net-banking-hidder">
                          <p><input type="radio" name="payment-method" data-target="#net-banking" data-toggle="collapse"/>&nbsp;&nbsp;&nbsp;Net Banking</p>
                        </div>
                      </div>
                      <div className="collapse" id="net-banking">
                      <div className="row pl-4 pr-4">
                        <div className="col-12 pb-2 ">                                                              
                          POPULAR BANKS
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 pt-3">
                          <input type="radio" name="bank"/>&nbsp;&nbsp;&nbsp;<img src="https://github.com/anubhav199/Responsive-Ecommerce-Website/blob/master/Images/hdfc-logo.png?raw=true" style={{"height":"20px"}}/>&nbsp;&nbsp;HDFC Bank
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 pt-3">
                          <input type="radio" name="bank"/>&nbsp;&nbsp;<img src="https://github.com/anubhav199/Responsive-Ecommerce-Website/blob/master/Images/ici-logo.png?raw=true" style={{"height":"30px"}}/>&nbsp;&nbsp;ICICI Bank
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 pt-3">
                          <input type="radio" name="bank"/>&nbsp;&nbsp;&nbsp;<img src="https://github.com/anubhav199/Responsive-Ecommerce-Website/blob/master/Images/state-logo.png?raw=true" style={{"height":"20px"}}/>&nbsp;&nbsp;State Bank Of India
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 pt-3">
                          <input type="radio" name="bank"/>&nbsp;&nbsp;&nbsp;<img src="https://github.com/anubhav199/Responsive-Ecommerce-Website/blob/master/Images/axis-logo.jpg?raw=true" style={{"height":"20px"}}/>&nbsp;&nbsp;Axis Bank
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 pt-3">
                          <input type="radio" name="bank"/>&nbsp;&nbsp;<img src="https://github.com/anubhav199/Responsive-Ecommerce-Website/blob/master/Images/kotak-logo.jpeg?raw=true" style={{"height":"30px"}}/>&nbsp;&nbsp;Kotak Bank
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 pt-3">
                         <span style={{"visibility": "hidden"}}>hello user</span>
                        </div>
                      </div>
                      <div className="row pt-3 pl-4"> 
                        <div className="col-12">
                          <span>Other Bank</span>
                        </div>
                        <div className="col-12 pt-3">
                          <input type="text" placeholder="Bank Name" style={{"width":"50%"}} className="pt-1 pb-1 pl-4"/>
                        </div>
                        <div className="col-12 pt-4">
                          <p><button style={{"textTransform": "uppercase","padding":"1.5% 7%","background-color": "grey","color":"white","border-color":"transparent","font-weight": "600"}} data-toggle="collapse" data-target="#payment-option">PAY &#8377;{formatMoney(price)}</button></p>
                        </div>
                      </div>
                      </div>
                      <div className="row">
                        <div className="col pl-4" id="cash-hidder">
                          <p><input type="radio" name="payment-method" data-toggle="collapse" data-target="#cash"/>&nbsp;&nbsp;&nbsp;Cash on Delivery</p>
                            <div className="collapse" id="cash">
                          <p className="pl-3"><button style={{"textTransform": "uppercase","padding":"1.5% 7%","backgroundColor": "grey","color":"white","borderColor":"transparent","fontWeight": "600"}}  data-toggle="collapse" data-target="#payment-option">confirm</button></p>
                              </div>
                        </div>
                      </div> 
                      </div>
                    </div>
                  </div>
              </div>
              </div>  
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 pt-4">
              <div className="container">
                <div className="card">
                  <div className="card-header">PRICE DETAILS</div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col text-left">
                        Price :
                      </div>
                      <div className="col text-right">
                        &#8377;{formatMoney(price)}
                      </div>
                    </div>
                      <div className="row pt-3">
                        <div className="col-7 text-left ">
                          Delivery Charges :
                        </div>
                        <div className="col text-right">
                          Free
                        </div>
                      </div>
                    <hr/>
                    <div className="row">
                      <div className="col text-left">
                        Total Amount :
                      </div>
                      <div className="col text-right">
                        &#8377;{formatMoney(price)}
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
        </div>

    </div>
   
    
        </div>
        </>
    )
}
const mapStateToProps = (state, props) =>  {

    const product = state.shop.products.find(product => product.id === +props.match.params.id);

    return {
        product
    }
};
export default connect(mapStateToProps)(Payment);
