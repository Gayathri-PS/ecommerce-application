import React from 'react';
import {connect} from 'react-redux';
import {formatMoney} from "../../pipes/priceFormatter";
import {addProductToCart} from "../../actions";
import { Link } from 'react-router-dom';

const ProductDetail = (props) => {

    const {
        title,
        images,
        brand,
        price,
        description,
        id
    } = props.product;


    const onCart = () => {
        props.dispatch(addProductToCart(props.product));
    };

    return (
        <aside className="col-sm-7">
            <article className="card-body p-5">
                <h3 className="title mb-3">{title}</h3>

                <p className="price-detail-wrap">
	<span className="price h3 text-warning">
		<span className="currency">$</span><span className="num">{formatMoney(price)}</span>
	</span>
                </p>
                <dl className="item-property">
                    <dt>Description</dt>
                    <dd><p className="text-capitalize">{description}</p></dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Brand</dt>
                    <dd className="text-capitalize">{brand}</dd>
                </dl>
                <hr/>
                
                <button
                    onClick={onCart}
                    className="btn btn-lg btn-outline-primary text-uppercase"><i
                    className="fa fa-shopping-cart"/> Add to cart
                </button>
                <button className="btn btn-lg btn-outline-primary text-uppercase ml-5 color-danger">
                    <Link to={`/payment/${id}`}>BUY NOW</Link>
                    </button>
            </article>
        </aside>
    );
};

export default connect()(ProductDetail);
