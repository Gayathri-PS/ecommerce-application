import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from "../Product/Product";

import { brandFilter } from "../../pipes/brandFilter";
import { orderByFilter } from "../../pipes/orderByFilter";
import { paginationPipe } from "../../pipes/paginationFilter";

import { formatMoney } from "../../pipes/priceFormatter";

class KidsWear extends Component {

    state = {
        colValue: 'col-lg-3',
        perPage: 4,
        currentPage: 1,
        pagesToShow: 4,
        gridValue: 4
    };


    render() {

        let isActive = this.state.colValue[this.state.colValue.length - 1];

        return (
            <div className="col-lg-12" style={{"backgroundImage":"url(https://github.com/anubhav199/Responsive-Ecommerce-Website/blob/master/Images/desktop-1.jpg?raw=true)","backgroundSize":"cover","backgroundAttachment":"fixed"}}>
                <h1 style={{'text-align':'center'}}>kID'S DRESS</h1>
                <div className="row">
                     
                             {paginationPipe(this.props.products.filter((data)=> (data.brand === 'kidsWear')? data : '')).map((ele)=> {
                             let classes = `${this.state.colValue} col-md-6 mb-4`;
                              return (<div className={classes}>

                            <Product key={ele.id} product={ele} />
                     </div>)
                           
                           
                        })
                      }
                     
                     
                      </div>

              
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state)
    const brands = state.brandFilter;
    const orderBy = state.orderBy;

    const filterByBrandArr = brandFilter(state.shop.products, brands);
    const filterByOrderArr = orderByFilter(filterByBrandArr, orderBy);


    return { products: filterByOrderArr }
};

export default connect(mapStateToProps, null)(KidsWear);
