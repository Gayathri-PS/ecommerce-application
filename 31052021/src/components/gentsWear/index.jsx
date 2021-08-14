import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from "../../components/Product/Product";

import { brandFilter } from "../../pipes/brandFilter";
import { orderByFilter } from "../../pipes/orderByFilter";
import { paginationPipe } from "../../pipes/paginationFilter";
import './gentsWear.scss';
import { formatMoney } from "../../pipes/priceFormatter";

class GentsWear extends Component {

    state = {
        colValue: 'col-lg-6',
        perPage: 4,
        currentPage: 1,
        pagesToShow: 4,
        gridValue: 4
    };


    render() {

        let isActive = this.state.colValue[this.state.colValue.length - 1];

        return (
            <div className="col-lg-12">
                <h1 style={{'text-align':'center'}}>MEN'S DRESS</h1>
                <div className="row">
                <div className='col-md-4'>
                         {paginationPipe(this.props.products.filter((data)=> (data.id === 23)? data : '')).map((ele)=> {
                            
                              return (
                                  <>
                                <img className="gentsWear" src={ele.images} alt={ele.title} />
                                
                                 </>
                                
            
                     )
                            
                           
                        })
                      }
                      </div>
                      <div className='col-md-8 row' >
                     
                             {paginationPipe(this.props.products.filter((data)=> (data.brand === 'mensWear')? data : '')).map((ele)=> {
                             let classes = `${this.state.colValue} col-md-6 mb-4`;
                              return (<div className={classes}>

                            <Product key={ele.id} product={ele} />
                     </div>)
                           
                           
                        })
                      }
                     
                      </div>
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

export default connect(mapStateToProps, null)(GentsWear);
