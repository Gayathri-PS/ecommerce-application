import React from 'react';
import FilterBar from "../../containers/FilterBar/FilterBar";
import ProductList from "../../containers/ProductList/ProductList";


const Product = () => {
    return (
        <React.Fragment>
            <div className="container" style={{marginTop: '10rem'}} >
                <div className="row">
                    <FilterBar/>
                    <ProductList/>
                </div>
            </div>
        </React.Fragment>
    );
};


export default Product;