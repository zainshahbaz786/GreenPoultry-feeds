import React from 'react'
import {Link} from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import HomePage from './HomePage';




const Topbar = () => {
    return (
        <>


           

<div className="topbar">


            <div className="topbar_elem"><Link to="/">Home Page</Link></div>
            <div className="topbar_elem"><Link to="/OurProducts">Our Products</Link></div>
           
            <div className="topbar_elem"><Link to="/OurFarm">Our Farms</Link></div>
            
            <div className="topbar_elem"><Link to="/Gallery">Gallery</Link></div>
            
            <div className="topbar_elem"><Link to="/PoultryExpertsPage">Poultry Experts</Link></div> 
            <div className="topbar_elem"><Link to="/AboutUs">About Us</Link></div>
            <div className="topbar_elem"><Link to="/ContactUsPage">Contact Us</Link></div>

</div>

<HomePage/>

        </>
    )
}
export default Topbar




