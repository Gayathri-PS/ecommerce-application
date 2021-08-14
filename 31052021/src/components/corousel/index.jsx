import React from 'react';

const Corousel = () => {
    return (

<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active col-md-12">
        <img src="https://github.com/anubhav199/Responsive-Ecommerce-Website/blob/master/Images/background-image-1.jpg?raw=true" width="15%" alt="a" style={{ 'margin-top':'25px', 'margin-right':'15%' }}/>
       <img   src="https://github.com/anubhav199/Responsive-Ecommerce-Website/blob/master/Images/big-sale-2.jpg?raw=true" width="20%" alt="b" style={{ 'margin-top': '25px' }} />
     <img  src="https://github.com/anubhav199/Responsive-Ecommerce-Website/blob/master/Images/background-image-2.jpg?raw=true" width="45%" alt="c" style={{ margin: '5px' }}/>

    </div>
    <div className="carousel-item">
       <img  src="https://github.com/anubhav199/Responsive-Ecommerce-Website/blob/master/Images/sale-box.jpg?raw=true" width="40%" alt="a" style={{ 'margin-top':'25px' }}/>
       <img  src="https://github.com/anubhav199/Responsive-Ecommerce-Website/blob/master/Images/sale-1..png?raw=true" width="40%" alt="b" style={{ 'margin-top': '25px' }} />
    </div>
    <div className="carousel-item">
      <img  src="https://github.com/anubhav199/Responsive-Ecommerce-Website/blob/master/Images/ballon.jpg?raw=true" width="15%" alt="a" style={{ 'margin-top':'25px', 'margin-right':'15%' }}/>
       <img  src="https://github.com/anubhav199/Responsive-Ecommerce-Website/blob/master/Images/background-image.jpg?raw=true" width="20%" alt="b" style={{ 'margin-top': '25px' }} />
     <img  src="https://github.com/anubhav199/Responsive-Ecommerce-Website/blob/master/Images/sale-tag.jpg?raw=true" width="20%" alt="c" style={{ margin: '5px' }}/>
    </div>
  </div>
</div>


    );
};

export default Corousel;