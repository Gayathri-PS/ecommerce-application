import React from 'react';
import Corousel from '../../components/corousel';
import HomePage from "../../containers/homePage";
// import lDress from '../../containers/ladiesDresses/ladiesDresses';
import Pagination from "../../components/Pagination/Pagination";
import KidsWear from '../../components/kids';
import Slider from '../../components/slider';
import LadiesWear from '../../components/ladiesWear';
import GentsWear from '../../components/gentsWear';

const Home = () => {
    return (
        <React.Fragment>
            <div className="container" style={{marginTop: '100px'}} >
                <Corousel/>
                <div className="row">

                    <HomePage/>
                    
                   
                </div>
                
                <Slider/>
                <LadiesWear/>
                <GentsWear/>
                <KidsWear/>
            </div>
        </React.Fragment>
    );
};


export default Home;