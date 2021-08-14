import React from 'react';
import './about.scss';

const About = () => {
    return(
        <>
        
    
    <div className="container">
        <div className="row mt-5">
            <div className="col-12 mt-5 text-center">
                <span className="header">about us</span>
            </div>
        </div>
        

        <div className="row mt-5">
            <div className="col-xl-6 col-lg-6 col-sm-12 text-center">
                <img src="https://github.com/anubhav199/Responsive-Ecommerce-Website/blob/master/Images/about-images.jpg?raw=true"  className="header-part"/>
            </div>
            <div className="col-xl-6 col-lg-6 col-sm-12 pt-5" style={{"fontWeight": "600"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent facilisis ac arcu et aliquet. Morbi tincidunt
                nisl vel finibus aliquam. Integer vestibulum ligula sit
                amet neque egestas, nec rhoncus eros convallis. Maecenas
                eu ligula a sapien posuere aliquet at nec ex. Pellentesque
                habitant morbi tristique senectus et netus et malesuada 
                Lorem ipsum dolor sit amet, consectetur.<span className="card-3"> adipiscing elit
                Praesent facilisis ac arcu et aliquet.Pellentesque
                habitant morbi tristique senectus et netus et malesuada 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent facilisis ac arcu et aliquet.</span>                
            </div>
        </div>
      
        <div className="row mt-5 mb-5">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-4 mb-4">
                <div className="card">
                    <div className="card-header text-center">Lorem ipsum</div>
                    <div className="card-body"><img src="https://github.com/anubhav199/Responsive-Ecommerce-Website/blob/master/Images/about-images-2.jpg?raw=true" height="200px" width="100%"/>
                        <p className="pt-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Praesent facilisis ac arcu et aliquet. Morbi tincidunt
                            nisl vel finibus aliquam. Integer vestibulum ligula sit
                            amet neque egestas, nec rhoncus eros convallis.</p>
                    </div>
                  </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-4">
                <div className="card">
                    <div className="card-header text-center">Lorem ipsum</div>
                    <div className="card-body"><img src="https://github.com/anubhav199/Responsive-Ecommerce-Website/blob/master/Images/about-images-3.jpg?raw=true" height="200px" width="100%"/>
                    <p className="pt-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Praesent facilisis ac arcu et aliquet. Morbi tincidunt
                            nisl vel finibus aliquam. Integer vestibulum ligula sit
                            amet neque egestas, nec rhoncus eros convallis.</p>
                    </div>
                  </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12  mt-4 card-3">
                <div className="card">
                    <div className="card-header text-center">Lorem ipsum</div>
                    <div className="card-body"><img src="https://github.com/anubhav199/Responsive-Ecommerce-Website/blob/master/Images/about-images-1.jpg?raw=true" height="200px" width="100%"/>
                    <p className="pt-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Praesent facilisis ac arcu et aliquet. Morbi tincidunt
                            nisl vel finibus aliquam. Integer vestibulum ligula sit
                            amet neque egestas, nec rhoncus eros convallis.</p>
                    </div>
                  </div>
            </div>
        </div>
    
    </div>

      
        </>
        
        
    )
}

export default About;
