import React from 'react'
import { BrowserRouter,Link } from 'react-router-dom/cjs/react-router-dom.min';


import tick1 from './Images/accept.png';
import tick2 from './Images/approved.png';
import tick3 from './Images/checked.png';
import SocialAcc from './SocialAcc';
import BroilerFeed from './Images/broilerfeeds.jpg';
import LayerFeed from './Images/layerfeeds.jpg';
import BreederFeed from './Images/breederfeeds.jpg';


const BPFP = () => {
    //                          BPFP means Best Poultry Feeds in Pakistan
    return (
        <>
<div style={{backgroundColor:"white"}}>
    <h2 style={{textAlign:"center",fontSize:"32px"}}>Best Poultry Feeds in Pakistan</h2>
    <p style={{paddingLeft:"225px",paddingRight:"225px"}}>
        Al Noor Feeds vision is to achieve and then remain as the most progressive and profitable Poultry organization in Pakistan. Incorporated in 2011 with limited feed products but today Al Noor Feeds broadly undertakes all Poultry Feed Products in Pakistan.
    </p>
<BrowserRouter>
<Link to="/OurProducts"> <button className='button'>View All Products</button></Link>
</BrowserRouter>
</div>
<br/><br/>
{/* feed categories */}
<div style={{backgroundColor:"#d8e4e7",display:"flex",justifyContent:"center"}}>
        <div className="feedcateg"> <img className="feedcategimg" src={BroilerFeed} alt="Broiler Feed" style={{height:"250px",width:"250px"}}/><h3 style={{textAlign:"center"}}> Broiler Feed</h3>  </div>

        <div className="feedcateg"><img className="feedcategimg" src={LayerFeed} alt="Layer Feed" style={{height:"250px",width:"250px"}}/><h3 style={{textAlign:"center"}}> Layer Feed</h3></div>

        <div className="feedcateg"><img className="feedcategimg" src={BreederFeed} alt="Breeder Feed" style={{height:"250px",width:"250px"}}/><h3 style={{textAlign:"center"}}> Breeder Feed</h3></div>

<br/><br/>

</div>

<br/><br/>

<div style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
    <div style={{padding:"50px", display:"flex"}}>
        <img src={tick3} alt="approve" style={{height:"70px",width:"70px"}}></img>
        <div style={{paddingTop:"17px"}}><h3>Halal Feeds</h3></div>
         </div>
    <div style={{padding:"50px",display:"flex"}}>
    <img src={tick2} alt="approve" style={{height:"70px",width:"70px"}}></img>
    <div style={{paddingTop:"17px"}}><h3>Legally Approve </h3></div>


    </div>
    <div style={{padding:"50px" ,display:"flex"}}>
    <img src={tick1} alt="approve" style={{height:"70px",width:"70px"}}></img>
    <div style={{paddingTop:"17px"}}><h3>Quality Feeds</h3></div>


    </div>

</div>

{/* below div is for the map  */}
<div style={{height:"300px",backgroundColor:"pink"}}>
<h1 style={{textAlign:"center"}}> Google Map will be Embeded here </h1>
</div>


<SocialAcc/>
        </>
    )
}

export default BPFP
