import React from 'react';
import './slider.scss';
function Slider(){
    return(         
 <div className="container-fluid transparent pt-5 pb-5" id="parallax1" style={{"backgroundImage":"url(https://github.com/anubhav199/Responsive-Ecommerce-Website/blob/master/Images/desktop.jpg?raw=true)","backgroundSize":"cover","backgroundAttachment":"fixed"}}>
            <div className="container sift-couple" height="200px">
              <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12 textCenter">
                  <a href="ecommerce-price-men.html"><img src="https://github.com/anubhav199/Responsive-Ecommerce-Website/blob/master/Images/wedding-couple.jpg?raw=true" height="230px" classname="pl-5" data-aos="fade-up"/></a>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12 pt-4 text-center"> 
                  <span style={{"fontWeight":"700","fontSize":"20px"}} data-aos="zoom-in">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum consequat quam vel diam iaculis consectetur.
                Praesent ac arcu sem. Nulla consectetur magna ac libero
                rutrum malesuada. ClassName aptent taciti sociosqu ad litora
                torquent per conubia nostra, per</span><br/><br/><a href="ecommerce-price-men.html"><span style={{"fontSize":"20px","color":"rgb(180, 69, 69)","fontWeight": "800","textTransform": "uppercase"}} data-aos="zoom-in">choose your wedding dress</span></a>
                </div>
              </div>
            </div>
          </div>
    );
}
export default Slider;