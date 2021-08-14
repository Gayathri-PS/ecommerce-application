import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from "../../components/Product/Product";

import { brandFilter } from "../../pipes/brandFilter";
import { orderByFilter } from "../../pipes/orderByFilter";
import { paginationPipe } from "../../pipes/paginationFilter";

import './ladiesWear.scss';
import { formatMoney } from "../../pipes/priceFormatter";

class LadiesWear extends Component {

    state = {
        colValue: 'col-lg-6',
        perPage: 8,
        currentPage: 1,
        pagesToShow: 3,
        gridValue: 3
    };
    


    render() {

        let isActive = this.state.colValue[this.state.colValue.length - 1];

        return (
            <div className="col-lg-12">
               
                <h1 style={{'textAlign':'center', 'margin':'40px'}}>LADIES DRESS</h1>
                

                     <div className="row">
                    
                      <div className='col-md-4'>
                      {paginationPipe(this.props.products.filter((data)=> (data.id === 19)? data : '')).map((ele)=> {
                            
                              return (
                                  <>
                                <img className="ladiesWear" src={ele.images} alt={ele.title} />
                                 
                            
                                 </>
            
                                     )
                            
                           
                                     })
                                      }
                      </div>
                      <div className="col-md-8 row">
                     
                             {(this.props.products.filter((data)=> (data.brand === 'ladiesWear')? data : '')).map((ele)=> {
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

export default connect(mapStateToProps, null)(LadiesWear);
