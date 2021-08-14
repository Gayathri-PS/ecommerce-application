import React, { Component } from 'react'; 
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Home from "./pages/Home/Home";
import Product from './pages/product/product';
import Header from "./components/Header/Header";
import About from './components/about';
import Footer from "./components/Footer/Footer";

import Payment from './components/payment';
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ShoppingCart from "./pages/ShopingCart/ShopingCart";
import Contact from './components/contact/contact';





export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                 <BrowserRouter>
                    <React.Fragment>
                        <Header />
                        <Switch>
                            <Route exact path={'/'} render={() => {
                                return <Redirect to={'/products'} />
                            }} />
                            <Route exact path={'/products'} component={Home} />
                            <Route exact path={'/product'} component={Product}/>
                            <Route exact path={'/about'} component={About}/>
                            <Route exact path={'/contact'} component={Contact}/>
                            <Route exact path={'/products/:id'} component={ProductDetail}/>
                            <Route exact path={'/cart'} component={ShoppingCart}/>
                            <Route exact path={'/payment/:id'} component={Payment}/>
                    
                        </Switch>
    
                        <Footer />
                    </React.Fragment>
                </BrowserRouter> 
            </Provider>
        );
    }
}

export default App;

